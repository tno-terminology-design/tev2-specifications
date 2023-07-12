const path = require('path');
module.exports = {
  title: 'TNO Terminology Design',
  tagline: 'Toolbox Specifications and Methods',
  url: 'https://tno-terminology-design.github.io',
  baseUrl: process.env.STAGING && process.env.STAGING === 'true' ? '/tev2-specifications/' : '/',
  favicon: 'images/favicon.ico',
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
      // title: 'TEv2',
      logo: { src: 'images/TEv2-logo.png', },
      items: [
        { to: 'docs/tev2/tev2-overview',          label: 'TEv2 Overview',      position: 'left'},
        { to: 'docs/terminology-design/overview', label: 'Terminology Design', position: 'right'},
        { href: 'https://github.com/tno-terminology-design/tev2-specifications', label: 'Github',     position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'TEv2 Specifications',
        //   items: [
        //     { label: 'Introduction',  to: 'docs/essifLab-collaborative-understanding' },
        //     { label: 'Glossary',      to: 'docs/essifLab-glossary' },
        //     { label: 'Mental Models', to: 'docs/essifLab-pattern-list' },
        //     { label: 'Github', href: 'https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/terms' },
        //   ],
        // },
        // {
        //   title: 'Terminology Design',
        //   items: [
        //     { label: 'Introduction',  to: 'docs/essifLab-collaborative-understanding' },
        //     { label: 'Glossary',      to: 'docs/essifLab-glossary' },
        //     { label: 'Mental Models', to: 'docs/essifLab-pattern-list' },
        //     { label: 'Github', href: 'https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/terms' },
        //   ],
        // },
      ],
      copyright: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
                    <span property="dct:title">The TEv2 specifications</span> are licensed under
                    <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">
                    CC BY-SA 4.0
                      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">
                      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">
                      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                             src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1">
                    </a>.&nbsp&nbsp(Copyright © 2022-${new Date().getFullYear()} by <span property="cc:attributionName">TNO</span>).</p>`
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
