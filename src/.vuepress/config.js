const { description } = require("../../package");
const getConfig = require("vuepress-bar");

const { sidebar } = getConfig();

const indexPageIndex = sidebar.indexOf("index");
if (indexPageIndex >= 0) {
  sidebar.splice(indexPageIndex, 1);
}

module.exports = {
  title: "Chemie-Mitschrift",
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
        text: "Allgemeine Chemie",
        link: "/chemie/allgemeine_chemie/01_chemie",
      },
      {
        text: "Organische Chemie",
        link: "/chemie/organische_chemie/01_kohlenwasserstoffe",
      },
      {
        text: "Formeln/Konstanten",
        link: "/chemie/00_formeln_und_konstanten/01_formelsammlung",
      },
    ],
    sidebar: sidebar,
    sidebarDepth: 4,
  },

  plugins: {
    "@maginapp/vuepress-plugin-katex": {
      delimiters: "dollars",
    },
  },
};
