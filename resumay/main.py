import typer
import create

app = typer.Typer()
app.add_typer(create.app, name="create")

if __name__ == "__main__":
    app()
