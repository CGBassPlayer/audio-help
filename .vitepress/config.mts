import { defineConfig } from "vitepress";
import * as fs from 'fs';
import * as path from 'path';

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach(function (name) {
      var filePath = path.join(currentDirPath, name);
      var stat = fs.statSync(filePath);
      if (stat.isFile()) {
          callback(filePath, stat);
      } else if (stat.isDirectory()) {
          walkSync(filePath, callback);
      }
  });
}

function generateSideBar(folderName: string) {
  const pages: object[] = []

  walkSync(`src/${folderName}/`, function(filePath, stat) {
    let fileName:string = filePath.split("/").at(-1);
    if (fileName.endsWith("ts") || fileName === "index.md") {
      return;
    }
    pages.push({
      text: toTitleCase(fileName.replaceAll("-", " ").replace(/\.[^/.]+$/, "")),
      link: `/${fileName}`
    });
  });
  
  return pages;
}

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
      { text: "About", link: "/about" }
    ],

    sidebar: [
      {
        text: "X32 / M32",
        link: "/",
        base: "/x32",
        items: generateSideBar("x32"),
      },
      {
        text: "SQ5/SQ6/SQ7",
        link: "/",
        base: "/sq/",
        items: generateSideBar("sq")
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
