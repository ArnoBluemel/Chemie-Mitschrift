const { description } = require("../../package");
const getConfig = require("vuepress-bar");

const { sidebar } = getConfig();

const indexPageIndex = sidebar.indexOf("index");
if (indexPageIndex >= 0) {
  sidebar.splice(indexPageIndex, 1);
}

module.exports = {
  title: "Chemie Mitschrift",
  description: description,

  base: "/Chemie-Mitschrift/",
  dest: "dist",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  evergreen: true,

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: sidebar,
    sidebarDepth: 4,
  },

  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@maginapp/vuepress-plugin-katex",
    {
      delimiters: "dollars",
    },
  ],
};
