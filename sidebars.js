const sidebars = {
  tev2SideBar: [
    { label: 'Introduction-Overview',
      link: { type: 'generated-index', description: 'The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance of terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual scopes.' },
      type: 'category',
      items: [
        { type: 'autogenerated', dirName: 'overview' },
        { type: 'doc', label: 'Terminology Support', id: 'terms/patterns/pattern-terminology'},
      ]
    },
    { label: 'Guides',
      link: { type: 'generated-index', description: 'This section provides a set of guides that people can use for various purposes.' },
      type: 'category',
      items: [ { type: 'autogenerated', dirName: 'guides' } ]
    },
    { label: 'Manuals',
      link: { type: 'generated-index', description: 'We have the manuals for the following roles.' },
      type: 'category',
      items:
      [ { type: 'category',
        label: 'Authors',
        link: {type: 'doc', id: 'manuals/author/overview-author'},
        items: [ { type: 'autogenerated', dirName: 'manuals/author' } ]
        },
        { type: 'category',
        label: 'Curators',
        link: {type: 'doc', id: 'manuals/curator/overview-curator'},
        items: [ { type: 'autogenerated', dirName: 'manuals/curator' } ]
        },
        { type: 'category',
        label: 'Contributors',
        link: {type: 'doc', id: 'manuals/contributor/overview-contributor'},
        items: [ { type: 'autogenerated', dirName: 'manuals/contributor' } ]
        },
      ],
    },
    { label: 'Files (Structure, Specs)',
      link: { type: 'generated-index', description: 'This section contains the specifications of the various FILES (types) that are used within TEv2.' },
      type: 'category',
      items: [ { type: 'autogenerated', dirName: 'spec-files' } ]
    },
    { label: 'Syntax (Specs)',
      link: { type: 'generated-index', description: 'This section contains the specifications of the various SYNTAXes that are used within TEv2.' },
      type: 'category',
      items: [ { type: 'autogenerated', dirName: 'spec-syntax' } ]
    },
    { label: 'Toolbox (specs)',
      link: { type: 'generated-index', description: 'This section contains the specifications of the various TOOLS that exist, and that are available in the official [tev2-tools github repository](https://github.com/tno-terminology-design/tev2-tools).' },
      type: 'category',
      items: [ { type: 'autogenerated', dirName: 'spec-tools' } ]
    },
    { label: 'Toolbox (envisaged)',
      link: { type: 'generated-index', description: 'This section contains the specifications of ENVISAGED TOOLS, i.e., tools that we would like to become part of TEv2.' },
      type: 'category',
      items: [ { type: 'autogenerated', dirName: 'spec-tools-envisaged' } ]
    },
    { type: 'doc', id: 'tev2-glossary'},
    { type: 'doc', id: 'tev2-glossaries-demo'},
    { label: 'Miscellanous',
      link: {type: 'generated-index', description: 'This section of the documentation contains miscellaneous documents, i.e., documents for which we do not (yet) have a better place.' },
      type: 'category',
      items: [ { type: 'autogenerated', dirName: 'miscellaneous' } ]
    },
  ],
};

module.exports = sidebars;
