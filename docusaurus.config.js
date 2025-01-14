const path = require("path");
const execSync = require("exec-sync");

const typedocPaths = execSync(
  'ls -p ../ren-js/packages/lib/ren/../*/build/main/*.d.ts ../ren-js/packages/lib/ren/../*/build/main/*/*.d.ts ../ren-js/packages/lib/ren/../multiwallet/*/build/main/*.d.ts ../ren-js/packages/lib/ren/../multiwallet/*/build/main/*/*.d.ts ../ren-js/packages/lib/ren/../chains/*/build/main/*.d.ts ../ren-js/packages/lib/ren/../chains/*/build/main/*/*.d.ts ../ren-js/packages/lib/ren/../../ren-js/packages/lib/ren/../ui/*/dist/*.d.ts ../ren-js/packages/lib/ren/../../ui/*/dist/*/*.d.ts | grep -v "/packages/ren/"'
).split("\n");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Ren Client Docs",
  tagline: "Documentation and tutorials for interacting with RenVM",
  url: "https://renproject.github.io/ren-client-docs",
  baseUrl: "/ren-client-docs/",
  // onBrokenLinks: "throw",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["solidity"],
    },
    announcementBar: {
      id: "support_us", // Any value that will identify this message.
      content:
        'We are always looking to improve our docs. If you have feedback, feel free to complete <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/Vtj9B2j4qMQsJrpq5">this survey.</a>',
      backgroundColor: "#4E8AFF", // Defaults to `#fff`.
      textColor: "#D6DCE1", // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    navbar: {
      title: "Ren Client Docs",
      logo: {
        alt: "Ren logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "general/",
          activeBasePath: "general",
          label: "General",
          position: "left",
        },
        {
          to: "ren-js/",
          activeBasePath: "ren-js",
          label: "RenJS",
          position: "left",
        },
        {
          to: "contracts/",
          activeBasePath: "contracts",
          label: "Contracts",
          position: "left",
        },
        {
          to: "stats/",
          activeBasePath: "stats",
          label: "Stats APIs",
          position: "left",
        },
        {
          to: "api/",
          activeBasePath: "api",
          label: "JSON-RPC",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/renproject/ren-js",
          label: "RenJS GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "RenJS",
          items: [
            {
              label: "Getting Started",
              to: "ren-js/",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/renproject",
            },
            {
              label: "GitHub",
              href: "https://github.com/renproject",
            },
          ],
        },
        {
          title: "More",
          items: [],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: "d5bd58f50568706dcfbd32b4d4386bcd",
      indexName: "ren-client",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/renproject/ren-client-docs/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: ["@saucelabs/theme-github-codeblock"],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "general",
        path: "general",
        routeBasePath: "/general",
        sidebarPath: require.resolve("./sidebarsGeneral.js"),
        editUrl: "https://github.com/renproject/ren-client-docs/edit/master",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ren-js",
        path: "ren-js",
        routeBasePath: "ren-js",
        sidebarPath: require.resolve("./sidebarsRenJS.js"),
        editUrl: "https://github.com/renproject/ren-client-docs/edit/master",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "contracts",
        path: "contracts",
        routeBasePath: "contracts",
        sidebarPath: require.resolve("./sidebarsContracts.js"),
        editUrl: "https://github.com/renproject/ren-client-docs/edit/master",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "stats",
        path: "stats",
        routeBasePath: "stats",
        sidebarPath: require.resolve("./sidebarsStats.js"),
        editUrl: "https://github.com/renproject/ren-client-docs/edit/master",
        // ... other options
      },
    ],
    [
      "docusaurus-plugin-openapi",
      {
        openapiPath: require.resolve("./tools/json-rpc.json"),
      },
    ],
  ],
};
