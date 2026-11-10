# Mettelo GitHub Contribution Guide

**Practical contribution, review and project-quality standards for Mettelo Labs**  
**Mettelo contributor standards · Updated 10 November 2026**

[🏠 Home](../../README.md) · [Start Here](../../START_HERE.md) · [GitHub resources](README.md) · [Practical Handbook](github-handbook.md) · [Command Reference](git-github-command-reference.md)

> **Governance:** Follow the actual repository's access, review and security settings. Mettelo-wide adoption and effective dates must be confirmed by authorised administrators.

## Start here — contribute something useful in seven steps

| Step | What you actually do | Evidence of completion |
| --- | --- | --- |
| **1. Find an issue** | Read project README and select a task with a clear problem | Acknowledged/assigned issue, defined acceptance |
| **2. Check access and rules** | Confirm contributor role, privacy/licence and intended base branch | Actual repository permissions and project guidance |
| **3. Branch** | Start an issue-related feature or documentation branch | Branch visible in your clone |
| **4. Implement and test** | Deliver one bounded change with genuine methods/tests | Code/doc diff, actual executed validations |
| **5. Open a PR** | Describe need, approach, evidence, limitations and security/privacy impacts | Complete PR linked to issue |
| **6. Respond to review** | Discuss comments, fix agreed concerns and get approval | Authentic reviewer decisions and test re-run |
| **7. Close and credit** | Merge through approved process and update documentation/credits | Merged PR, appropriate release/issue records |

### Example for a new data contributor (fictional)

**Issue:** “Validate missing transport service IDs before monthly aggregation.”  
**Acceptance:** Detect invalid rows, fail clearly or isolate them per actual requirements, add tests using synthetic records, and explain limitation in README.  
**Pull request:** One testable validation change and documentation.  
**Proof:** Real test output and review history, not a screenshot saying “100% successful.”

**Do not claim** that a PR automatically proves employment, seniority or commercial impact. It proves exactly the work that the PR and reviewer record show.

## Contents

1. [Purpose and working principles](#1-purpose-and-working-principles)
2. [Roles, permissions and access](#2-roles-permissions-and-access)
3. [Repository names and file structure](#3-repository-names-and-file-structure)
4. [Issue planning](#4-issue-planning)
5. [Branch and commit standards](#5-branch-and-commit-standards)
6. [Pull requests](#6-pull-requests)
7. [Reviews and merge policy](#7-reviews-and-merge-policy)
8. [Code, SQL and BI quality](#8-code-sql-and-bi-quality)
9. [Documentation and reproducibility](#9-documentation-and-reproducibility)
10. [Data, privacy and licensing](#10-data-privacy-and-licensing)
11. [Security and incident response](#11-security-and-incident-response)
12. [Responsible AI use](#12-responsible-ai-use)
13. [Releases, change logs and closure](#13-releases-change-logs-and-closure)
14. [Contribution recognition](#14-contribution-recognition)
15. [Templates and acknowledgements](#15-templates-and-acknowledgements)

---

## 1. Purpose and working principles

GitHub is intended to be the source of truth for technical changes, decisions, code, documentation, releases and contributions in Mettelo Labs repositories. The source guide covers maintainers, reviewers, project leads, owners, contributors and observers across code, models, BI, research, APIs, automations and non-code assets.

**Work principles:** define the problem before writing code; open issues for material work; make changes small enough to review; record assumptions/limitations; use review for quality and learning; credit actual contributors; protect the people and partners whose information the project processes.

## 2. Roles, permissions and access

| Role | Responsibility |
| --- | --- |
| Organisation Owner | Organisation security, repository/team settings and emergency access |
| Repository Maintainer | Repository administration, protected branches, reviewer coordination and release |
| Project Lead | Scope, delivery, team coordination, priorities and acceptance |
| Technical Lead | Architecture, technical direction and engineering quality |
| Reviewer | Actual review of code, data, design or documentation |
| Contributor | Work on assigned/accepted issues via approved branches and pull requests |
| Observer | Read-only learning, audit or partner oversight where authorised |

**Access principles:** least privilege; no shared personal accounts/tokens; MFA where required; remove unnecessary access on departure; report unexpected repository visibility immediately.

**Check before contributing:** Ask the actual maintainer whether repository access, required review and CI are configured. This guide describes a **desired operating model**, not automatic enforcement on every repository.

## 3. Repository names and file structure

Use descriptive lowercase hyphenated names, e.g. `mettelo-road-safety-dashboard`. Avoid `final-project` or personal vanity names. The source expects project-appropriate root files: `README.md`, approved `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md`, and `CITATION.cff` where relevant.

### Example structure (adapt to actual project)

```text
project/
├── data/          # permitted sample or processed data only
├── docs/          # architecture and decisions
├── notebooks/     # exploration
├── src/           # reusable implementation
├── tests/         # quality checks
├── dashboards/    # BI source/specifications
├── reports/       # approved outputs
├── .github/       # issue/PR templates
└── README.md
```

**Licences:** A public repository doesn't automatically make imported data, models, screenshots or employer code redistributable. Confirm the licence for each included asset. A repository named “public” is not a substitute for permissions.

## 4. Issue planning

The source requires an issue for **material** work. Start with a specific action title, reason, acceptance criteria, dependencies, evidence, labels/priority and ownership.

**Useful titles:** “Add postcode validation to ingestion”; “Document dashboard filter behaviour”; “Fix duplicate rows in monthly totals”.

### Copyable issue template

```markdown
## Problem
[What is failing, missing or unclear?]

## Expected outcome
[What observable change will resolve it?]

## Acceptance criteria
- [ ] [Testable result 1]
- [ ] [Testable result 2]

## Scope and dependencies
[Included work, exclusions, data/approval dependencies]

## Evidence required
[Test command, review, screenshot, permitted sample]

## Owner/reviewer
[Actual people or roles after assignment]
```

**Workflow:** Check duplicates → clarify with Project Lead → request/accept assignment → branch → report blockers/scope changes → close only once merged **and acceptance is met**.

## 5. Branch and commit standards

**Source policy:** `main` should remain stable; routine work goes through branches. Direct main commits require a formally authorised emergency exception. Example branch names:

```text
feature/123-add-data-validation
fix/214-correct-date-filter
docs/87-update-readme
chore/56-upgrade-dependencies
hotfix/301-remove-exposed-secret
```

Write concise imperative commits describing actual work, e.g. `Add schema validation for survey responses (#123)`. One logical change per commit; avoid mixing unrelated refactors; never commit local environments, tokens, personally identifying data or unlicensed content.

**Typical local sequence** (replace actual branch/path and check your project policy):

```bash
git status -sb
git switch -c feature/123-add-data-validation
# Make the agreed change and run real tests
git diff
git add path/to/changed-file
git diff --staged
git commit -m "Add source validation checks (#123)"
git push -u origin HEAD
```

See [safe command reference](git-github-command-reference.md) for integration, conflict and recovery.

## 6. Pull requests

PRs should tell reviewers **what was wrong, what changed, how you verified it and what remains**. The source expects: summary, linked issue, design/method decisions, checks, visual evidence where appropriate, data/security/licensing, limitations and reviewer.

**Source review-size preference:** changes understandable in approximately 20–40 minutes; this is a helpful **planning preference**, not a guarantee or universal limit. Split big work into preparatory, implementation and documentation PRs where sensible.

### Copyable PR template

```markdown
## Summary and linked issue
Closes #[issue-number]  <!-- only when a real issue will be resolved -->

## What changed and why
[Specific design, code or documentation work and decision rationale]

## Validation performed
[Actual test command + result or documented manual test]

## Screenshots / evidence
[Approved images or reproducible test files, if relevant]

## Data, security and licensing
[Source permissions, privacy, secrets, known risks]

## Known limitations and follow-up
[Real remaining work]

## AI assistance
[Material use disclosed in line with project requirements]

## Review requested
[Relevant authorised reviewer and specific decision]
```

**Approvals described in original policy:** at least one authorised reviewer for standard changes; Technical Lead/Maintainer for architecture, dependency, security and release changes; Project Lead acceptance for scope/user outcome changes. **Verify settings on the actual project** rather than assuming that GitHub enforces these rules automatically.

## 7. Reviews and merge policy

**Reviewers:** check issue acceptance, correctness, maintainability, tests, documentation, privacy and security. Label blocking concerns distinctly from optional recommendations. Explain feedback respectfully; never approve work you have not inspected.

**Contributors:** answer material comments, resolve after a real fix or agreed decision, justify rejected suggestions and request re-review after significant changes.

| Merge method | When source policy describes using it |
| --- | --- |
| Squash and merge | Default feature-work method; one readable commit on main |
| Merge commit | Preserve meaningful branch history |
| Rebase and merge | Only with maintainer agreement and an already clean history |

Do **not** self-merge unless the specific repository explicitly permits it and required independent approval is present.

## 8. Code, SQL and BI quality

| Area | What a reviewer should look for |
| --- | --- |
| General code | Clear names, small testable modules, pinned/documented dependencies, error handling and relevant tests |
| Python | PEP 8 or stricter repository formatter, appropriate type hints/docstrings, exploration separated from production |
| SQL | Readable formatting, documented joins/grain/filters, no indiscriminate `SELECT *` production queries, tests for nulls, duplicates, totals and referential integrity |
| Dashboards/BI | Agreed measures/dimensions, refresh/latency disclosure, accessibility, independent total validation and controlled sensitive records |

**Practical example:** If joining sales to customers, specify whether a customer may have multiple transactions. Show a small synthetic test checking that aggregation doesn't double-count customers. A “looks correct in Power BI” screenshot is not an adequate replacement for reconciled values.

## 9. Documentation and reproducibility

The README should allow an authorised person to understand and, when permitted, run or extend the project: title, real problem/users, data sources and licences, approach/architecture, setup, outputs, QA, limitations, credits and contact route.

### Architecture Decision Record (illustration)

```markdown
# ADR-003: Use DuckDB for local analytical processing
Status: Accepted [only if actually approved]
Context: [Real user, performance, cost or reproducibility issue]
Options: [Meaningful alternatives]
Decision: [What was agreed and by whom]
Consequences: [Trade-offs, limitations, follow-up]
```

**Reproducibility:** No unexplained local-only dependency; versioned environment, permitted sample/synthetic data, seeds where relevant, exact commands and expected results.

## 10. Data, privacy and licensing

Use only appropriately public/licensed data, material covered by an approved agreement, or data expressly authorised by the proper owner. **Do not commit:** private individual records, confidential partner/client material, credentials, unlicensed copyrighted datasets, raw unneeded identifiers or restricted connection URLs.

For every dataset record source/owner, licence and permitted use, access date, refresh, dictionary/grain, transformations, quality limits, privacy, bias and ethics. If a licence is unclear, stop and ask the Maintainer.

## 11. Security and incident response

- Store secrets in approved secret managers/environment variables; `.env.example` may contain **key names only**, no actual values.
- Use suitable dependency/security checks where supported; do not claim automatic scanning is configured without verification.
- Report vulnerabilities privately via the repository's `SECURITY.md` guidance, not an open issue.
- Use least-privilege access and remove expired members.

**If a secret is suspected to be exposed:** notify Maintainer/Organisation Owner immediately → revoke/rotate credential → assess history and downstream misuse → arrange safe history remediation if necessary → document the incident and corrective work. **Simply deleting the latest file does not revoke a leaked secret.** Prompt reporting is responsible practice.

## 12. Responsible AI use

AI may help draft tests, suggest implementation options, explain technical concepts or propose documentation **only within data and application-permission rules**. Submitters remain responsible for every claim and line of code.

**Check:** no confidential inputs given to unapproved AI; output tested for correctness and licences; generated dependencies/security assessed; material AI contribution honestly disclosed.

**Example disclosure:** “AI assistance: a coding assistant drafted preliminary unit-test scaffolding. I checked assertions against requirements, changed the tests and executed them locally; results are listed above.” Describe only what actually occurred.

## 13. Releases, change logs and closure

**Release readiness:** acceptance met; required review approved; *configured* checks passing; documentation current; data/licence/security issues resolved or formally accepted; release note prepared.

**Versions:** `MAJOR.MINOR.PATCH` where semantic versioning makes sense for reusable software. Research, reports and dashboards may instead use dated/milestone releases as specified by the project.

**Release notes should include:** changed features/fixes, any migration needed, limitations, real contributors and relevant issues/PRs.

**Closure:** final README/release/docs approved, outstanding issues triaged, showcase complete where appropriate, contributions accurate, lessons captured, repo archived or handed to actual maintainer.

## 14. Contribution recognition

Credit comes from **the quality, relevance and traceability of actual work**, not commit count. Examples include substantive issues, merged PRs, thoughtful reviews, architecture/methodology decisions, testing, reproducibility work, project leadership with genuine responsibility and community support tied to real outputs.

Keep meaningful review/contributor records and `CONTRIBUTORS.md` where appropriate. Obtain consent before public use of individuals' profiles. Contributors may describe **approved public work** in portfolios only within licence/confidentiality and accurate role boundaries.

**Career evidence:** “Reviewed three PRs and corrected missing-value checks” is stronger and more truthful than claiming “Led engineering” if the person did not lead it.

## 15. Templates and acknowledgements

The issue and PR templates above are copyable versions of the source's Appendix templates. Where an authorised Mettelo process requires written acknowledgement, it should confirm that a real contributor read and understood applicable repository, security, data and review rules.

**Original acknowledgement fields:** Full name, GitHub username, project/team, signature and date. These are *personal identity/signature records*—never request completed forms in a public GitHub issue or PR. Collection must use an approved private route.

**For questions:** Project Lead, Repository Maintainer or Mettelo Labs administrator.

---

**Unresolved policy fact:** The original effective date is `[DD MONTH YYYY]`; no implementation verification has been provided for every Mettelo repository. The original's “Approved” status describes the source, **not independent confirmation that this edited version has been formally adopted**. Obtain owner validation before labelling it final policy.

### Find your way around

[← GitHub resources](README.md) · [Practical Handbook](github-handbook.md) · [Command Reference](git-github-command-reference.md) · [Project Charter](../project-documentation/project-charter-template.md) · [Start Here](../../START_HERE.md) · [Directory](../../RESOURCE_INDEX.md) · [🏠 Home](../../README.md)
