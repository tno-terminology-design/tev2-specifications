# eSSIF-Lab Framework

This repo contains the source documents of the [eSSIF-Lab framework](https://essif-lab.pages.grnet.gr/framework/), such as its vision, architecture and other relevant topics.

## Writing docs

This website is built using [Docusaurus 2](https://v2.docusaurus.io/).

Documentation content must appear in `.md` files inside the `docs` folder.
Each file defines the following attributes at its very beginning:

- `id`, by which the file is referred to across the project
- `title`, appearing at the top of the file's display
- `sidebar_label`, the file's name appearing in the sidebar

The `sidebars.js` file contains the basic mechanism for distributing content
among sections and is self-explanatory (compare with the sidebar appearing [here](https://essif-lab.pages.grnet.gr/essif-lab/docs/introduction)). Subsections within the `.md` file
(that is, tagged with `##`) will appear at the right part of the page
(see for example [here](https://essif-lab.pages.grnet.gr/essif-lab/docs/infrastructure)).

Images must be put inside the directory `static/images` and developers must refer to them using _relative_ urls.
Example: ![eSSIF-Lab logo](../images/eSSIF-Lab%20logo.png)
Docusaurus knows that the `../images` directory is inside the `static` directory, and thus process correctly.
The deployment pipe will convert `../images/` in such links to their _*absolute*_ urls.
Of course, if you want to link to images on the web, you can still use absolute urls.

### Installation

You must be able to use `yarn` in order to run the local development server. If
you face an error similar to `ERROR: There are no scenarios; must have at least one`,
refer [here](https://github.com/yarnpkg/yarn/issues/2821) for a correct
re-installation of `yarn`.

### Local Development

```
$ yarn
$ yarn start
```

The first command is for linking dependencies. The second starts a local development server and opens up a browser window.
Note that not all browsers work with this - for example, Microsoft Edge doesn't work. Chrome and FireFox however do.
When developing, most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Just push your changes to the `master` branch and they will be automatically deployed at https://essif-lab.pages.grnet.gr/framework/
