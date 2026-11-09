# Mettelo Project Charter & Delivery Framework

**Controlled project-planning and governance template · Version 1.0 · Built for What's Next**

[← Project documentation](README.md) · [← Technical resources](../README.md) · [← Resource Hub](../../README.md)

> **Source status:** Template states that it is mandatory for Mettelo Labs projects. **No delivery should begin until the charter is reviewed and approved by the required Mettelo authority.** This GitHub file is a *blank template*, not an approved project charter. Approvals, ownership, dates and measurable targets must be completed by the actual team.
>
> **Document migration status:** Full source content transferred from the 16-page approved template, including appendices. Several complex Word tables remain as historical source text below; the most important project, RACI, QA and approval matrices are now reproduced as readable Markdown above. A final source-fidelity/layout review is still needed. Do not treat blank signature lines as formal approvals.

## Project identity

| Field | Enter |
| --- | --- |
| Project name | [PROJECT NAME] |
| Project ID | [ML-YYYY-###] |
| Project classification | [PUBLIC / INTERNAL / CONFIDENTIAL] |
| Project sponsor | [NAME / ORGANISATION] |
| Project lead | [NAME] |
| Template version | 1.0 |
| Approval date | [DD MONTH YYYY] |

## How to use this template

1. Copy this template to your approved project repository or documentation workspace.
2. Replace every square-bracket placeholder with the project's verified information.
3. Remove instructional text **only after** completing the associated section.
4. Keep a version history and record material changes through change control.
5. Obtain the required sign-off **before** beginning controlled delivery; approval does not remove ongoing review obligations.
6. If a section includes a flattened table, transfer the labelled column headers into an appropriate Markdown table or approved document editor before signing off.

## Quick-start registers — properly formatted Markdown

The original Word source contains several tables whose text was flattened during the initial import. The editable registers below restore the **column structure** of key fields so project teams can use the template. The complete 16-page source transfer remains further down this file. **These are blank starting tables, not completed or approved charter content.**

### 1. Objectives register

| ID | Objective | Measure | Target | Owner |
| --- | --- | --- | --- | --- |
| OBJ-01 | [Specific objective] | [Metric] | [Target] | [Name] |
| OBJ-02 | [Specific objective] | [Metric] | [Target] | [Name] |
| OBJ-03 | [Specific objective] | [Metric] | [Target] | [Name] |

### 2. Deliverables and acceptance register

| ID | Deliverable | Description | Owner | Due | Acceptance criteria |
| --- | --- | --- | --- | --- | --- |
| DEL-01 | [Dashboard / model / API / dataset] | [Description] | [Name] | [Date] | [Objective acceptance test] |
| DEL-02 | Documentation | README, method, limitations and operating guidance | [Name] | [Date] | Complete and independently understandable |
| DEL-03 | Showcase | Demo, presentation or recorded walkthrough | [Name] | [Date] | Approved by Project Lead and QA |

### 3. Core accountability register

| Role | Named person | Accountability |
| --- | --- | --- |
| Project Sponsor | [Name] | Owns problem, strategic alignment and final acceptance |
| Project Lead | [Name] | Owns scope, delivery, coordination and reporting |
| Technical Lead | [Name] | Owns architecture, technical quality and review |
| Data / Privacy Lead | [Name] | Owns data suitability, access and privacy controls |
| QA Reviewer | [Name] | Provides independent quality and release assurance |
| Documentation Lead | [Name] | Owns project documentation and contributor evidence |

### 4. Proposed technology stack

| Layer | Tool / technology | Purpose | Owner | Constraint / licence |
| --- | --- | --- | --- | --- |
| Source / ingestion | [Tool] | [Purpose] | [Name] | [Constraint] |
| Storage | [Tool] | [Purpose] | [Name] | [Constraint] |
| Transformation | [Tool] | [Purpose] | [Name] | [Constraint] |
| Analytics / ML | [Tool] | [Purpose] | [Name] | [Constraint] |
| Presentation / API | [Tool] | [Purpose] | [Name] | [Constraint] |
| Version control | GitHub | Issues, branches, reviews and releases | [Name] | Repository visibility agreed |

### 5. Data inventory and permission review

| Dataset / source | Owner | Access / URL | Licence / terms | Refresh | Sensitivity | Quality status |
| --- | --- | --- | --- | --- | --- | --- |
| [Dataset] | [Owner] | [Location] | [Licence] | [Frequency] | [Public / Internal / Personal] | [Status] |
| [Dataset] | [Owner] | [Location] | [Licence] | [Frequency] | [Public / Internal / Personal] | [Status] |

### 6. Project risks

| ID | Risk | Likelihood | Impact | Mitigation | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- |
| R-01 | [Risk event and consequence] | [L / M / H] | [L / M / H] | [Mitigation] | [Name] | Open |
| R-02 | [Risk event and consequence] | [L / M / H] | [L / M / H] | [Mitigation] | [Name] | Open |
| R-03 | [Risk event and consequence] | [L / M / H] | [L / M / H] | [Mitigation] | [Name] | Open |

### 7. Source RACI responsibilities — readable version

The roles and assignments below reproduce the original charter's RACI matrix (with the page's line wraps repaired), rather than imposing a new project policy. Confirm named people and any conflicts before approval.

| Activity | Sponsor | Project Lead | Technical Lead | Contributors | QA |
| --- | --- | --- | --- | --- | --- |
| Approve charter | **A** | **R** | C | I | C |
| Confirm architecture | I | **A** | **R** | C | C |
| Deliver work packages | I | **A** | C | **R** | C |
| Approve scope change | **A** | **R** | C | I | C |
| Release final outputs | **A** | **R** | C | I | **R** |
| Close project | **A** | **R** | C | I | C |

**R** Responsible (does the work); **A** Accountable (owns decision); **C** Consulted; **I** Informed. The original release row assigns *R* to both Project Lead and QA; **this is inherited from the source**, not a new approval. Confirm whether responsibilities and separation of assurance duties remain appropriate for your actual project.

### 8. Source quality-control matrix — readable version

| Area | Required control | Evidence location | Approver |
| --- | --- | --- | --- |
| Data | Validation rules, reconciliation and anomaly checks | [Link] | [Name] |
| Code | Peer review, linting and suitable tests | [Link] | [Name] |
| Analytics / model | Method validation, benchmark and limitations | [Link] | [Name] |
| Dashboard / UX | Functional, visual and accessibility review | [Link] | [Name] |
| Documentation | README, setup, method, usage and limitations | [Link] | [Name] |
| Security / privacy | Access, secrets, data and release review | [Link] | [Name] |

**Release gate sequence from the charter:** (1) approve scope and data readiness → (2) demonstrate a working increment → (3) complete technical and data QA → (4) pass privacy, security and licensing → (5) obtain sponsor/authorised acceptance. Store real evidence for each; a green status is not equivalent to an approval.

### 9. Source sign-off register — readable version

| Role | Named approver | Decision | Signature / approval record | Date |
| --- | --- | --- | --- | --- |
| Project Sponsor | [Name] | Approve / Reject | [Signed record] | [Date] |
| Mettelo Labs Lead | [Name] | Approve / Reject | [Signed record] | [Date] |
| Project Lead | [Name] | Accept role | [Signed record] | [Date] |
| Technical / QA Approver | [Name] | Approve controls | [Signed record] | [Date] |
| Data / Privacy Approver | [Name] | Approve data use | [Signed record] | [Date] |

**Project status:** [ ] Approved · [ ] Approved with conditions · [ ] Returned for revision · [ ] Rejected. Record any conditions of approval separately and **do not treat unfilled placeholders as sign-off**.


**Before proceeding:** Complete the main source sections on scope, governance, milestones, architecture, quality, risk, release approval and handover. These quick-start registers **do not** replace formal charter sign-off. Avoid adding sensitive project details to a public repository.

---

## Contents

- [1. Document control](#section-1)
- [2. Executive summary](#section-2)
- [3. Problem definition and objectives](#section-3)
- [4. Scope, deliverables and acceptance](#section-4)
- [5. Governance, team and RACI](#section-5)
- [6. Timeline, milestones and delivery cadence](#section-6)
- [7. Technology, architecture and environments](#section-7)
- [8. Data sources, licensing and privacy](#section-8)
- [9. Quality, testing and release assurance](#section-9)
- [10. Risks, assumptions, issues and dependencies](#section-10)
- [11. Communication, documentation and change control](#section-11)
- [12. Success measures, benefits and evaluation](#section-12)
- [13. Handover, closure and contribution evidence](#section-13)
- [14. Approval and sign-off](#section-14)
- [15. Weekly project update and retrospective](#section-15)

---

<a id="section-1"></a>

## 1. Document control

*Source document page 2 of 16.*

DOCUMENT CONTROL
Governance and Approval
Document Owner Mettelo Labs
Template Version 1.0
Prepared By [NAME / ROLE]
Reviewed By [NAME / ROLE]
Approved By [NAME / ROLE]
Effective Date [DD MONTH YYYY]
Next Review Date [DD MONTH YYYY]
Version history
Version Date Author Change summary Approval
0.1 [DATE] [NAME] Initial draft Pending
0.2 [DATE] [NAME] Review updates Pending
1.0 [DATE] [NAME] Approved baseline Approved
Approval statement
Approval confirms that the project has a sufficiently clear problem, scope, team, data basis, delivery plan 
and risk position to begin controlled delivery. Approval does not remove the requirement for ongoing 
review, change control or release assurance.
How to use this template
- Replace all text in square brackets.
- Delete guidance text only after the relevant section is complete.
- Use concise, evidence-based language and measurable outcomes.
- Record material changes through version control and the change log.
- Store the approved Charter in the agreed project repository and documentation workspace.

[↑ Contents](#contents)

---

<a id="section-2"></a>

## 2. Executive summary

*Source document page 3 of 16.*

01
Executive Summary
A one-page view of the project and the decision required.
Project name [Clear, outcome-led project title]
Project ID [ML-YYYY-###]
Problem owner / sponsor [Name and organisation]
Project Lead [Name]
Proposed start and end [Dates]
Delivery model [Volunteer / Partner / Sponsored / Internal]
Project status [Proposed / Approved / Active / On Hold / Closed]
Project overview
[Summarise the project in 100–150 words. State the real-world problem, target users, proposed solution, 
principal deliverables and intended value.]
Decision requested
[State precisely what approval, resource, access or decision is required.]
Expected impact
- Primary outcome: [measurable change or capability created]
- Beneficiaries: [who will use or benefit from the work]
- Evidence of success: [how value will be measured]
- Public value / portfolio value: [how outputs create reusable proof]

[↑ Contents](#contents)

---

<a id="section-3"></a>

## 3. Problem definition and objectives

*Source document page 4 of 16.*

02
Problem Definition & Objectives
Current situation
[Describe the existing process, challenge or unmet need. Use evidence where available and avoid 
describing a solution as the problem.]
Why the problem matters
[Explain operational, social, financial, technical or user consequences. Quantify scale where credible data 
exists.]
Target users and stakeholders
Stakeholder / user Need or concern Influence Engagement approach
[Group] [Need] High / Medium / Low [Method]
[Group] [Need] High / Medium / Low [Method]
[Group] [Need] High / Medium / Low [Method]
Objectives
ID Objective Measure Target Owner
OBJ-01 [Specific objective] [Metric] [Target] [Name]
OBJ-02 [Specific objective] [Metric] [Target] [Name]
OBJ-03 [Specific objective] [Metric] [Target] [Name]
Out of scope
- [Explicit exclusion]
- [Explicit exclusion]
- [Explicit exclusion]

[↑ Contents](#contents)

---

<a id="section-4"></a>

## 4. Scope, deliverables and acceptance

*Source document page 5 of 16.*

03
Scope, Deliverables & Acceptance
In scope
- [Data, user group, geography, process or product included]
- [Included capability]
- [Included documentation or training]
Deliverables register
ID Deliverable Description Owner Due Acceptance 
criteria
DEL-01
[Dashboard / 
model / API / 
dataset]
[Description] [Name] [Date] [Objective 
acceptance test]
DEL-02 Documentation
README, method,
limitations and 
operating 
guidance
[Name] [Date]
Complete and 
independently 
understandable
DEL-03 Showcase
Demo, 
presentation or 
recorded 
walkthrough
[Name] [Date]
Approved by 
Project Lead and 
QA
Definition of done
- Deliverable meets documented acceptance criteria.
- Required code, data and documentation reviews are complete.
- Known limitations and unresolved risks are recorded.
- Privacy, security, licensing and accessibility checks are complete.
- Contributor credits and ownership information are accurate.
- Release or handover is approved by the authorised role.

[↑ Contents](#contents)

---

<a id="section-5"></a>

## 5. Governance, team and RACI

*Source document page 6 of 16.*

04
Governance, Team & RACI
Core roles
Role Named person Accountability
Project Sponsor [Name] Owns problem, strategic alignment 
and final acceptance
Project Lead [Name] Owns scope, delivery, coordination 
and reporting
Technical Lead [Name] Owns architecture, technical quality 
and review
Data / Privacy Lead [Name] Owns data suitability, access and 
privacy controls
QA Reviewer [Name] Provides independent quality and 
release assurance
Documentation Lead [Name] Owns project documentation and 
contributor evidence
RACI matrix
Activity Sponsor Project Lead Technical Lead Contributors QA
Approve Charter A R C I C
Confirm 
architecture I A R C C
Deliver work 
packages I A C R C
Approve scope 
change A R C I C
Release final 
outputs
A R C I R
Close project A R C I C
R = Responsible, A = Accountable, C = Consulted, I = Informed.

[↑ Contents](#contents)

---

<a id="section-6"></a>

## 6. Timeline, milestones and delivery cadence

*Source document page 7 of 16.*

05
Timeline, Milestones & Delivery Cadence
Delivery phases
Phase Purpose Start End Exit evidence
Discovery
Validate problem, 
users, data and 
feasibility
[Date] [Date] Approved problem 
and evidence
Planning
Confirm scope, 
architecture, team 
and backlog
[Date] [Date] Approved Charter and
sprint plan
Build Develop and review 
agreed outputs [Date] [Date] Working increment 
and test evidence
Assurance
Validate quality, 
privacy, security and 
usability
[Date] [Date] Release approval
Showcase Demonstrate outputs 
and learning [Date] [Date] Showcase completed
Closure
Handover, archive 
and recognise 
contributions
[Date] [Date] Closure report 
approved
Milestone plan
Milestone Target date Owner Dependency Status
Charter approved [Date] [Name] [Dependency] Not started
First working 
increment [Date] [Name] [Dependency] Not started
QA complete [Date] [Name] [Dependency] Not started
Final showcase [Date] [Name] [Dependency] Not started
Team cadence
- Weekly delivery check-in: [day/time/channel]
- Asynchronous status update: [format and deadline]
- Technical review: [cadence]
- Sponsor checkpoint: [cadence]
- Retrospective: [timing]

[↑ Contents](#contents)

---

<a id="section-7"></a>

## 7. Technology, architecture and environments

*Source document page 8 of 16.*

06
Technology, Architecture & Environments
Proposed technology stack
Layer Tool / technology Purpose Owner Constraint / licence
Source / ingestion [Tool] [Purpose] [Name] [Constraint]
Storage [Tool] [Purpose] [Name] [Constraint]
Transformation [Tool] [Purpose] [Name] [Constraint]
Analytics / ML [Tool] [Purpose] [Name] [Constraint]
Presentation / API [Tool] [Purpose] [Name] [Constraint]
Version control GitHub Issues, branches, 
reviews and releases [Name] Repository visibility 
agreed
Architecture summary
[Describe the end-to-end flow from source to user output. Include environments, interfaces, 
authentication, refresh or deployment approach, and significant design decisions.]
Environment controls
- Development, test and release environments are identified.
- Secrets and credentials are never committed to repositories.
- Dependencies are pinned or documented for reproducibility.
- Deployment and rollback responsibilities are assigned.
- Resource and cost constraints are documented.

[↑ Contents](#contents)

---

<a id="section-8"></a>

## 8. Data sources, licensing and privacy

*Source document page 9 of 16.*

07
Data Sources, Licensing & Privacy
Data inventory
Dataset / source Owner Access / URL Licence / terms Refresh Sensitivity Quality status
[Dataset] [Owner] [Location] [Licence] [Frequency] Public / Internal /
Personal [Status]
[Dataset] [Owner] [Location] [Licence] [Frequency] Public / Internal /
Personal [Status]
[Dataset] [Owner] [Location] [Licence] [Frequency] Public / Internal /
Personal [Status]
Data quality assessment
Dimension Assessment question Finding Action
Completeness Are required fields and time
periods present? [Finding] [Action]
Accuracy Can key values be 
validated? [Finding] [Action]
Consistency Are formats and definitions 
stable? [Finding] [Action]
Timeliness Is data current enough for 
intended use? [Finding] [Action]
Bias / representation Who or what may be 
missing? [Finding] [Action]
Privacy and ethical assessment
- Lawful basis or permission: [state basis where personal data is involved]
- Data minimisation: [explain fields retained and excluded]
- Retention and deletion: [state period and method]
- Ethical risks and affected groups: [summary]
- Required DPIA or additional review: [Yes / No / To be confirmed]

[↑ Contents](#contents)

---

<a id="section-9"></a>

## 9. Quality, testing and release assurance

*Source document page 10 of 16.*

08
Quality, Testing & Release Assurance
Quality plan
Area Required control Evidence Approver
Data
Validation rules, 
reconciliation and anomaly 
checks
[Link / location] [Name]
Code Peer review, linting and 
appropriate tests [Link / location] [Name]
Analytics / model Method validation, 
benchmark and limitations [Link / location] [Name]
Dashboard / UX Functional, visual and 
accessibility review [Link / location] [Name]
Documentation README, setup, method, 
usage and limitations [Link / location] [Name]
Security / privacy Access, secrets, data and 
release review [Link / location] [Name]
Release gates
- Gate 1 - Scope and data readiness approved.
- Gate 2 - Working increment demonstrated.
- Gate 3 - Technical and data QA passed.
- Gate 4 - Privacy, security and licensing checks passed.
- Gate 5 - Sponsor or authorised owner accepts final output.
Known limitations
[Record limitations that affect interpretation, use, scale, fairness, reliability or maintenance.]

[↑ Contents](#contents)

---

<a id="section-10"></a>

## 10. Risks, assumptions, issues and dependencies

*Source document page 11 of 16.*

09
Risks, Assumptions, Issues & Dependencies
Risk register
ID Risk Likelihood Impact Mitigation Owner Status
R-01 [Risk event and 
consequence] L / M / H L / M / H [Mitigation] [Name] Open
R-02 [Risk event and 
consequence] L / M / H L / M / H [Mitigation] [Name] Open
R-03 [Risk event and 
consequence] L / M / H L / M / H [Mitigation] [Name] Open
Assumptions and dependencies
ID Type Statement Validation / owner Due
A-01 Assumption [Assumption] [Action / Name] [Date]
D-01 Dependency [External 
dependency] [Action / Name] [Date]
C-01 Constraint
[Time, cost, access or 
technology 
constraint]
[Action / Name] [Date]
Escalation thresholds
- A critical data, security or safeguarding concern arises.
- A milestone is forecast to slip materially.
- A change affects objectives, public claims, data use or partner commitments.
- A conflict cannot be resolved within the project team.
- The project no longer appears feasible, lawful, ethical or valuable.

[↑ Contents](#contents)

---

<a id="section-11"></a>

## 11. Communication, documentation and change control

*Source document page 12 of 16.*

10
Communication, Documentation & Change 
Control
Communication plan
Audience Information Channel Frequency Owner
Project team Tasks, blockers, 
decisions GitHub / Discord Weekly / ongoing Project Lead
Sponsor Progress, risks, 
decisions Email / meeting [Cadence] Project Lead
Mettelo community Approved updates 
and showcase Community channels At milestones Community Lead
Public users Release, method and 
limitations GitHub / website At release Project Lead
Single sources of truth
- GitHub: code, issues, pull requests, release history and technical documentation.
- Approved documentation workspace: Charter, decisions, meeting notes and operating guidance.
- Email: formal approvals, partner commitments and material decisions.
- Community channels: discussion only; important decisions must be recorded in the formal source.
Change control
Change ID Requested 
change
Reason / 
benefit Impact Decision Approver Date
CHG-01 [Change] [Reason] Scope / time / 
risk / data Pending [Name] [Date]
CHG-02 [Change] [Reason] Scope / time / 
risk / data Pending [Name] [Date]
Material changes to scope, data use, timeline, partner commitments or public release require 
formal approval and an updated Charter version.

[↑ Contents](#contents)

---

<a id="section-12"></a>

## 12. Success measures, benefits and evaluation

*Source document page 13 of 16.*

11
Success Measures, Benefits & Evaluation
Success metrics
Metric Baseline Target Method / source Review point Owner
[Outcome metric] [Value] [Target] [Method] [Date] [Name]
[Quality metric] [Value] [Target] [Method] [Date] [Name]
[Adoption / use 
metric] [Value] [Target] [Method] [Date] [Name]
[Contributor 
metric] [Value] [Target] [Method] [Date] [Name]
Benefits statement
[Describe expected direct, indirect and learning benefits. Distinguish evidence-based expectations from 
assumptions.]
Evaluation approach
- Measure baseline before intervention where feasible.
- Define who will collect each measure and when.
- Avoid using GitHub stars or social impressions as the only evidence of value.
- Record unintended effects, limitations and lessons.
- Complete a post-project review at [30 / 60 / 90] days where continued use is expected.

[↑ Contents](#contents)

---

<a id="section-13"></a>

## 13. Handover, closure and contribution evidence

*Source document page 14 of 16.*

12
Handover, Closure & Contribution Evidence
Handover plan
Asset / responsibility Receiving owner Location Training / guidance Completion
Repository [Owner] [URL] [Guidance] [Date]
Data / pipeline [Owner] [Location] [Guidance] [Date]
Dashboard / product [Owner] [Location] [Guidance] [Date]
Documentation [Owner] [Location] [Guidance] [Date]
Closure checklist
- [ ] Deliverables accepted
- [ ] QA and release evidence complete
- [ ] README and operating guidance current
- [ ] Data retention / deletion actions complete
- [ ] Licences and attribution confirmed
- [ ] Known issues and limitations recorded
- [ ] Final demonstration delivered
- [ ] Lessons learned documented
- [ ] Contributors credited accurately
- [ ] Repository and files archived or transferred
Contribution record
Contributor Role Verified 
contribution Evidence / link Verified by
[Name] [Role] [Contribution] [Link] [Name]
[Name] [Role] [Contribution] [Link] [Name]
[Name] [Role] [Contribution] [Link] [Name]

[↑ Contents](#contents)

---

<a id="section-14"></a>

## 14. Approval and sign-off

*Source document page 15 of 16.*

13
Approval & Sign-off
By signing below, the named approvers confirm that they have reviewed this Charter, understand the 
responsibilities assigned to them and approve the project to proceed within the stated scope and controls.
Role Name Decision Signature Date
Project Sponsor [Name] Approve / Reject ________________ [Date]
Mettelo Labs Lead [Name] Approve / Reject ________________ [Date]
Project Lead [Name] Accept role ________________ [Date]
Technical / QA 
Approver
[Name] Approve controls ________________ [Date]
Data / Privacy 
Approver
[Name] Approve data use ________________ [Date]
Conditions of approval
[List any actions that must be completed before delivery begins or before a specific release gate.]
Final approval statement
Project status after review: Approved Approved with conditions Returned for revision ☐ ☐ ☐ ☐
Rejected
METTELO LABS
Real problems. Real teams. Real proof.

[↑ Contents](#contents)

---

<a id="section-15"></a>

## 15. Weekly project update and retrospective

*Source document page 16 of 16.*

APPENDIX A
Weekly Project Update
Project [Name / ID]
Reporting period [Dates]
Overall status Green / Amber / Red
Project Lead [Name]
Completed this period
- [Outcome completed]
- [Outcome completed]
Next period
- [Priority]
- [Priority]
Decisions, risks and support required
Type Description Owner / decision required Due
Risk / issue / decision [Description] [Name] [Date]
Support [Description] [Name] [Date]
Appendix B - Retrospective and Lessons Learned
Prompt Team response
What created the most value? [Response]
What slowed or blocked delivery? [Response]
What should we repeat? [Response]
What should we change? [Response]
What remains unresolved? [Response]
What should future projects know? [Response]

[↑ Contents](#contents)

---

## Publication and privacy notes

The original template contains project-classification options **PUBLIC / INTERNAL / CONFIDENTIAL**. Never publish a completed confidential or internal charter, partner records, private data URLs, identities or sign-off information into a public GitHub repository. Approval evidence belongs in Mettelo's authorised workspace.

**Source:** *Mettelo_Project_Charter_and_Delivery_Framework_Final.docx*, 16 pages, Version 1.0. The original version was preserved, including its unfilled approval placeholders and appendix examples. Some tables need editorial conversion from Word layout into conventional Markdown tables.

**Prepared for Mettelo Labs.**

---

### Find your way around

[← Project documentation](README.md) · [⭐ Start here](../../START_HERE.md) · [All resources](../../RESOURCE_INDEX.md) · [🏠 Home](../../README.md)
