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
          autogenerate: { directory: "resume-specification" },
        },
        {
          label: "Templates",
          autogenerate: { directory: "templates" },
        },
      ],
    }),
  ],
});
