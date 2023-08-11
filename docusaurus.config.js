const path = require('path');
module.exports = {
  title: 'TNO Terminology Design',
  tagline: 'Toolbox Specifications and Design Methods',
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
        { to: 'docs/tev2-overview',          label: 'TEv2 Overview',      position: 'left'},
        { href: 'https://github.com/tno-terminology-design/tev2-specifications', label: 'Github',     position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'TEv2 User Manuals',
          items: [
            { label: 'Curators',      to: 'docs/manuals/curator' },
            { label: 'Contributors',  to: 'docs/manuals/contributor' },
            { label: 'Authors',       to: 'docs/manuals/author' },
            // { label: 'Github', href: 'https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/terms' },
          ],
        },
        {
          title: 'TEv2 Specifications',
          items: [
            { label: 'Files',     to: 'docs/tev2-spec-files' },
            { label: 'Syntaxes',  to: 'docs/tev2-syntax' },
            { label: 'Toolbox',   to: 'docs/tev2-toolbox' },
            { label: 'Github', href: 'https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs/terms' },
          ],
        },
        {
          title: 'Toolbox Repositories',
          items: [
            { label: 'MRGT',  href: 'https://github.com/trustoverip/ctwg-toolkit-mrg' },
            { label: 'TRRT',  href: 'https://github.com/tno-terminology-design/trrt' },
          ],
        },
      ],
      copyright: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
                    <span property="dct:title">The TNO Terminology Design texts in this website</span> are licensed under
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
