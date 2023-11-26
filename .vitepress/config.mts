import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "X32 Guide",
  description: "Guide to walk through various task on an X32",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  srcDir: "src",
  outDir: "dist",
  assetsDir: "static",
  themeConfig: {
    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guides", link: "/guides/" },
      { text: "About", link: "/about"}
    ],

    sidebar: [
      {
        text: "Connections",
        link: "/guides/connections/",
        items: []
      },
      {
        text: "Routing",
        link: "/guides/routing/",
        items: [
          {
            text: "Assigning Mix to an Aux Send",
            link: "/guides/routing/assign-mix-to-aux-send"
          },
          {
            text: "Sending a Channel to a Monitor",
            link: "/guides/routing/channel-to-monitor-mix"
          }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/CGBassPlayer/x32-guide" }
    ]
  }
})
