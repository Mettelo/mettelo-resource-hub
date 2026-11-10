# Mettelo Resource Library: GitHub Pages deployment

This website is **independent of the Mettelo corporate website and V2 rebuild**.

## First-time activation

In GitHub, open **Mettelo/mettelo-resource-hub → Settings → Pages**.

Under *Build and deployment* choose **Deploy from a branch**, then choose:
- Branch: `main`
- Folder: `/docs`
- Save.

The expected site address is:
`https://mettelo.github.io/mettelo-resource-hub/`

It may take time for GitHub Pages to publish after enabling the setting. Check the Pages section for the final published URL.

## Structure

- `docs/index.html` — public Immigration Resource Centre.
- `docs/guide/index.html` — full article reader.
- `docs/content/` — a publishing copy of all 15 immigration Markdown documents and supplementary resources.
- `docs/assets/` — website presentation and interactions.
- `immigration/` — original authors' resource files; remains separate from the public website build.

## Important constraints

*The repository is currently public.* If the organisation later makes it private, GitHub Pages availability depends on its organisation plan. Check the account's eligibility **before** changing visibility.

All public pages can be saved or copied, even when download buttons are omitted. Do not publish secrets or other private information. Updating `immigration/` will **not** automatically refresh `docs/content/` unless the corresponding published file is updated too.

The site is a static reader, with search, full Markdown, charts rendered from Mermaid, and internal checklists. Test all pages and external links before sharing with the community.

Mettelo website V2 remains unchanged.
