import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Audio Help",
  description: "Step by steps to do things on your audio console",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  srcDir: "src",
  outDir: "dist",
  assetsDir: "static",
  // https://vitepress.dev/reference/default-theme-config
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
    nav: [
      { text: "Home", link: "/" },
      { text: "Consoles", link: "/consoles" },
      { text: "About", link: "/about"}
    ],

    sidebar: [
      {
        text: "X32 / M32",
        link: "/x32/",
        items: [
          {
            text: "Adding a Press Feed",
            link: "/x32/adding-a-press-feed"
          },
          {
            text: "Assign Mix to Aux Send",
            link: "/x32/assign-mix-to-aux-send"
          },
          {
            text: "Send a Channel to a Monitor Mix",
            link: "/x32/channel-to-monitor-mix"
          },
        ]
      },
      {
        text: "SQ5/SQ6/SQ7",
        link: "/sq5/",
        items: []
      }
    ],

    // sidebar: [
    //   {
    //     text: "Connections",
    //     link: "/guides/connections/",
    //     items: []
    //   },
    //   {
    //     text: "Routing",
    //     link: "/guides/routing/",
    //     items: [
    //       {
    //         text: "Adding A Press Feed",
    //         link: "/guides/routing/adding-a-press-feed"
    //       },
    //       {
    //         text: "Assigning Mix to an Aux Send",
    //         link: "/guides/routing/assign-mix-to-aux-send"
    //       },
    //       {
    //         text: "Sending a Channel to a Monitor",
    //         link: "/guides/routing/channel-to-monitor-mix"
    //       }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/CGBassPlayer/x32-guide" }
    ]
  }
})
