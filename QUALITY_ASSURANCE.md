# Mettelo Resource Hub — Navigation and Quality Assurance Review

[🏠 Home](README.md) · [⭐ Start here](START_HERE.md) · [Complete directory](RESOURCE_INDEX.md)

**Review date:** 9 November 2026  
**Scope:** Connected GitHub repository `Mettelo/mettelo-resource-hub`, `main` branch, current Markdown documents and navigation pages.  
**Status:** **Navigation improvements implemented. Content QA remains open in specified areas.** This document is an honest issue register, not a certificate that all legal/technical content or external URLs is independently verified.

## Summary: what was actually checked

| Check | Scope and test | Result |
| --- | --- | --- |
| Homepage clarity | Reviewed the old root README against the current resource collection | **Fixed:** removed false claim that guides had not been converted; added goal-based menus |
| First-time user flow | Created a [Start Here](START_HERE.md) task selector and a [complete directory](RESOURCE_INDEX.md) | **Fixed:** direct routes from goal → guide → supporting template |
| Category navigation | Inspected and rewrote career, technical, UK careers and immigration menus and specialist category pages | **Fixed:** consistent home/category/starting links and clearer labels |
| Deep-page return links | Added a standard **Find your way around** footer to 30 current guides/checklists/templates (preserved original archives) | **Fixed:** readers can return directly to category, Start Here, directory or home |
| Internal relative file links | Checked **491 relative links** across **17 navigation pages and 33 guide/archival files** against the inventory of their known repository destinations | **No missing destinations found** by the text/path inspection |
| In-page table-of-contents anchors | Checked **562 in-document anchor links** across 33 resource files against their explicit ids/headings using a Markdown slug approximation | **No unresolved anchors found** by the text inspection |
| Publication statuses | Compared prominent root/category claims with actual work completed | **Fixed:** reclassified drafts and enhanced guides instead of implying all are verified |
| Repository visibility | Checked connected GitHub metadata on 9 November 2026 | **Private** on main branch; reader access remains restricted until explicitly changed |
| Original-source preservation | Checked earlier source files for all three enhanced Global Talent pathways | **Retained in Git history**; duplicates removed from working tree |
| Interactive companions | Checked navigation/document claims about Excel files | **Clarified:** tracker/catalogue guides exist, interactive original files not uploaded |
| External links, live opportunity deadlines | **Not exhaustively tested** | **Open — high priority** |
| Full original-to-Markdown fidelity | **Not exhaustively tested** | **Open — high priority** |
| Rendered GitHub mobile experience | Text structure and links reviewed; live visual/device rendering **not** exhaustively tested | **Open — medium priority** |
| Immigration legal review | A final current-rule-by-rule expert verification was **not** performed in this navigation pass | **Open — high priority** |

**Method limits:** Internal links were checked by extracting Markdown targets and normalising relative paths; anchor checking approximated GitHub heading slugs and recognised explicit `<a id>` anchors. These checks do **not** execute links in a logged-in browser, independently verify third-party sites or prove GitHub's rendered pages are visually perfect. Citation/reference syntax and nonstandard HTML links can require further manual inspection.

## Content remediation — first guide improved (9 November 2026)

**CV Development Workflow — Edition 3:** The 11-page flat PDF extraction and earlier CV workflow were retained in Git history but removed as duplicate files from the current directory. The [single current CV Development Workflow](career/cv/cv-development-workflow-edition-3.md) was rebuilt with eight clear steps (preparation plus seven prompts), semantic Markdown headings, evidence-bank tables, seven usable prompt blocks, cross-industry examples, metrics verification, a fifteen-minute exercise and free official UK guidance. The original core methodology remains identified separately from the new editorial additions. **Editorial sign-off and real-user reading tests remain pending.**

## Duplicate-document consolidation — 9 November 2026

**One active guide per topic is now the default.** The earlier CV Development Workflow files were removed previously. This pass removed three older Global Talent pathway source editions from the working tree and consolidated the two overlapping Data/AI CV templates into one specialist technical template. **Deleted content remains recoverable through Git commit history.**

The Global Talent checklists and tracker instructions are retained as **distinct companion tools**, not duplicate full guides. The GitHub Handbook (learning), Command Reference (lookup) and Contribution Guide (team policy) remain separate because they serve different purposes. The general CV template remains separate from the technical specialist template, likewise for different audiences. The Civil Service/NHS guides are shared by direct links rather than duplicated under both categories.

**QA distinction:** The earlier link counts belong to the original navigation audit and should not be interpreted as a retest after consolidation; this pass includes fresh targeted tests of remaining guide links and stale references. Final external-link, formatting and legal review still remains.

## Improvements completed

### 1. Homepage rebuilt

The [root README](README.md) now includes four clear area cards, popular starting points, basic instructions, status explanations, warnings and a link to corrections. It no longer claims no Markdown resources exist.

### 2. A task-based starting page

[START_HERE.md](START_HERE.md) maps real member goals directly to specific resources: CVs, interviews, LinkedIn, Civil Service/NHS applications, GitHub and team projects, Global Talent, Innovator Founder and Nigerian passports.

### 3. One organised complete directory

[RESOURCE_INDEX.md](RESOURCE_INDEX.md) groups **individual** guides by career, UK public-sector, technical and immigration areas with descriptive titles and honest status. Original Global Talent editions are retained in Git history and no longer appear as duplicate files in the live resource directory.

### 4. Uniform category navigation

Each category page now identifies a recommended first guide and next resource and provides **Home / Start Here / parent** navigation. Users do not have to hunt for a filename or guess which edition to choose.

### 5. First source-table usability correction

The [Project Charter](technical/project-documentation/project-charter-template.md) now opens with six clean, editable Markdown tables for objectives, deliverables, responsibilities, technologies, data inventory and risks. Their fields come from the actual 16-page source. The original complete source transfer is retained below them, and **remaining approval and RACI tables still need reconstruction**.

### 6. Find-your-way-around links in long guides

Current long guides, templates and checklists now offer links back to the category, starting page, complete directory and homepage at the end. Original source editions are retained in Git history, with only one live guide per topic.

## Priority content risks that remain

| Priority | Issue | Affected resources | Needed action | Status |
| --- | --- | --- | --- | --- |
| **P0 — before open public release** | Visa, passport, grant, eligibility and deadline claims may become outdated or contain oversimplification | Global Talent (all three), Innovator Founder, Nigerian passport | Check current official instructions line by line, verify document limits and specialised routes, remove unsupported statements | **Open** |
| **P0** | Some original PDFs were extracted as page text; multi-column text and tables can be misordered or flattened | Public Sector Blueprint, Git & GitHub Command Reference, several migrated guides | Compare visually against source files and rebuild tables/code blocks without inventing missing text | **Open** |
| **P1** | Some Charter source Word tables appear flattened; approval and data/privacy matrices could be misread | [Project Charter](technical/project-documentation/project-charter-template.md) | **Six usable quick-start registers restored** (objectives, deliverables, roles, stack, data, risks); continue converting remaining source tables, including approval/RACI | **Partially fixed** |
| **P1** | Source document status conflicts: older files were labelled Published despite limited evidence of a complete audit | Earlier career guides and prior index | Keep source-review claims scoped; conduct documented source-fidelity audit before applying Published | **Partially improved; audit open** |
| **P1** | Interactive Excel trackers and catalogue are not downloadable from the repository | Global Talent trackers, Innovator Founder tracker, Project Experience Catalogue | Add and virus/privacy-check original workbooks if publication is authorised, or keep explanatory Markdown only | **Open** |
| **P1** | Third-party resources and active calls vary by country, age, membership, date and current programme | Three enhanced Global Talent guides | Verify each exact external URL, date, eligibility and entry process; remove dead or unsupported opportunities | **Open** |
| **P1** | External-link destinations and HTTP status unverified in this pass | All external resources | Conduct automated/live audit and manually review high-stakes redirects | **Open** |
| **P2** | Some guides are exceptionally long and dense | Enhanced Global Talent pathways; original PDF text migrations | Add compact jump tables and shorten duplicated navigation; visually test GitHub mobile | **Partially improved** |
| **P2** | Repo access must be configured for the intended community audience | Entire repository | **Confirmed private** through connected GitHub repository metadata (9 Nov 2026). Decide public publishing or authorised collaborator access, security and contributor permissions before announcing public availability. | **Open — access decision** |
| **P2** | Project handbook, CV Word layouts and Git commands need original-format/technical cross-check | Technical and CV resources | Preserve layout-sensitive content or offer optional original downloads; test command examples in safe repos | **Open** |

## Navigation acceptance walk-throughs

These are the paths readers should use and can test manually:

1. **New member seeking a CV:** [Home](README.md) → [Start Here](START_HERE.md) → [CV Workflow Edition 3](career/cv/cv-development-workflow-edition-3.md) → [CV Templates](career/cv/README.md) → Home.
2. **Civil Service applicant:** [Home](README.md) → [UK Careers](uk-careers/README.md) → [Civil Service](uk-careers/civil-service/README.md) → [Behaviour Guide](uk-careers/civil-service/behaviour-ai-guide.md) → Start Here.
3. **Mettelo technical contributor:** [Home](README.md) → [Technical](technical/README.md) → [GitHub Handbook](technical/github/github-handbook.md) → [Project Charter](technical/project-documentation/project-charter-template.md) → Directory.
4. **Global Talent applicant:** [Home](README.md) → [Immigration](immigration/README.md) → [Global Talent](immigration/global-talent/README.md) → [Arts & Culture](immigration/global-talent/arts-and-culture.md) → [Arts Checklist](immigration/global-talent/arts-and-culture-checklist.md) → Global Talent.
5. **Research applicant:** [Start Here](START_HERE.md) → [Academia & Research](immigration/global-talent/academia-and-research.md) → [Research Route Checklist](immigration/global-talent/research-checklist.md) → Directory.

The named link destinations passed the repository path inspection; **a separate live logged-in navigation/mobile session is still recommended**.

## Recommendations for the next approval pass

**First:** Open the [new homepage](README.md) and [Start Here](START_HERE.md) on both desktop and mobile. Check whether each category feels intuitive without the guide authors' prior knowledge.

**Second:** Select one long source-migrated PDF guide and the Project Charter for table/layout reconstruction. Verify the source line-by-line and log precise corrections.

**Third:** Perform the high-stakes immigration-rule and external-opportunity verification against current GOV.UK, official endorsing bodies, NIS and original providers. Record a date for each checked section.

**Fourth:** Once content is verified, change statuses to **Source reviewed** / **Published** individually; do **not** flip the whole repository to Published automatically. Decide whether to give members GitHub access or release a genuinely public web-facing library.

## Report issues

[Open a Mettelo Resource Hub issue](https://github.com/Mettelo/mettelo-resource-hub/issues) with the document URL, heading, exact problem and a reliable source where relevant. [Contribution standards](CONTRIBUTING.md).

---

**Maintained by Mettelo · Prepared by Johnson Taiwo · Navigation QA review, 9 November 2026.**
