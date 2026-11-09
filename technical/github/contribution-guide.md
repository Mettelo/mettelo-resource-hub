# Mettelo GitHub Contribution Guide

**For Mettelo Labs, open-source projects and contributor teams**

[← GitHub resources](README.md) · [← Technical resources](../README.md) · [← Resource Hub](../../README.md)

| Document detail | Original value |
| --- | --- |
| Document owner | Mettelo Labs |
| Version | 1.0 |
| Source status | Approved operating guide |
| Effective date | **[DD MONTH YYYY]** — not completed in the original |
| Review cycle | Every 12 months or after a major GitHub workflow change |
| Classification | Public / contributor-facing |

**One shared standard for issues, branches, pull requests, review, documentation, quality and contributor recognition.**

> **Source-fidelity note:** This Markdown edition transfers the 16-page supplied *Mettelo GitHub Contribution Guide Final.docx*, rather than inventing technical policy. The source identifies an approved guide but leaves its effective date unresolved. The source has some multi-column layout and numbered-list artefacts, so this edition is marked **Draft — formatting/policy implementation review** pending final confirmation. Policy statements below are those of the original guide; do not assume every repository has already implemented its controls.

## Contents

- [Overview](#section-1)
- [01 Purpose and Contribution Philosophy](#section-2)
- [02 Organisation Structure, Access and Roles](#section-3)
- [03 Repository Creation and Standard Structure](#section-4)
- [04 Issues and Work Planning](#section-5)
- [05 Branching and Commit Standards](#section-6)
- [06 Pull Request Standards](#section-7)
- [07 Review, Approval and Merge Policy](#section-8)
- [08 Code, SQL, Analytics and Dashboard Standards](#section-9)
- [09 Documentation and Reproducibility](#section-10)
- [10 Data, Privacy and Licensing](#section-11)
- [11 Security and Secrets Management](#section-12)
- [12 Responsible Use of AI](#section-13)
- [13 Releases, Change Logs and Project Closure](#section-14)
- [14 Contributor Recognition and Evidence](#section-15)
- [15 Templates, Quick Reference and Acknowledgement](#section-16)

## Contributor workflow at a glance

1. Find or create a clear issue; confirm scope and acceptance criteria.
2. Work on a focused issue-linked branch, not directly on `main`.
3. Commit understandable logical changes without secrets or private data.
4. Open a pull request describing the change, tests, data/security concerns and any material AI assistance.
5. Obtain the required independent review and address comments.
6. Merge using the repository's approved method, record results and maintain documentation.

The following source sections contain the full operating guidance, including roles, examples and acknowledgement text.

---

<a id="section-1"></a>

## Document control and overview

*Original document page 1 of 16.*

For Mettelo Labs, open-source projects and contributor teams
Document owner Mettelo Labs
Version 1.0
Status Approved operating guide
Effective date [DD MONTH YYYY]
Review cycle Every 12 months or after a major GitHub workflow
change
Classification Public / contributor-facing
One shared standard for issues, branches, pull requests, review, documentation, quality and
contributor recognition.

[↑ Back to contents](#contents)

---

<a id="section-2"></a>

## 01 Purpose and Contribution Philosophy

*Original document page 2 of 16.*

Purpose and Contribution Philosophy
GitHub is the single source of truth for Mettelo Labs technical work. It provides a transparent record of
project decisions, code, documentation, reviews, releases and individual contributions.
This guide applies to
- All Mettelo-owned repositories
- Labs projects hosted within the Mettelo GitHub organisation
- Contributors, maintainers, reviewers, project leads and organisation owners
- Code, data documentation, dashboards, models, APIs, automation, research and non-code assets
stored in GitHub
Our contribution philosophy
- Start with a clearly described problem.
- Create an issue before beginning material work.
- Keep changes small enough to review properly.
- Document decisions, assumptions and limitations.
- Use review as a quality and learning process, not a gatekeeping exercise.
- Give transparent credit for actual contribution.
- Protect users, data, partners and the reputation of Mettelo.
The objective is not simply to produce code. It is to create useful, maintainable and credible
evidence of capability.

[↑ Back to contents](#contents)

---

<a id="section-3"></a>

## 02 Organisation Structure, Access and Roles

*Original document page 3 of 16.*

Organisation Structure, Access and Roles
GitHub roles
Organisation Owner
Manages organisation settings, security, teams,
repositories and emergency access. Limited to trusted
Mettelo leadership.
Repository Maintainer Administers an approved repository, protects branches,
manages releases and coordinates reviewers.
Project Lead Owns delivery outcomes, scope, priorities, team
coordination and acceptance of work.
Technical Lead Sets technical direction, reviews architecture and
supports engineering quality.
Reviewer Provides subject-matter, code, data, design or
documentation review.
Contributor Works on assigned issues through approved branches
and pull requests.
Observer Has read access for learning, assurance, partner
oversight or evaluation.
Access principles
- Use the least level of access required.
- Do not share accounts, tokens or credentials.
- Enable multi-factor authentication where required by Mettelo.
- Remove access when a contributor leaves a project or no longer requires it.
- Report unexpected access or repository visibility immediately.

[↑ Back to contents](#contents)

---

<a id="section-4"></a>

## 03 Repository Creation and Standard Structure

*Original document page 4 of 16.*

Repository Creation and Standard
Structure
Repository naming
Use short, descriptive, lowercase names separated by hyphens. Avoid personal names, dates unless
essential, and vague terms such as “final-project”.
Preferred examples:
mettelo-food-bank-impact
mettelo-road-safety-dashboard
mettelo-job-market-intelligence
Avoid:
ProjectFinalV2
john-dashboard
data-project
Required root files
- README.md — purpose, setup, methodology, results and limitations
- LICENSE — approved licence for the repository
- CONTRIBUTING.md — contribution workflow and project-specific standards
- CODE_OF_CONDUCT.md — link to the Mettelo Community Code of Conduct
- SECURITY.md — how to report vulnerabilities or sensitive issues
- CHANGELOG.md — material changes by release
- CITATION.cff — preferred citation and contributor metadata where relevant
Recommended folder structure
├── data/ # permitted sample or processed data only
├── docs/ # methodology, architecture and decisions
├── notebooks/ # exploratory notebooks
├── src/ # production code
├── tests/ # automated tests and QA checks
├── dashboards/ # BI source files or specifications
├── reports/ # outputs and final reports
├── .github/ # issue and pull request templates
└── README.md

[↑ Back to contents](#contents)

---

<a id="section-5"></a>

## 04 Issues and Work Planning

*Original document page 5 of 16.*

Issues and Work Planning
Every material contribution should begin with a GitHub issue. Issues define the work, create visibility
and provide the link between project scope and delivered changes.
A good issue includes
- Clear title beginning with an action verb
- Context and problem to be solved
- Expected outcome
- Acceptance criteria
- Dependencies and relevant links
- Required evidence, screenshots or tests
- Labels, priority, milestone and owner
Issue title examples
- Add postcode-level validation to the ingestion pipeline
- Document dashboard filter behaviour
- Fix duplicate records in monthly aggregation
- Design contributor onboarding issue template
Issue workflow
1. Confirm the issue is not duplicated.
2. Clarify scope with the Project Lead if needed.
3. Assign the issue to yourself or request assignment.
4. Create a branch linked to the issue.
5. Update the issue when blocked or when scope changes.
6. Close the issue only after the pull request is merged and acceptance criteria are met.

[↑ Back to contents](#contents)

---

<a id="section-6"></a>

## 05 Branching and Commit Standards

*Original document page 6 of 16.*

Branching and Commit Standards
Protected branches
The main branch must remain stable and releasable. Direct commits to main are not permitted except for
formally authorised emergency action.
Branch naming
feature/123-add-data-validation
fix/214-correct-date-filter
docs/87-update-readme
chore/56-upgrade-dependencies
hotfix/301-remove-exposed-secret
Commit messages
Use concise, imperative messages describing the change. Include the issue number where practical.
Good:
Add schema validation for survey responses (#123)
Fix null handling in monthly totals (#214)
Document local setup steps (#87)
Avoid:
changes
final fix
work done
Commit hygiene
- Commit one logical change at a time.
- Do not mix unrelated refactoring with feature delivery.
- Do not commit generated files, local environments, passwords or personal data.
- Rebase or update from the target branch before requesting final review where required.

[↑ Back to contents](#contents)

---

<a id="section-7"></a>

## 06 Pull Request Standards

*Original document page 7 of 16.*

Pull Request Standards
A pull request is the formal request to review and merge a contribution. It should allow a reviewer to
understand what changed, why it changed and how quality was checked.
Required pull request content
- Summary of the problem and solution
- Linked issue using “Closes #123” where appropriate
- Description of material design or methodology decisions
- Testing and validation performed
- Screenshots for dashboards, user interfaces or visual changes
- Data/privacy/licensing considerations
- Known limitations or follow-up work
- Reviewer assignment
Pull request size
- Prefer focused changes that can be reviewed within 20–40 minutes.
- Split large work into preparatory, implementation and documentation pull requests.
- Draft pull requests may be used to obtain early feedback.
Minimum approval
- At least one authorised reviewer for standard changes
- Technical Lead or Maintainer approval for architecture, dependencies, security or release changes
- Project Lead acceptance where the change affects scope or user outcomes

[↑ Back to contents](#contents)

---

<a id="section-8"></a>

## 07 Review, Approval and Merge Policy

*Original document page 8 of 16.*

Review, Approval and Merge Policy
Reviewer responsibilities
- Review the issue and acceptance criteria before assessing implementation.
- Check correctness, maintainability, documentation, privacy and security.
- Explain requested changes clearly and respectfully.
- Distinguish blocking issues from optional suggestions.
- Do not approve work you have not reasonably examined.
Contributor response
- Respond to all material review comments.
- Resolve comments only after the concern has been addressed or agreed.
- Explain where a recommendation is not adopted.
- Request re-review after significant changes.
Merge methods
Squash and merge Default for feature branches; creates a clear single
commit on main.
Merge commit Used where preserving a meaningful branch history is
required.
Rebase and merge Used only where agreed by the Maintainer and the
branch history is already clean.
A contributor must not merge their own pull request unless the repository rules explicitly
permit it and required independent approval is present.

[↑ Back to contents](#contents)

---

<a id="section-9"></a>

## 08 Code, SQL, Analytics and Dashboard Standards

*Original document page 9 of 16.*

Code, SQL, Analytics and Dashboard
Standards
General engineering quality
- Use clear names and small, testable functions or modules.
- Remove unused code and commented-out experiments before release.
- Pin or document dependencies.
- Handle errors and edge cases explicitly.
- Include tests or reproducible QA evidence for material logic.
Python
- Follow PEP 8 unless the repository defines a stricter formatter.
- Use type hints for shared production code where practical.
- Use docstrings for public functions and complex logic.
- Separate notebooks used for exploration from production code.
SQL
- Use consistent casing, indentation and meaningful aliases.
- Avoid SELECT * in production queries.
- Document grain, joins, filters and assumptions.
- Add validation queries for totals, duplicates, nulls and referential integrity.
Dashboards and BI
- Use agreed definitions for measures and dimensions.
- Document filters, refresh logic and data latency.
- Use accessible labels, readable contrast and consistent number formats.
- Validate totals against an independent source or query.
- Avoid publishing sensitive row-level data.

[↑ Back to contents](#contents)

---

<a id="section-10"></a>

## 09 Documentation and Reproducibility

*Original document page 10 of 16.*

Documentation and Reproducibility
A Mettelo project is not complete if another contributor cannot understand, run, review or extend it.
README minimum standard
7. Project title and one-sentence summary
8. Problem statement and intended users
9. Data sources, licences and access instructions
10. Architecture or analytical approach
11. Setup and local execution steps
12. Key outputs and screenshots
13. Validation and testing approach
14. Limitations, ethical considerations and known risks
15. Contributor credits and contact route
Decision records
Important architecture, data, modelling or governance choices should be recorded in docs/decisions
using short Architecture Decision Records (ADRs).
# ADR-003: Use DuckDB for local analytical processing
Status: Accepted
Context: ...
Decision: ...
Consequences: ...
Reproducibility checklist
- No undocumented local-only steps
- Environment or dependency file included
- Sample or synthetic data available where real data cannot be shared
- Random seeds recorded where relevant
- Commands and expected outputs documented

[↑ Back to contents](#contents)

---

<a id="section-11"></a>

## 10 Data, Privacy and Licensing

*Original document page 11 of 16.*

Data, Privacy and Licensing
Dataset approval
Only use data that is public, appropriately licensed, supplied under an approved agreement, or explicitly
authorised by the Mettelo Project Lead and data owner.
Do not commit
- Personal data that is not approved for publication
- Confidential partner data
- Credentials, tokens, private URLs or connection strings
- Copyrighted datasets without redistribution rights
- Raw data containing unnecessary identifiers
Data documentation
- Source and owner
- Licence and permitted use
- Date accessed and update frequency
- Data dictionary and grain
- Quality issues and transformations
- Privacy, bias and ethical considerations
Licensing
- Every public repository must have an approved licence.
- Third-party code, models, images and data must retain required notices.
- Do not copy code from another repository without checking its licence.
- Where licence compatibility is uncertain, pause and ask the Maintainer.

[↑ Back to contents](#contents)

---

<a id="section-12"></a>

## 11 Security and Secrets Management

*Original document page 12 of 16.*

Security and Secrets Management
Required controls
- Store secrets in environment variables or an approved secrets manager.
- Provide a .env.example file containing names only, never real values.
- Use dependency scanning and automated security checks where supported.
- Keep permissions minimal and remove unused collaborators.
- Report vulnerabilities privately through SECURITY.md rather than a public issue.
Suspected secret exposure
16. Do not attempt to hide the event by only deleting the file.
17. Notify the Maintainer or Organisation Owner immediately.
18. Revoke and rotate the credential.
19. Remove it from repository history where required.
20. Assess logs and downstream systems for misuse.
21. Document the incident and corrective action.
Security issues take priority over normal project delivery. Prompt reporting will be treated as
responsible behaviour.

[↑ Back to contents](#contents)

---

<a id="section-13"></a>

## 12 Responsible Use of AI

*Original document page 13 of 16.*

Responsible Use of AI
AI tools may support research, coding, documentation and testing, but contributors remain accountable
for every submitted output.
Permitted use
- Generating draft code or tests that are independently reviewed
- Explaining unfamiliar concepts or suggesting refactoring options
- Drafting documentation that is checked against the implementation
- Supporting brainstorming with non-confidential information
Required safeguards
- Never submit confidential, personal or restricted data to an unapproved AI tool.
- Verify factual claims, calculations, code and citations.
- Check generated code for licensing, security and dependency risks.
- Disclose material AI assistance in the pull request where it affected the solution.
- Do not present AI-generated work as independently authored expertise.
Suggested disclosure
AI assistance: GitHub Copilot was used to draft unit-test scaffolding.
All tests and assertions were reviewed, corrected and executed by the contributor.

[↑ Back to contents](#contents)

---

<a id="section-14"></a>

## 13 Releases, Change Logs and Project Closure

*Original document page 14 of 16.*

Releases, Change Logs and Project Closure
Release readiness
- Acceptance criteria completed
- Required reviews approved
- Automated checks passing
- Documentation updated
- Data and licence checks complete
- Security issues resolved or formally accepted
- Release notes prepared
Versioning
Use semantic versioning where the project produces reusable software: MAJOR.MINOR.PATCH.
Dashboards, reports and research outputs may use dated or milestone-based releases where more
suitable.
Release notes should state
- What was added, changed or fixed
- Any migration or setup action
- Known limitations
- Contributors included in the release
- Links to relevant issues and pull requests
Closure
- Final README and documentation approved
- Repository topics and description updated
- Outstanding issues categorised
- Demo or showcase completed
- Contributor credits verified
- Lessons learned recorded
- Repository archived or transferred to maintenance status

[↑ Back to contents](#contents)

---

<a id="section-15"></a>

## 14 Contributor Recognition and Evidence

*Original document page 15 of 16.*

Contributor Recognition and Evidence
Mettelo uses GitHub activity as one source of contribution evidence, but recognition is based on the
quality, relevance and traceability of work—not raw commit counts.
Evidence may include
- Issues defined or resolved
- Pull requests authored and merged
- Reviews that materially improved quality
- Architecture or methodology decisions
- Documentation, testing and quality assurance
- Project leadership and release coordination
- Community support linked to delivery outcomes
Contributor credits
- Use GitHub contributors and release notes.
- Maintain a CONTRIBUTORS.md file for broader roles not fully visible through commits.
- Describe contributions accurately using role and deliverable language.
- Obtain consent before using personal profiles in public promotion.
Portfolio use
Contributors may reference public Mettelo work in their portfolio, subject to the repository licence,
confidentiality obligations and accurate description of their own contribution.

[↑ Back to contents](#contents)

---

<a id="section-16"></a>

## 15 Templates, Quick Reference and Acknowledgement

*Original document page 16 of 16.*

Templates, Quick Reference and
Acknowledgement
Pull request template
## Summary
## Linked issue
Closes #
## What changed
## Validation performed
## Screenshots / evidence
## Data, security or licensing considerations
## AI assistance disclosure
## Checklist
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No secrets or restricted data included
Issue template
## Problem
## Expected outcome
## Acceptance criteria
- [ ]
## Dependencies
## Evidence required
Contributor acknowledgement
I confirm that I have read and understood this guide and agree to follow the repository, security, data,
review and conduct standards that apply to my Mettelo contributions.
Full name ____________________________
GitHub username ____________________________
Project / team ____________________________
Signature ____________________________
Date ____________________________
Questions or access requests should be directed to the relevant Project Lead, Repository
Maintainer or Mettelo Labs administrator.

[↑ Back to contents](#contents)

---

## Notes for repository maintainers

The original operating guide names root files expected on Mettelo project repositories, including `LICENSE`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CHANGELOG.md` and optional `CITATION.cff`. This **resource library** may have a different document-publication workflow from code projects. Review and adopt the relevant requirements deliberately rather than implying every file has already been implemented.

The source's acknowledgement includes blank fields for personal identity and signature. Contributors should not submit filled signed acknowledgements to a public issue or pull request unless Mettelo has an authorised and appropriate collection process.

**Source:** *Mettelo_GitHub_Contribution_Guide_Final.docx*, 16 pages, Version 1.0. Original text transferred into GitHub Markdown. Editorial improvements to table formatting and the source's misnumbered ordered lists remain open.

**Prepared for Mettelo Labs.**
