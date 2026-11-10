# Mettelo GitHub Handbook: Real Data Projects, Zero to Advanced

**Five-page practical workshop guide**  
[← GitHub resources](README.md) · [← Technical resources](../README.md) · [← Resource Hub](../../README.md)

> **Guide status:** Practical learning guidance. Verify commands and repository permissions in your own environment; never expose credentials or restricted data.

## Before your first GitHub session — understand what success looks like

This handbook is useful whether you work in analytics, data engineering, research or software. GitHub is more than a place to upload a finished notebook: a credible contribution shows **a defined problem, your change, quality checks, independent review where available and a traceable result**.

### Four mistakes new contributors commonly make

| Problem | Why it causes difficulty | Practical improvement |
| --- | --- | --- |
| Editing `main` directly | Team may not review changes before they become shared | Create a feature branch from the project's actual base |
| Committing only a notebook screenshot | Another person may not reproduce the project or understand its source | Commit permitted source code, environment/setup, README and a reproducible test |
| Copying a tutorial and calling it professional work | It shows learning, not an independent solution | Solve a new defined problem and document your exact personal contribution |
| Sharing access keys or raw customer files | Can expose protected systems or people | Use synthetic/public licensed data, `.gitignore`, secure secrets storage and review before push |

### Practical starter task — 30 to 60 minutes

**Task:** Document how a simple report calculates a monthly count using a public or synthetic dataset.

1. **Issue:** Create an issue called “Document the monthly active-record definition”. Define whether records are unique per month and how null identifiers are handled.
2. **Branch:** Start a feature branch. Name it clearly (for example `docs/monthly-count-definition`).
3. **Change:** Add `docs/monthly-count.md` with the metric definition, source fields, treatment of duplicates, an example with three synthetic rows and known limitations.
4. **Test:** Ask someone else to read your definition and work out the expected result. If they interpret it differently, revise the wording.
5. **PR:** Explain the need, what changed, how it was reviewed and where the definition should be used.
6. **Review:** Accept or discuss a review comment and update the document.
7. **Record:** Keep the merged PR link and a truthful account of your role in the work.

**Example definition:** “Count distinct non-null `customer_id` values for each reporting month; a customer with multiple transactions is counted once per month. The source is the authorised transaction extract. Refund handling is outside this measure.” This is **illustrative**; a real project must confirm the intended grain and business definition.

**What to put on a CV afterwards:** Describe the true work—e.g. a reviewed definition and documented validation approach. Do not claim significant operational savings or production deployment unless real evidence supports it.

### Where to learn more without paying

[GitHub's official Get Started](https://docs.github.com/en/get-started) · [Pro Git (free book)](https://git-scm.com/book/en/v2) · [GitHub Issues](https://docs.github.com/en/issues) · [GitHub Pull Requests](https://docs.github.com/en/pull-requests) · [Mettelo command reference](git-github-command-reference.md).

---

## Contents

1. [Start here: your first GitHub project](#1-start-here-your-first-github-project)
2. [Follow along: issue to approved merge](#2-follow-along-issue-to-approved-merge)
3. [Data projects: Power BI, SQL, Python and notebooks](#3-data-projects-power-bi-sql-python-and-notebooks)
4. [Team quality: review, conflicts and recovery](#4-team-quality-review-conflicts-and-recovery)
5. [Grow your skills and demonstrate contribution](#5-grow-your-skills-and-demonstrate-contribution)

## 1. Start here: your first GitHub project

**Goal:** Create an account, understand the core concepts and save your first change. No coding knowledge is required.

| Term | Meaning |
| --- | --- |
| Git | The version-control tool that records changes on your computer |
| GitHub | Online home for repositories, discussion and review |
| Repository | A project folder containing files and history |
| Commit | A named checkpoint of a change |
| Branch | A separate line of work that protects the approved main version |
| Pull request (PR) | A request to review and merge a branch |

**Workflow:** Issue → Branch → Change → Commit → Push → Pull request → Review → Merge.

### Path A: contribute through the browser

1. Create and verify your GitHub account at [github.com](https://github.com), then enable two-factor authentication.
2. Open the facilitator's workshop repository and select its `README.md`.
3. Edit the file with the pencil control and add a line under the participant section.
4. Commit the change using a new branch and start a pull request, if offered.
5. Request review and obtain approval before merging.

### Path B: install and configure Git

Install Git from [git-scm.com/downloads](https://git-scm.com/downloads), then use Git Bash, a terminal or VS Code Terminal.

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

**First-day success test:** Explain repository, branch, commit and PR; open a README; submit a small documentation change.

## 2. Follow along: issue to approved merge

**Demo:** Add a Python check for missing order IDs to a shared analytics project. Replace the placeholder organisation and repository with your own.

### Choose a task and clone the repository

Create a GitHub issue named **Check missing order IDs** with acceptance criteria, then clone:

```bash
git clone https://github.com/ORG/customer-analytics.git
cd customer-analytics
git status
```

### Create a branch

```bash
git switch main
git pull origin main
git switch -c validation/missing-order-ids
```

### Edit, inspect and stage

In `src/validate.py`, the example check is `df["order_id"].isna().sum()`. Review the actual requirements and how failure handling should work.

```bash
git status
git diff
git add src/validate.py
git diff --staged
```

### Commit and push

```bash
git commit -m "Add missing order ID validation"
git push -u origin validation/missing-order-ids
```

### Open and review the pull request

Explain **what changed**, **why it matters**, **how it was tested**, and **what reviewers should check**. The handbook's illustration uses approved test data and requests a review of null logic, failure behaviour and documentation. A reviewer comments, requests changes or approves. Address feedback with further commits on the *same branch*; merge only after approval and required checks.

After merge:

```bash
git switch main
git pull origin main
```

**Remember:** Check → Branch → Change → Diff → Add → Commit → Push → PR → Review → Merge → Pull.

## 3. Data projects: Power BI, SQL, Python and notebooks

GitHub stores approved project files and collaboration history. **It is not a replacement for secure data storage or a database.**

### Example project structure

```text
customer-analytics/
├── README.md                 # purpose, setup, owners and outcomes
├── .gitignore                # exclude local and private files
├── requirements.txt          # Python dependencies
├── sql/
│   └── revenue_checks.sql    # queries and transformation logic
├── src/
│   └── validate.py           # reusable validation
├── notebooks/
│   └── exploration.ipynb     # exploratory analysis
├── powerbi/
│   └── CustomerReport/       # PBIP where supported
├── docs/
│   ├── data_dictionary.md    # definitions and grain
│   └── methodology.md        # assumptions and limitations
└── tests/
    └── test_validation.py    # repeatable checks
```

### What can be committed?

**Approved:** SQL, Python, documentation, tests, small synthetic datasets, reviewed notebook outputs and text-friendly Power BI project files.

**Not by default:** Real customer records, regulated extracts, passwords, tokens, real `.env` files, huge CSV exports, local caches and generated outputs.

### Starter .gitignore

```gitignore
.env
.venv/
__pycache__/
.ipynb_checkpoints/
data/raw/
data/processed/
*.log
.DS_Store
```

**Important:** `.gitignore` does not remove anything already committed. If a secret is exposed, report it, revoke or rotate it and follow the incident process.

### Tool-specific practice

**Power BI:** PBIX files are largely binary and difficult to review line by line. Prefer source-control-friendly PBIP where supported. Document KPI definitions and coordinate binary edits.

**SQL:** Document source tables, grain, join keys, date/refund logic and reconciliation queries. Review changes in row counts.

**Notebooks:** Keep clear cell order, reproducible environments, fixed seeds where relevant and no sensitive outputs. Extract reusable functions into `src/`.

**Data governance:** Document source, owner, permission, classification, retention, definitions, access limitations and validation evidence.

## 4. Team quality: review, conflicts and recovery

Review whether another contributor can **trust, reproduce and explain the work**.

| Review area | Key checks |
| --- | --- |
| Business logic | Correct metric definitions, grain and dates |
| Data quality | Duplicates, missing values, joins and unexpected changes |
| Reproducibility | Documented dependencies, parameters and safe samples |
| Governance | No sensitive data, secrets or excessive permissions |
| Power BI / SQL | Validated measures, filters, relationships and totals |
| Documentation | README, dictionary, method and limitations are updated |

### Resolve a merge conflict

When two people edit the same part of a file, Git stops and requires a resolution. Discuss the desired change; do not simply delete another person's work.

```bash
git switch validation/missing-order-ids
git fetch origin
git merge origin/main
git status
# Resolve the conflicting file after agreeing the final contents.
git add src/validate.py
git commit
git push
```

### Safe recovery reference

| Situation | Command | Caution |
| --- | --- | --- |
| Discard local unstaged edits | `git restore path/to/file` | **Destructive:** loses unstaged edits |
| Unstage a file | `git restore --staged path/to/file` | Keeps working-file edits |
| Reverse shared commit | `git revert <commit-id>` | Adds a new reversing commit |
| Park temporary edits | `git stash push -m "work in progress"` | Restore later with `git stash pop` |

Inspect recent history with `git log --oneline -5`, `git show <commit-id>` and `git branch -a`.

**Team rule:** Never force-push or rewrite shared `main` history casually. Check with the maintainer and use required reviews and branch protection.

## 5. Grow your skills and demonstrate contribution

These are *next-level* tasks after reliably completing a branch-to-PR cycle.

### Inspect changes

```bash
git remote -v
git fetch origin
git diff main...your-branch
```

### Make a small change before review

```bash
git switch your-branch
git add <file>
git commit -m "Address review feedback"
```

### Tag an approved release

```bash
git tag -a v1.0 -m "First approved release"
git push origin v1.0
```

For large approved assets, consider Git LFS after confirming privacy, quotas and storage policy.

Mature projects should adopt branch protection, meaningful pull-request checks, appropriate GitHub Actions automation, issue links and data-science reproducibility checks. For data science, document baselines, splits, leakage, metrics, seeds, limitations and approved data access. For Power BI, coordinate binary file editing and use PBIP where suitable.

### Contributor evidence

| Before work | During work |
| --- | --- |
| Understand the brief, criteria, README and access rules | Use a task branch, clear commits, documented assumptions and safe data |

| At review | At delivery |
| --- | --- |
| Submit PR describing changes, reasons, checks, limitations and review focus | Merge approved work, document outputs and link issues/PRs to actual contribution evidence |

### 20-minute independent challenge

1. Open a demo repository and explain the purpose of `README`, `src`, `docs` and `tests`.
2. Create an issue titled **Document revenue definition** with two acceptance criteria.
3. On a new branch, add `docs/revenue_definition.md` explaining grain, refunds and ownership.
4. Commit **Document monthly net revenue definition** and open a PR with validation and limitations.
5. Invite another participant to review, address feedback and merge after approval.

You are ready when you can explain **what** you changed, **why** it matters, **how** you checked it and **who** reviewed it.

### Further references

- [GitHub Get Started](https://docs.github.com/get-started)
- [Pro Git book](https://git-scm.com/book)
- [GitHub pull requests](https://docs.github.com/pull-requests)
- Microsoft Learn — Power BI Projects (PBIP)

**Notation:** Replace placeholders such as `<file>` and `<commit-id>`. Comments beginning `#` in command examples are explanations rather than required commands.

---

**Mettelo — Where contribution becomes opportunity.**

---

### Find your way around

[← GitHub resources](README.md) · [⭐ Start here](../../START_HERE.md) · [All resources](../../RESOURCE_INDEX.md) · [🏠 Home](../../README.md)
