// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Resumay Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Resume config",
          autogenerate: { directory: "resume-config" },
        },
        {
          label: "Templates",
          autogenerate: { directory: "templates" },
        },
        {
          label: "Command line tool",
          autogenerate: { directory: "command-line-tool" },
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
    }),
  ],
});
