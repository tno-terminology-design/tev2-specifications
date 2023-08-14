const path = require('path');
const manuals = require('./footer-links/manuals.json');
const specifications = require('./footer-links/specifications.json');
const repositories = require('./footer-links/repositories.json');
const copyright = require('./footer-links/copyright.json');

module.exports = {
  title: 'TNO Terminology Design',
  tagline: 'TEv2 Toolbox Specifications and Manuals',
  url: 'https://tno-terminology-design.github.io',
  baseUrl: '/tev2-specifications/',
  favicon: 'images/logos/logo-tno-terminology-design.ico',
  organizationName: 'tno-terminology-design',
  projectName: 'tev2-specifications',
  onBrokenLinks: 'log',
  scripts: [
    { src: '/tev2-specifications/js/fix-location.js',
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true, 
        hideable: true,
      },
    },
    navbar: {
      title: 'Home',
      logo: { src: 'images/logos/tev2-new-babylon-medium.png', },
      items: [
        { to: 'docs/tev2-overview', label: 'TEv2 Overview', position: 'left'},
        { href: 'https://github.com/tno-terminology-design/tev2-specifications', label: 'Github',     position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: manuals.title, items: manuals.items },
        { title: specifications.title, items: specifications.items, },
        { title: repositories.title, items: repositories.items },
      ],
      copyright: copyright.text.replace("[20XX-20YY]",`2022-${new Date().getFullYear()}`)
    },
    prism: {
        additionalLanguages: ['handlebars', 'regex', 'bash'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/tno-terminology-design/tev2-specifications/blob/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
  // plugins: [
    // [
      // '@docusaurus-terminology/parser',
      // { termsDir: './docs/terms',
      //   glossaryFilepath: './docs/glossary.md',
      //   noParseFiles: ['./docs/tev1/terminology-engine-v1.mdx'],
      //   glossaryPatternSeparator: '^',
      //   glossaryTermPatterns: ['term', 'concept']
      // }
    // ]
  // ]
};
