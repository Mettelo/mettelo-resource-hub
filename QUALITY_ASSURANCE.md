# Mettelo Resource Hub — Editorial and Quality Assurance Register

**Repository:** `Mettelo/mettelo-resource-hub` · **Main review:** 9 November 2026  
[🏠 Home](README.md) · [Start Here](START_HERE.md) · [Complete directory](RESOURCE_INDEX.md) · [Contribution rules](CONTRIBUTING.md)

> **Overall status: Structured content improvements completed; independent publication certification still pending.** All **47 known active Markdown documents** were assessed for document structure and cross-file navigation; key source-extracted resources were substantially rewritten or augmented. This register distinguishes **what was actually improved and tested** from legal, technical, source-fidelity and external-link checks that have **not** been completed exhaustively. It is not a certificate of official NHS, Civil Service, immigration or technical endorsement.

## Executive summary

| Measure | Result | Limit |
| --- | --- | --- |
| Active Markdown files in reviewed inventory | **47**: 19 navigation/administrative pages + **28** main guides, templates and checklists | Files outside this known inventory, non-Markdown assets and GitHub-rendered browser view are not covered |
| Internal relative links checked after edits | **551** across 47 active documents | Text-based path resolution against current inventory; not an authenticated browser click test |
| Missing internal file destinations | **0** | External links may still redirect or expire |
| In-page anchor links checked in content files | **251** across 28 content documents; no unresolved headings found by Markdown-slug approximation | GitHub's exact rendered slugs, duplicated heading IDs and nonstandard HTML need a visual sample check |
| Unbalanced Markdown code fences | **None observed** in 28 content-document checks | Does not guarantee every command works |
| Global Talent month entries | **24 each** for Digital Technology, Arts & Culture, Academia & Research | Activities are development suggestions, not official requirements |
| Repository visibility | **Private** when last verified through connected GitHub metadata | Not yet a publicly accessible community site |
| Original editions | Earlier contents recoverable via **Git commit history** | Not presented as duplicate current guides |
| Standalone Excel trackers | **Not uploaded**; only Markdown instructions/checklists exist here | Excel calculations and dropdowns are not reproduced in Markdown |

### What “improved” means in this review

- **Reconstructed:** Source text was previously flattened or hard to follow. It has been turned into coherent topic headings, tables, concrete actions, examples and copyable prompts or commands.
- **Expanded:** A structurally useful guide was supplemented with precise practical activities, real sources, examples or safety checks.
- **Reviewed and retained:** Existing structure was already coherent and usable. We checked it at a structural and content-planning level without unnecessarily rewriting it.
- **Outstanding final QA:** Factual completeness against the original source, current rules, external URL status, expert/legal approval and rendered-device testing are separate tasks. Do not mark a guide **Published** merely because its Markdown structure passes.

## A. Career development — resource-by-resource review

| Official current resource | Action and concrete improvement | Editorial status / remaining risk |
| --- | --- | --- |
| [CV Development Workflow — Edition 3](career/cv/cv-development-workflow-edition-3.md) | Reconstructed 11-page extraction into seven-step evidence process; requirement mapping, role-by-role evidence, seven prompts, examples and official free guidance | **Enhanced draft**; candidate reading test/source comparison pending |
| [General CV template](career/cv/cv-template.md) | Added first-job/changer/experienced guidance, a practical before/after bullet exercise; removed rigid 15–25-word bullet target | **Enhanced template**; check final Word/PDF rendering for real use |
| [Data/AI/Technology CV template](career/cv/data-ai-technology-cv-template.md) | Combined two overlapping Word-source templates into **one current** clear Markdown technical template; role-specific tailoring and submission checks | **Consolidated template**; previous visual two-column design is not reproduced |
| [Interview Preparation Workflow](career/interviews/interview-preparation-workflow.md) | Reviewed existing eight-step structure, copyable prompts, practice types, evidence checks and navigation; already substantive | **Reviewed and retained**; final factual source comparison pending |
| [LinkedIn Profile Editing Guide](career/linkedin/linkedin-profile-guide.md) | Reviewed worked fictional example, role-specific edits, writing prompts and precautions; already provides meaningful practice | **Reviewed and retained**; platform-specific limits may change |

**Why these are separate:** A workflow teaches *how to develop evidence*; CV templates are optional output structures. The general and technical CV templates address different audiences and are not duplicate guides.

## B. NHS and Civil Service — resource-by-resource review

| Resource | Earlier issue | Improvement completed |
| --- | --- | --- |
| [Public Sector Application Blueprint](uk-careers/public-sector-application-blueprint.md) | **31-page PDF page dump** with interleaved columns, over-simplified scoring and arbitrary formatting assumptions | Rebuilt as six clearly labelled parts (assessment, safe AI, employment history, statements, STAR/S.T.A.R.I.M™, common mistakes), with criterion tables and examples |
| [Personal / Supporting Statement Guide](uk-careers/civil-service/personal-statement-guide.md) | Three-page prompt extraction; fixed 750/1,450-word assumptions and inconsistent anonymisation advice | Separate NHS and Civil Service pathways, exact criteria map, realistic paragraph plan, question-first drafting, safeguards for clinical and non-clinical roles |
| [Employment History Guide](uk-careers/civil-service/employment-history-guide.md) | Three-page source had **7–12 bullets, >25 words, 6–10 projects per role** as rigid instructions | Correct chronology, distinct evidence-bank versus final bullets, flexible length, real duties/outcomes, sector-specific role boundaries |
| [Civil Service Behaviour STAR Guide](uk-careers/civil-service/behaviour-ai-guide.md) | Two-page 250-word page dump with universal blind recruitment assumption | Official grade-aware behaviour definitions, example selection matrix, detailed Action/decision, fictional worked example and verification prompt |
| [NHS/Civil Service Interview Guide](uk-careers/civil-service/interview-preparation-guide.md) | Two-page generic interview prompt; blanket 2–3-minute and “blind interview” assumptions | Actual invitation-first assessment plan, CS strengths versus behaviour/technical, NHS values, realistic follow-up questions, 30-minute mock and evidence check |

**High-value factual corrections:** Civil Service Success Profiles have multiple elements, and each vacancy specifies what is assessed. NHS supporting information commonly follows actual person-specification criteria, not a universal fixed-score template. Clinical scope, professional registration and patient outcomes cannot be invented. See [Civil Service Success Profiles](https://www.gov.uk/government/publications/success-profiles/success-profiles-civil-service-behaviours), [Civil Service statement guidance](https://www.civil-service-careers.gov.uk/how-to-write-your-ps/), [NHS Trust application guidance](https://www.covwarkpt.nhs.uk/application-guidance-) and [NHS Employers](https://www.nhsemployers.org/articles/values-based-recruitment).

**Publication status:** These five are now **enhanced drafts**; original source remains in Git history. A manual source-comparison pass and employer-rule check remain important. They are not official NHS or Civil Service publications.

## C. Technical resources and project delivery — resource-by-resource review

| Resource | Improvement / review finding | Remaining task |
| --- | --- | --- |
| [GitHub Practical Handbook](technical/github/github-handbook.md) | Existing five-stage practical learning sequence reviewed; added a defined end-to-end mini task, beginner mistakes and free official learning sources | Test exercises in a controlled demo repository |
| [Git & GitHub Command Reference](technical/github/git-github-command-reference.md) | **Reconstructed flattened 11-page command source** into searchable topics, properly fenced shell commands, safe recovery/PR examples and risk levels | Hands-on command testing for referenced Git/CLI versions |
| [GitHub Contribution Guide](technical/github/contribution-guide.md) | **Reconstructed full 16-page Word extraction** into 15 coherent policy chapters with properly formatted issue/PR templates and precise contributor roles | Source's original effective date is **blank**; obtain actual governance adoption/branch-protection confirmation |
| [Project Charter & Delivery Framework](technical/project-documentation/project-charter-template.md) | **Reconstructed full 16-page Word source** into 15 readable sections, 20+ coherent tables, original RACI, QA, risk, formal approvals and handover | Owner sign-off and final line-by-line source comparison; blank charters are not approved |
| [Weekly Project Update](technical/project-documentation/weekly-update-template.md) | Expanded the source appendix into an operational weekly update, deliverable evidence, blockers, owners, status and fictional example | Team usability feedback |
| [Retrospective & Lessons Learned](technical/project-documentation/retrospective-template.md) | Expanded brief appendix into a facilitated 30-minute reflection, root cause/evidence and action ownership | Team usability feedback |
| [Professional Experience Catalogue Guide](technical/project-documentation/project-experience-catalogue-guide.md) | Existing seven-sheet workbook explanation checked; added a completed **fictional** evidence-entry walkthrough, role/CV conversion and privacy cautions | Original interactive Excel workbook is **not** downloadable here; formula behaviour not replaced |

## D. Immigration and practical resources — resource-by-resource review

| Resource | Change / existing value | Important limit |
| --- | --- | --- |
| [Global Talent — Digital Technology](immigration/global-talent/technology.md) | Previously enhanced with beginner introduction, real evidence patterns, 24-month table, multiple strategies each month and targeted organisations; inspected for structure and all 24 months | Final immigration legal and complete external-link validation pending |
| [Digital Technology checklist](immigration/global-talent/technology-checklist.md) | Added explanation of recognition/criteria mapping, product/OSS/referee evidence checks and genuine source records | Checklist is not legal eligibility determination |
| [Global Talent — Arts & Culture](immigration/global-talent/arts-and-culture.md) | Previously enhanced with discipline-specific strategies, organisations, country conditions, 24-month table and outreach; inspected for structure and 24 months | Final specialist discipline and individual opportunity deadline validation pending |
| [Arts & Culture checklist](immigration/global-talent/arts-and-culture-checklist.md) | Added practical verification of critical reviews, prizes, professional engagements, referee relationships and evidence log | Grants are not automatically qualifying international prizes |
| [Global Talent — Academia & Research](immigration/global-talent/academia-and-research.md) | Previously enhanced with four distinct endorsement routes and 24-month research-development tables; inspected for structure/24 months | Final actual scheme lists, legal requirements and research-funding eligibility validation pending |
| [Academia & Research checklist](immigration/global-talent/research-checklist.md) | Added comparison of appointment, fellowship, UKRI grant and peer-review requirements, and what to do when evidence is absent | Route-specific government evidence overrides checkboxes |
| [Global Talent tracker guide](immigration/global-talent/tracker-guide.md) | Reviewed original workbook explanation: two sheets per workbook, status tracking and distinction from legal eligibility | Original spreadsheets not uploaded; no live formulas in GitHub |
| [Innovator Founder guide](immigration/innovator-founder/guide.md) | Retained structured 32-section original-source adaptation and added **eight-week UK-market validation plan**, customer-interview strategy, real business tests and official rules | Endorsing-body lists and current immigration conditions must be rechecked |
| [Innovator Founder checklist](immigration/innovator-founder/checklist.md) | Added explanations of innovation, viability, scalability, founder contribution, demand and authorisation, without treating tasks as visa points | Official criteria and personal requirements control |
| [Innovator Founder tracker guide](immigration/innovator-founder/tracker-guide.md) | Reviewed existing workbook explanation and practical tracking structure | Original interactive workbook not hosted; current rules require checking |
| [Nigerian passport renewal (UK)](immigration/nigerian-passport/passport-renewal-uk.md) | Added prominent decision table distinguishing **contactless eligibility from in-person biometric requirements**, official portal and payment/postal safety steps | Source procedure remains from Oct 2026; NIS rules, fees and postal process can change |

## Known open risks and release blockers

| Severity | Risk / reason | Applies to | Required before declaring published |
| --- | --- | --- | --- |
| **P0** | Government eligibility, date and document rules change; profession-specific exceptions | Global Talent, Innovator Founder and Nigerian passport | **Line-by-line official verification** of all material legal/procedure statements; date each checked section and have qualified review where appropriate |
| **P0** | Third-party programme links, application windows and geographic eligibility vary | Global Talent 24-month tables and other opportunity directories | Check **every exact external URL**, eligibility, application window and provider claim, including dead/redirected pages |
| **P1** | A full original-source fidelity review has not been documented for each restructured 11-, 16- and 31-page resource | Public-sector blueprint, Git command, contribution guide, charter, CV workflow | Compare source to finished Markdown section by section; distinguish editorial additions and confirm no mandatory source element was lost |
| **P1** | Some Git commands and workflow policies have not been executed or independently adopted | Command reference, GitHub handbook, contributor policy, charter | Run practical exercises in safe test repo, confirm actual policy approvals and effective date |
| **P1** | Excel assets are explanatory only | Global Talent trackers, Innovator Founder tracker, capability catalogue | Decide whether to publish privacy-checked original Excel files or keep Markdown-only usage guidance |
| **P2** | Long four-column monthly tables may be difficult to read on mobile | Global Talent three pathways | Test actual GitHub mobile rendering; consider jump links or responsive alternative **without removing 24-month tables** |
| **P2** | Private repository limits community access | Entire library | Decide access model and security review before public announcement |
| **P2** | Copyable CV and document templates need human usability testing | CV resources, project documentation | Test with a newcomer and experienced applicant/contributor; remove ambiguous wording |

### What should not be claimed

Do not describe the library as **fully legal-vetted**, **all links independently checked**, **NHS/Civil Service endorsed**, **ATS-tested**, **all Excel workbooks downloadable**, or **the GitHub commands executed**. The actual achievements are restructuring, targeted factual improvements, practical examples, official-source referencing, and path/Markdown integrity checks.

## How to perform the final independent publication check

For each resource, record:

| Review control | Evidence expected |
| --- | --- |
| Editorial clarity | Someone unfamiliar with the topic can follow the sequence and explain each action |
| Source fidelity | Explicit original chapter/step-to-Markdown mapping and flagged edits |
| Practical value | Concrete activity, example, evidence/outcome and limitations where needed |
| External verification | Exact URL loaded; publication date/requirements checked against primary provider |
| Technical/security | Commands tested; data licensing, confidentiality and credential safety confirmed |
| Navigation/accessibility | All links clicked; table/readability checked on mobile and desktop |
| Owner approval | Named reviewer, date and explicit sign-off for that guide only |

**Current decision:** Keep resources labelled **enhanced draft**, **revised template**, or **source reviewed** as appropriate. Promote an individual guide to “Published” only when its relevant controls above are actually completed.

---

## Recommended reader walkthroughs

**Job applicant:** [Home](README.md) → [Start Here](START_HERE.md) → [CV workflow](career/cv/cv-development-workflow-edition-3.md) → [personal statement guide](uk-careers/civil-service/personal-statement-guide.md) → [interview preparation](career/interviews/interview-preparation-workflow.md).

**Mettelo team:** [Home](README.md) → [Technical](technical/README.md) → [GitHub handbook](technical/github/github-handbook.md) → [Project Charter](technical/project-documentation/project-charter-template.md) → [Weekly Update](technical/project-documentation/weekly-update-template.md) → [Retrospective](technical/project-documentation/retrospective-template.md).

**Immigration research:** [Global Talent pathways](immigration/global-talent/README.md) → one **correct** specialist guide → evidence checklist → official route instructions.

Report a problem using a [GitHub issue](https://github.com/Mettelo/mettelo-resource-hub/issues) with the specific page, issue, source and suggested correction. The original pre-edit text remains recoverable in Git history.

**Maintained by Mettelo · Prepared by Johnson Taiwo · QA register reviewed 9 November 2026.**
