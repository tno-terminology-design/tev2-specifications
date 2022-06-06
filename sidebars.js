const sidebars = {
  essifLabSideBar: [
    { label: 'eSSIF-Lab',
      type: 'category',
      link: {type: 'doc', id: 'essifLab'},
      collapsed: false,
      items: [
        'essifLab-vision',
        'essifLab-objectives',
        'essifLab-principles',
        'essifLab-project',
        'essifLab-understanding',
        { label: 'Mental Models',
          type: 'category',
          link: {type: 'doc', id: 'essifLab-pattern-list'},
          collapsed: true,
          items: [
            { label: 'Stable models',
              type: 'category',
              collapsed: false,
              items:
              [ 'terms/pattern-party-actor-action',
                'terms/pattern-jurisdiction',
                'terms/pattern-guardianship',
              ]
            },
            { label: 'Reviewable models',
              type: 'category',
              collapsed: true,
              items:
              [ 'terms/pattern-terminology',
                'terms/pattern-identity',
                'terms/pattern-identification',
                'terms/pattern-identifier',
                'terms/pattern-party-representation',
                'terms/pattern-governance-and-management',
                'terms/pattern-decentralized-grc',
            ]
            },
            { label: 'Envisaged models',
              type: 'category',
              collapsed: true,
              items:
              [ 'terms/pattern-world-model',
                'terms/pattern-trust',
                'terms/pattern-decision-making',
                'terms/pattern-mandates-delegation-hiring',
                'terms/pattern-duties-and-rights',
              ]
            },
          ],
        },
        'essifLab-glossary',
      ],
    },
    { label: 'Miscellaneous',
      type: 'category',
      link: {type: 'doc', id: 'essifLab-fw'},
      collapsed: true,
      items: [
        'essifLab-governance',
        'essifLab-fw-bus-arch',
        'essifLab-fw-func-arch',
        'essifLab-fw-backlog',
      ],
    },
  ],
  tev2SideBar: [
    'tev2/tev2-overview' ,
    { type: 'category',
      label: 'Users Manual',
      link: {type: 'doc', id: 'tev2/man-users'},
      items:
      [ 'tev2/man-usr-wiki',
      , 'tev2/man-usr-repo',
      , 'tev2/man-usr-latex',
      ],
    },
    { type: 'category',
      label: 'Curators Manual',
      link: {type: 'doc', id: 'tev2/man-curators'},
      items:
      [ 'tev2/tev2-installation',
      ],
    },
    { type: 'category',
      label: 'Reference Manual',
      items:
      [ { type: 'category',
          label: 'Administration',
          items:
          [ 'tev2/tev2-spec-saf',
            'tev2/term-selection-criteria',
            'tev2/tev2-spec-mrg',
          ],
        },
        { type: 'category',
          label: 'Curated Texts',
          link: {type: 'doc', id: 'tev2/ctext'},
          items:
          [ 'tev2/tev2-spec-term-ref',
            'tev2/ctext-concept',
            'tev2/ctext-pattern',
          ],
        },
        { type: 'category',
          label: 'Toolbox',
          link: {type: 'doc', id: 'tev2/tev2-toolbox'},
          items:
          [ 'tev2/tev2-toolbox-ict',
            'tev2/tev2-toolbox-trrt',
            'tev2/tev2-toolbox-mrgt',
            'tev2/tev2-toolbox-hrgt',
          ],
        },
        { type: 'category',
          label: 'Rieks\'s test',
          items:
          [ 'tev2/terms/curated-text',
            'tev2/terms/curated-text-header',
            'tev2/terms/curated-text-body',
          ],
        },
      ],
    },
    { type: 'category',
      label: 'Miscellaneous',
      items:
      [ 'tev2/tev2-backlog',
        'tev2/toip-terminology-toolbox',
      ],
    },
  ],
};

module.exports = sidebars;