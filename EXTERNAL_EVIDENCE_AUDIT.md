# External-facing evidence audit

## P0 — must fix before outreach

- Root homepage positioning must use the canonical **Senior Data & AI Engineer** framing, not older Data Scientist or generic portfolio language.
    - Exact files: `src/pages/index.tsx`, `src/components/Home/HomePageHeader.tsx`, `src/components/Home/HomepageFeatures.tsx`, `src/components/Home/HeadTags.tsx`.
- Projects cannot be empty or hidden behind only individual proof-capsule routes.
    - Exact files: `docs/General/projects.mdx`, `i18n/es/docusaurus-plugin-content-docs/current/General/projects.mdx`, `docusaurus.config.ts`.
- CV must not expose draft placeholders such as `(institution / team)` or `dates to be confirmed`.
    - Exact files: `docs/General/cv.mdx`, `i18n/en/docusaurus-plugin-content-docs/current/General/cv.mdx`, `i18n/es/docusaurus-plugin-content-docs/current/General/cv.mdx` if present.
- Navbar, title, metadata, and social tags must not fight the canonical positioning.
    - Exact files: `docusaurus.config.ts`, `src/components/Home/HeadTags.tsx`.
- Spanish homepage must not be half-translated.
    - Exact files: `i18n/es/code.json`, `src/components/Home/HomePageHeader.tsx`, `src/components/Home/HomepageFeatures.tsx`.
- Broken or wrong search must not appear publicly. The existing Algolia config used the upstream `sapphirejs` index, so search should be hidden until a Matías Iglesias index exists.
    - Exact file: `docusaurus.config.ts`.

## P1 — fix this week

- PWA/package metadata still contains upstream Sapphire branding in `package.json`, `static/manifest.webmanifest`, and/or `static/icons/manifest.json` and should be cleaned before promoting install/share surfaces.
- Legacy public redirect routes such as `src/pages/kofi.tsx` and `src/pages/ghorg.tsx` should not send users to upstream Sapphire properties.
- Some deeper docs still use historical AI Engineer/Data Scientist wording; keep only if intentional historical context, otherwise align over time.

## P2 — later polish

- Make home canonical/alternate tags locale-aware instead of static.
- Replace any legacy social handles after confirming the correct public handle.
- Consider a fixed sidebar order once docs content stabilizes.

## Potential routing/i18n causes

- Docusaurus docs translations live under `i18n/es/docusaurus-plugin-content-docs/current/`, while React homepage strings require `Translate` IDs and `i18n/es/code.json` entries.
- Navbar `to` values should be root-relative to avoid route ambiguity across docs/i18n routes.
- Search was configured through `themeConfig.algolia`; without a correct DocSearch index, the navbar search UI can expose irrelevant upstream results.

## Scope note

This PR fixes the main public funnel: homepage, projects, CV placeholders, navbar/title/metadata, Spanish homepage strings, and broken search visibility. Deeper docs remain mixed English/Spanish for now.
