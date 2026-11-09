# Mettelo Project Charter & Delivery Framework

**Controlled project-planning template · Version 1.0 · Improved Markdown edition · 9 November 2026**  
[🏠 Home](../../README.md) · [Start Here](../../START_HERE.md) · [Project documentation](README.md) · [Weekly updates](weekly-update-template.md) · [Retrospective](retrospective-template.md)

> **Source authority and status:** The 16-page Mettelo Labs Word charter specifies an approval process before controlled project delivery. This version **reconstructs the actual source sections and table structures** as readable Markdown and adds labelled instructional comments where helpful. **This blank template is not an approved charter or evidence that approval was granted.** The underlying source is recoverable from Git history. The original effective/approval dates must be populated by authorised people. Final owner sign-off on this formatted edition is pending.

## Start here — how to complete an actual project charter

1. **Create a private/approved copy** in the relevant project workspace; don't fill out the public library template with sensitive project facts.
2. Assign a real **Sponsor**, **Project Lead**, **Technical Lead**, **Data/Privacy Lead**, **QA Reviewer** and **Documentation Lead**; record actual capacity.
3. Explain the **problem and users** before choosing tools. Gather consent/appropriate authorisation for sensitive sources.
4. Define 2–4 measurable objectives, outputs, acceptance criteria, milestones and the tests that will establish completion.
5. Record the **data licence, security, risk and release constraints** that could stop the project.
6. Obtain the specified approvals and retain the real approval record **before controlled delivery**.
7. Review changes, releases, handover and contributor evidence throughout the project.

**Example (fictional):** A team wants to analyse openly licensed city transport records to show monthly service reliability. A useful charter identifies the dataset licence, definition of a completed service, refresh frequency, who reviews quality, a deliverable dashboard, acceptance tests and a privacy review. “Build a dashboard in Power BI” is a technical task, **not** a sufficient problem definition.

## Contents

1. [Document control and status](#1-document-control-and-status)
2. [Executive summary and decision](#2-executive-summary-and-decision)
3. [Problem, users and objectives](#3-problem-users-and-objectives)
4. [Scope and definition of done](#4-scope-and-definition-of-done)
5. [Roles, governance and RACI](#5-roles-governance-and-raci)
6. [Timeline, milestones and cadence](#6-timeline-milestones-and-cadence)
7. [Technology and architecture](#7-technology-and-architecture)
8. [Data, licensing and privacy](#8-data-licensing-and-privacy)
9. [Testing and release assurance](#9-testing-and-release-assurance)
10. [Risks, assumptions and dependencies](#10-risks-assumptions-and-dependencies)
11. [Communication and change control](#11-communication-and-change-control)
12. [Success measurement and evaluation](#12-success-measurement-and-evaluation)
13. [Handover and contribution evidence](#13-handover-and-contribution-evidence)
14. [Approval and sign-off](#14-approval-and-sign-off)
15. [Weekly updates and retrospective](#15-weekly-updates-and-retrospective)

---

## 1. Document control and status

| Field | Value |
| --- | --- |
| Document owner | Mettelo Labs |
| Template version | 1.0 |
| Project ID | [ML-YYYY-###] |
| Project classification | [PUBLIC / INTERNAL / CONFIDENTIAL] |
| Project Sponsor | [Name and organisation] |
| Project Lead | [Name] |
| Prepared by | [Name / role] |
| Reviewed by | [Name / role] |
| Approved by | [Authorised name / role, not a placeholder signature] |
| Effective date | [DD MONTH YYYY] |
| Next review | [DD MONTH YYYY] |

### Version history

| Version | Date | Author | Change | Approval |
| --- | --- | --- | --- | --- |
| 0.1 | [Date] | [Name] | Initial draft | Pending |
| 0.2 | [Date] | [Name] | Review updates | Pending |
| 1.0 | [Date] | [Name] | Approved baseline | Approved **only if actually signed** |

**Approval means:** problem, scope, team, data, timeline and risk are sufficiently clear to begin controlled delivery. Approval never removes ongoing governance, change control or release assurance. Keep the approved charter in the designated documentation workspace.

## 2. Executive summary and decision

| Field | Response |
| --- | --- |
| Project name | [Clear, outcome-led title] |
| Project ID | [ML-YYYY-###] |
| Problem owner / Sponsor | [Name / organisation] |
| Project Lead | [Name] |
| Proposed start and end | [Dates] |
| Delivery model | [Volunteer / Partner / Sponsored / Internal] |
| Project status | [Proposed / Approved / Active / On Hold / Closed] |

**Project overview (suggested 100–150 words):** [Real-world problem, target users, proposed approach, main outputs and intended value.]

**Decision requested:** [Precisely what the Sponsor or Mettelo authority must approve, grant access to or decide.]

| Expected benefit | Confirmed or planned measure |
| --- | --- |
| Primary outcome | [Real capability/value created; target if not yet measured] |
| Beneficiaries | [Actual intended users and stakeholders] |
| Evidence of success | [How benefit will be verified] |
| Public/portfolio value | [How permitted outputs support learning] |

## 3. Problem, users and objectives

### Understand the need first

**Current situation:** [Existing process, unmet need, user difficulty and objective evidence. Do not describe the proposed tool as the problem.]

**Why it matters:** [Operational, social, financial, technical or user consequences; state uncertainty.]

### Stakeholder map

| Group | Need or concern | Influence | Engagement approach |
| --- | --- | --- | --- |
| [User group] | [Need] | High / Medium / Low | [How and when] |
| [Project partner] | [Need] | High / Medium / Low | [How and when] |

### Objectives

| ID | Specific objective | How measured | Target | Owner |
| --- | --- | --- | --- | --- |
| OBJ-01 | [Objective] | [Metric] | [Target] | [Name] |
| OBJ-02 | [Objective] | [Metric] | [Target] | [Name] |
| OBJ-03 | [Objective] | [Metric] | [Target] | [Name] |

**Explicitly out of scope:** [Excluded data / users / product features / operations].

**Example distinction:** “Deliver SQL validation rules” is an output; “Ensure that missing service IDs are detected and triaged before analysis” is a testable quality objective.

## 4. Scope and definition of done

**In scope:** [Data sources, geographical area, target users, planned outputs, support and training actually agreed].

| ID | Deliverable | Description | Owner | Due | Acceptance criteria |
| --- | --- | --- | --- | --- | --- |
| DEL-01 | [Dashboard/model/API/dataset] | [Specific capability] | [Name] | [Date] | [Observable validation] |
| DEL-02 | Documentation | README, methodology, limitations, operating guidance | [Name] | [Date] | Usable by an independent reviewer |
| DEL-03 | Showcase | Demonstration, presentation or recording | [Name] | [Date] | Accepted by Project Lead and QA |

### Definition of done

- [ ] Deliverables meet approved acceptance criteria.
- [ ] Relevant code, data and documentation reviews completed.
- [ ] Known limitations and unresolved risks documented.
- [ ] Privacy, licensing, security and accessibility checks completed.
- [ ] Contributor credits and ownership verified.
- [ ] Appropriate role **formally approved** release or handover.

**Do not count a demo or GitHub upload as acceptance** without the project's required review evidence.

## 5. Roles, governance and RACI

| Role | Person | Actual accountability |
| --- | --- | --- |
| Project Sponsor | [Name] | Strategic alignment, problem ownership and final acceptance |
| Project Lead | [Name] | Scope, delivery, coordination and reporting |
| Technical Lead | [Name] | Architecture, technical quality and review |
| Data / Privacy Lead | [Name] | Data suitability, access and privacy controls |
| QA Reviewer | [Name] | Independent assurance and release quality |
| Documentation Lead | [Name] | Documentation and contribution evidence |

### Original source RACI matrix

| Activity | Sponsor | Project Lead | Technical Lead | Contributors | QA |
| --- | --- | --- | --- | --- | --- |
| Approve Charter | **A** | **R** | C | I | C |
| Confirm architecture | I | **A** | **R** | C | C |
| Deliver work packages | I | **A** | C | **R** | C |
| Approve scope change | **A** | **R** | C | I | C |
| Release final outputs | **A** | **R** | C | I | **R** |
| Close project | **A** | **R** | C | I | C |

R = Responsible; A = Accountable; C = Consulted; I = Informed. **The source assigns two R roles on release** (Project Lead and QA); this was retained rather than silently changed. Review operational responsibilities and separation of independent assurance before approving the charter.

## 6. Timeline, milestones and cadence

### Delivery phases

| Phase | Purpose | Start | End | Exit evidence |
| --- | --- | --- | --- | --- |
| Discovery | Confirm problem, users, data and feasibility | [Date] | [Date] | Approved evidence and problem |
| Planning | Confirm scope, architecture, team and backlog | [Date] | [Date] | Approved charter and plan |
| Build | Develop and review agreed outputs | [Date] | [Date] | Working increment and test evidence |
| Assurance | Check quality, privacy, security and usability | [Date] | [Date] | Release approval |
| Showcase | Demonstrate output and learning | [Date] | [Date] | Showcase completed |
| Closure | Handover, archive and recognise work | [Date] | [Date] | Approved closure report |

### Milestone register

| Milestone | Target | Owner | Dependency | Status |
| --- | --- | --- | --- | --- |
| Charter approved | [Date] | [Name] | [Approval] | Not started |
| Working increment | [Date] | [Name] | [Data] | Not started |
| QA complete | [Date] | [Name] | [Tests] | Not started |
| Final showcase | [Date] | [Name] | [Release] | Not started |

**Team cadence:** Weekly check-in [time/channel]; asynchronous update [format]; technical review [frequency]; Sponsor checkpoint [frequency]; retrospective [date]. Use [Weekly Update Template](weekly-update-template.md).

## 7. Technology and architecture

| Layer | Technology | Purpose | Owner | Licence/constraint |
| --- | --- | --- | --- | --- |
| Source/ingestion | [Tool] | [Purpose] | [Name] | [Constraint] |
| Storage | [Tool] | [Purpose] | [Name] | [Constraint] |
| Transformation | [Tool] | [Purpose] | [Name] | [Constraint] |
| Analytics/ML | [Tool] | [Purpose] | [Name] | [Constraint] |
| Presentation/API | [Tool] | [Purpose] | [Name] | [Constraint] |
| Version control | GitHub | Issues, branches, reviews, releases | [Name] | Access/visibility agreed |

**End-to-end architecture:** [Source → ingestion → storage → transformations → analysis/model → delivery; environments, interfaces, authentication, refresh/deploy, major design decisions.]

**Environment controls:** Define development/test/release; keep credentials out of repository; pin/document dependencies; assign deployment and rollback owner; record budgets and infrastructure constraints.

## 8. Data, licensing and privacy

### Data inventory

| Source | Owner | Access/location | Licence/terms | Refresh | Sensitivity | Quality status |
| --- | --- | --- | --- | --- | --- | --- |
| [Dataset] | [Owner] | [Permitted location] | [Licence] | [Frequency] | Public / Internal / Personal | [Assessment] |

### Data quality assessment

| Dimension | Question | Finding | Action/owner |
| --- | --- | --- | --- |
| Completeness | Are required fields/time periods present? | [Finding] | [Action] |
| Accuracy | Can important values be independently checked? | [Finding] | [Action] |
| Consistency | Are definitions, formats and grains stable? | [Finding] | [Action] |
| Timeliness | Is source current for intended use? | [Finding] | [Action] |
| Bias/representation | Which users, places or groups may be missing? | [Finding] | [Action] |

**Privacy and ethics:** Lawful basis/permission [details]; minimisation [excluded data]; retention/deletion [period and method]; affected groups and ethical risk [details]; DPIA or further review required? [Yes / No / To confirm].

**Go/no-go:** Do not start processing protected data simply because the team's GitHub access works. Confirm actual authorisation, licence and safe storage first.

## 9. Testing and release assurance

| Area | Required control | Evidence | Approver |
| --- | --- | --- | --- |
| Data | Validation, reconciliation, anomaly checks | [Result/link] | [Name] |
| Code | Peer review, linting and suitable tests | [Result/link] | [Name] |
| Analytics/model | Method validation, benchmarking, limitations | [Result/link] | [Name] |
| Dashboard/UX | Functionality, visual and accessibility testing | [Result/link] | [Name] |
| Documentation | README, setup, usage, limitations | [Result/link] | [Name] |
| Security/privacy | Access, secrets, data and release review | [Result/link] | [Name] |

**Five release gates from the source:** (1) Scope/data readiness approved; (2) working increment demonstrated; (3) technical and data QA passed; (4) privacy/security/licensing passed; (5) Sponsor/authorised owner accepts output.

**Known limitations:** [Record impacts on interpretation, fairness, scale, reliability and maintenance.] Preserve the actual approval records.

## 10. Risks, assumptions and dependencies

### Risk register

| ID | Risk and consequence | Likelihood | Impact | Mitigation | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- |
| R-01 | [Risk] | Low/Med/High | Low/Med/High | [Action] | [Name] | Open |
| R-02 | [Risk] | Low/Med/High | Low/Med/High | [Action] | [Name] | Open |

### Assumption/dependency/constraint

| ID | Type | Statement | Validation/action owner | Due |
| --- | --- | --- | --- | --- |
| A-01 | Assumption | [Assumption to test] | [Name] | [Date] |
| D-01 | Dependency | [External input] | [Name] | [Date] |
| C-01 | Constraint | [Time/cost/access/technology restriction] | [Name] | [Date] |

**Escalate when:** major data/security/safeguarding risk; material milestone slip; scope/data/partner or public-claims changes; unresolved team conflict; project no longer feasible, lawful, ethical or worthwhile.

## 11. Communication and change control

### Communication plan

| Audience | Information | Channel | Frequency | Owner |
| --- | --- | --- | --- | --- |
| Team | Tasks, blockers, decisions | GitHub / Discord | Weekly/ongoing | Project Lead |
| Sponsor | Progress, risks, decisions | Email / meeting | [Cadence] | Project Lead |
| Community | **Approved** updates/showcase | Community channels | Milestones | Community Lead |
| Public users | Release, method and limitations | GitHub / website | At release | Project Lead |

**Sources of truth:** GitHub for code/issues/PRs/history; approved documentation workspace for charter/decisions; email for formal approvals/partner commitments; community channels for discussion, **not** unrecorded formal decisions.

### Change control register

| Change ID | Requested change | Reason/benefit | Scope/time/risk/data impact | Decision | Approver | Date |
| --- | --- | --- | --- | --- | --- | --- |
| CHG-01 | [Change] | [Reason] | [Impact] | Pending | [Name] | [Date] |

Changes to scope, data, timeline, partner obligations or public release require approval and updated charter version.

## 12. Success measurement and evaluation

| Measure | Baseline | Target | Method/source | Review | Owner |
| --- | --- | --- | --- | --- | --- |
| Outcome metric | [Observed value] | [Target] | [Method] | [Date] | [Name] |
| Quality metric | [Value] | [Target] | [Method] | [Date] | [Name] |
| Use/adoption metric | [Value] | [Target] | [Method] | [Date] | [Name] |
| Contributor metric | [Value] | [Target] | [Method] | [Date] | [Name] |

**Benefits statement:** [Direct, indirect and learning value; separate evidence and assumptions.]

**Evaluation plan:** Measure a true baseline where possible; identify who owns data; include unintended effects and limitations; do not use GitHub stars or social impressions as the sole demonstration of value. Where sustained use is expected, schedule a 30/60/90-day post-project review according to the approved plan.

## 13. Handover and contribution evidence

### Handover register

| Asset | New owner | Location | Training/guidance | Completion |
| --- | --- | --- | --- | --- |
| Repository | [Owner] | [URL] | [Guide] | [Date] |
| Data/pipeline | [Owner] | [Permitted location] | [Guide] | [Date] |
| Dashboard/product | [Owner] | [Location] | [Guide] | [Date] |
| Documentation | [Owner] | [Location] | [Guide] | [Date] |

### Closure checklist

- [ ] Deliverables formally accepted and QA/release evidence complete.
- [ ] README and operating guidance current.
- [ ] Data retention/deletion obligations completed.
- [ ] Licences and attribution confirmed.
- [ ] Risks and limitations recorded.
- [ ] Demonstration and lessons learned documented.
- [ ] Contributors accurately credited and approved repository transfer/archive complete.

### Contribution record

| Contributor | Actual role | Verified work | Evidence link | Verified by |
| --- | --- | --- | --- | --- |
| [Name] | [Role] | [Specific contribution] | [Permitted link] | [Reviewer] |

**Do not imply a contributor led an entire project because they completed a task or joined the team.**

## 14. Approval and sign-off

The named authorised approvers confirm they reviewed the project charter, understand their responsibilities and approve delivery **only within agreed scope and controls**.

| Role | Name | Decision | Signature / approved record | Date |
| --- | --- | --- | --- | --- |
| Project Sponsor | [Name] | Approve / Reject | [Record] | [Date] |
| Mettelo Labs Lead | [Name] | Approve / Reject | [Record] | [Date] |
| Project Lead | [Name] | Accept role | [Record] | [Date] |
| Technical / QA Approver | [Name] | Approve controls | [Record] | [Date] |
| Data / Privacy Approver | [Name] | Approve data use | [Record] | [Date] |

**Conditions of approval:** [Actions required before delivery or specific release gate.]  
**Status:** [ ] Approved · [ ] Approved with conditions · [ ] Returned for revision · [ ] Rejected.

The blank table does not authorise any project. Store formal signatures only in an approved access-controlled location.

## 15. Weekly updates and retrospective

The source's final appendix supplied short weekly progress and retrospective templates. For usability they are maintained as **separate companion templates**, instead of duplicated inside this already long charter.

- [Weekly Project Update](weekly-update-template.md) — genuine progress, risks, decisions and support.
- [Retrospective & Lessons Learned](retrospective-template.md) — value, blockers, improvements, unresolved work and future lessons.

---

## Privacy and source record

**Original:** *Mettelo Project Charter & Delivery Framework*, 16-page Word template, version 1.0. This edition rebuilds the original 15 content/appendix sections as real Markdown headings and tables, including source RACI and release responsibilities. It replaces the previously unreadable aligned-text dumps while retaining source provenance in Git history. The added plain-English instructions and fictional transport example are editorial explanations rather than new signed Mettelo policy.

**Status:** Enhanced source-informed template; final review and actual Mettelo governance sign-off on the reformatted edition remain pending. Do not upload filled private charters to this resource library. Maintain appropriate version-controlled approval documentation.

**Prepared for Mettelo Labs · Built for What's Next.**

### Find your way around

[← Project documentation](README.md) · [Start Here](../../START_HERE.md) · [Resource directory](../../RESOURCE_INDEX.md) · [🏠 Home](../../README.md)
