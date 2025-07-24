import typer
import tomllib
import sh
from pathlib import Path
from jinja2 import Environment, FileSystemLoader
from rich.console import Console
from rich.panel import Panel

app = typer.Typer()
console = Console()


@app.command()
def resume(
    template: str = typer.Option(
        "template.html", help="Specify the HTML template to use."
    ),
    input: str = typer.Option(
        "resume.toml", help="Specify the resume config file to use."
    ),
    engine: str = typer.Option(
        "weasyprint", help="PDF engine to use (weasyprint, wkhtmltopdf)"
    ),
):
    """
    Create a PDF from a resume configuration file and an HTML template.
    """
    try:
        # Parse TOML file
        input_path = Path(input)
        if not input_path.exists():
            console.print(
                f"❌ [red]Error: Input file [bold]{input}[/bold] not found.[/red]"
            )
            raise typer.Exit(1)

        with console.status(f"[cyan]Reading resume data from [bold]{input}[/bold]..."):
            with open(input_path, "rb") as f:
                resume_data = tomllib.load(f)

        console.print(
            f"✅ [green]Successfully loaded resume data from [bold]{input}[/bold][/green]"
        )

        # Load HTML template
        template_path = Path(template)
        if not template_path.exists():
            console.print(
                f"❌ [red]Error: Template file [bold]{template}[/bold] not found.[/red]"
            )
            raise typer.Exit(1)

        # Setup Jinja2 environment
        with console.status("[cyan]Setting up template environment..."):
            env = Environment(
                loader=FileSystemLoader(template_path.parent),
                trim_blocks=True,
                lstrip_blocks=True,
            )

            # Prepare template data
            template_data = {"resume": resume_data}

            # Render template
            template_obj = env.get_template(template_path.name)
            rendered_html = template_obj.render(**template_data)

        # Write rendered HTML to file
        output_html = input_path.stem + ".html"
        output_pdf = input_path.stem + ".pdf"

        with open(output_html, "w", encoding="utf-8") as f:
            f.write(rendered_html)

        console.print(
            f"📄 [blue]Generated HTML output file: [bold]{output_html}[/bold][/blue]"
        )

        # Convert HTML to PDF
        try:
            with console.status("[cyan]Converting to PDF"):
                if engine == "weasyprint":
                    try:
                        from weasyprint import HTML

                        HTML(filename=output_html).write_pdf(output_pdf)
                        console.print(
                            f"🎉 [green]Successfully created PDF: [bold]{output_pdf}[/bold][/green]"
                        )
                    except ImportError:
                        console.print(
                            Panel(
                                "[red]weasyprint not installed[/red]\n\n"
                                "Install with: [bold cyan]pip install weasyprint[/bold cyan]",
                                title="❌ Missing Dependency",
                                border_style="red",
                            )
                        )
                        raise typer.Exit(1)

                elif engine == "wkhtmltopdf":
                    sh.wkhtmltopdf(
                        "--page-size",
                        "A4",
                        "--margin-top",
                        "0.75in",
                        "--margin-right",
                        "0.75in",
                        "--margin-bottom",
                        "0.75in",
                        "--margin-left",
                        "0.75in",
                        "--encoding",
                        "UTF-8",
                        "--quiet",
                        output_html,
                        output_pdf,
                    )
                    console.print(
                        f"🎉 [green]Successfully created PDF using wkhtmltopdf: [bold]{output_pdf}[/bold][/green]"
                    )
                else:
                    console.print(
                        f"❌ [red]Unknown engine: [bold]{engine}[/bold][/red]"
                    )
                    raise typer.Exit(1)

        except sh.CommandNotFound:
            if engine == "wkhtmltopdf":
                console.print(
                    Panel(
                        "[red]wkhtmltopdf not found[/red]\n\n"
                        "Install instructions:\n"
                        "• macOS: [bold cyan]brew install wkhtmltopdf[/bold cyan]\n"
                        "• Ubuntu: [bold cyan]sudo apt install wkhtmltopdf[/bold cyan]\n"
                        "• Alternative: [bold cyan]--engine weasyprint[/bold cyan]",
                        title="❌ Missing Tool",
                        border_style="red",
                    )
                )
            raise typer.Exit(1)
        except Exception as e:
            console.print(f"❌ [red]Error creating PDF: {str(e)}[/red]")
            raise typer.Exit(1)

    except Exception as e:
        console.print(f"❌ [red]Error: {str(e)}[/red]")
        raise typer.Exit(1)


if __name__ == "__main__":
    app()
