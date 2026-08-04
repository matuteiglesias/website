# Matías Iglesias — Professional Website

Source repository for Matías Iglesias's public personal and professional website.

> **Lifecycle:** active public website  
> **Authority:** published professional profile, selected projects, CV narrative, and contact surface  
> **Not authoritative for:** complete GitHub-estate lifecycle, live status of every linked system, private work, or internal project governance  
> **README evidence reviewed:** 2026-08-03 — package scripts, Docusaurus configuration, and home-page source; the deployed site was not rechecked

## Purpose

This repository builds the main public website for Matías Iglesias, currently positioned around senior Data & AI engineering work.

The site is designed to provide a coherent external entrance to:

- professional positioning and capabilities;
- selected projects and systems;
- CV and experience;
- technical documentation and supporting material;
- English and Spanish content;
- GitHub and contact channels.

It is a curated public narrative, not a mirror of every repository or an automatic portfolio registry.

## Canonical publication surface

The Docusaurus configuration declares:

- **Site title:** Matías Iglesias — Senior Data & AI Engineer
- **Canonical URL:** <https://main.matuteiglesias.link>
- **Default locale:** English
- **Additional locale:** Spanish
- **Repository:** `matuteiglesias/website`

The URL is the configured canonical target. Check the deployed site independently before asserting uptime, freshness, or successful publication.

## Repository boundaries

### This repository owns

- the main public professional website;
- home-page presentation and positioning;
- public CV and selected project content;
- English/Spanish website content and navigation;
- site metadata, SEO, styling, and public assets;
- Docusaurus and Cloudflare Pages publication configuration.

### This repository does not own

- the canonical registry of all repositories and lifecycle decisions;
- runtime code for the projects it describes;
- current operational health of linked systems;
- private client, accounting, political, research, or personal records;
- automatic truth about employment availability or project status;
- every historical artifact in the GitHub account.

Portfolio-level authority belongs in the dedicated estate control plane. When this website and an authoritative project repository disagree, verify the project and then update the public narrative.

## Technology

- Docusaurus 3;
- React 18;
- TypeScript;
- English and Spanish internationalization;
- optional PWA behavior;
- Cloudflare Pages deployment through Wrangler;
- Yarn 4 with a Volta-pinned Node.js version.

## Local development

The repository declares:

- Node.js 22.16.0 through Volta;
- Yarn 4.9.1.

Enable Corepack and install dependencies:

```bash
corepack enable
yarn install
```

Start the development server:

```bash
yarn start
```

Build and serve the production output locally:

```bash
yarn build
yarn serve
```

Useful non-deploy checks:

```bash
yarn typecheck
yarn format:check
yarn lint:md-no-fix
yarn build
```

Note that `yarn lint` currently includes `--fix` and may modify files. Use it deliberately rather than treating it as a read-only CI check.

## Content structure

The main areas are:

- `src/pages/` — home and custom page entry points;
- `src/components/` — home-page and reusable UI components;
- `docs/` — CV, project, and supporting documentation;
- `i18n/` — localized content and translation resources;
- `static/` — public images, icons, and files;
- `docusaurus.config.ts` — identity, metadata, navigation, locales, and publication settings;
- `sidebars.ts` — documentation navigation.

Changes to public positioning may involve both the home-page components and documentation content. Search both languages before concluding an update is complete.

## Updating professional content

Before merging a material public-content change:

1. identify the authoritative source for the claim;
2. update English and Spanish versions where applicable;
3. use exact dates for roles, affiliations, and project status;
4. verify external links and contact information;
5. review metadata and page descriptions;
6. run type, format, Markdown, and build checks;
7. inspect the rendered desktop and mobile experience;
8. confirm that private or client information was not introduced.

Avoid claims such as “current,” “latest,” “production,” or “automated” unless the relevant system was recently verified.

## Projects and portfolio policy

The website should present a selective, understandable portfolio rather than enumerate the entire GitHub estate.

A project belongs here when it supports the current professional narrative and has an appropriate public entrance. Historical, private, experimental, superseded, or unverified repositories should not be promoted merely because they exist.

For each highlighted project, prefer:

- a one-sentence problem statement;
- Matías's role and contribution;
- the system or deliverable produced;
- evidence or a public surface;
- an accurate lifecycle/status statement;
- a link to the canonical repository or documentation.

## Deployment

Cloudflare Pages commands are available:

```bash
yarn pages:dev
yarn pages:deploy
```

`yarn pages:deploy` builds and publishes `./build` through Wrangler. It requires the appropriate Cloudflare authentication and project configuration.

Deployment checklist:

- `yarn build` succeeds;
- both locales render correctly;
- canonical URLs and metadata are correct;
- navigation and project links work;
- CV and professional claims are current;
- no private data or secrets are included;
- the deployed site is checked after publication.

Set `DISABLE_PWA=1` when PWA behavior must be disabled for diagnosis or a specific build context.

## Security and privacy

This is a public repository and publication surface.

Do not commit:

- private CV variants or job-search notes;
- client material without publication approval;
- personal documents or identifiers;
- API keys, Cloudflare credentials, or analytics secrets;
- internal project reports that are not intended for the public;
- generated data dumps or large private artifacts.

Public contact information should be intentional and reviewed, not copied from unrelated systems.

## Current verification boundary

This README was prepared from `package.json`, `docusaurus.config.ts`, and `src/pages/index.tsx`. No dependency installation, typecheck, build, localization review, link check, Cloudflare deployment, or live-site verification was performed during this documentation-only change.
