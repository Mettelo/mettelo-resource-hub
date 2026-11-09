# Git & GitHub Command Reference — Practical, Safe Edition

**Mettelo technical quick reference · Reconstructed Markdown · 9 November 2026**

[🏠 Home](../../README.md) · [GitHub guides](README.md) · [Practical Handbook](github-handbook.md) · [Contribution Standards](contribution-guide.md)

> **Enhanced technical draft.** This replaces an 11-page PDF command table flattened into poorly readable text. The original command categories (setup, inspection, commits, branches, remotes, stash, integration, recovery, GitHub CLI and troubleshooting) are retained, but commands now have copyable shell blocks, intended effects and risk notes. Source extraction remains recoverable via Git history. Test destructive operations in a disposable repository; do not assume commands are safe on protected production branches.

## Start here — placeholders and safety

- Replace `<branch>`, `<file>`, `<commit>`, `<owner>/<repo>` and `<repo-url>` with **actual values**; do **not** type angle brackets as literal filenames.
- Run ordinary Git commands **inside a local Git repository**; verify with `git status`.
- Check changes before staging and pushing; protected branches often require reviews and checks.
- **Danger:** `git reset --hard`, `git clean -fd`, `git restore <file>` (when uncommitted edits matter), rebases of shared history and force pushes can lose work. We deliberately do **not** provide an unreviewed one-line reset/force-push recipe.

## Contents

1. [First six commands](#1-the-six-commands-to-learn-first)
2. [Setup and repository connection](#2-setup-and-repository-connection)
3. [Inspect, stage and commit](#3-inspect-stage-and-commit)
4. [Branch, remote and synchronisation](#4-branch-remote-and-synchronisation)
5. [Issues, pull requests and review](#5-github-issues-pull-requests-and-review)
6. [Integrate, merge and resolve conflicts](#6-integrate-merge-and-resolve-conflicts)
7. [Stash, tag and releases](#7-stash-tag-and-releases)
8. [Recover changes safely](#8-recover-changes-safely)
9. [Troubleshooting by symptom](#9-troubleshooting-by-symptom)
10. [Security, notebooks, large files](#10-security-notebooks-large-files)
11. [Copyable Mettelo workflow](#11-copyable-mettelo-contribution-workflow)

---

## 1. The six commands to learn first

| Command | Meaning in plain English | Typical time to use |
| --- | --- | --- |
| `git status -sb` | Shows branch, tracking and changed files | **Before and after** any change |
| `git diff` | Shows unstaged changes | Before staging |
| `git switch -c feature/my-task` | Creates and enters a work branch | At start of a task |
| `git add path/to/file` | Stages one specified file | When you have checked the change |
| `git commit -m "Explain the change"` | Records staged changes locally | After checking |
| `git push -u origin HEAD` | Publishes current branch | Before opening a PR |

A **commit** records local history; a **push** sends commits to the remote. A **pull request** proposes merging one branch into another after review. They are three different operations.

## 2. Setup and repository connection

### Confirm your tools and identity

```bash
git --version
gh --version
git config --global user.name "Your Name"
git config --global user.email "your-verified-email@example.com"
git config --global --list
```

`gh` is the **optional GitHub CLI**, not Git itself. Replace the example identity with your real details and respect professional privacy. Some organisations use different identity or sign-off requirements.

### Clone an existing repository

```bash
git clone <repo-url>
cd <folder-created-by-clone>
git remote -v
git status -sb
```

**What happens:** The remote repository is copied locally; `origin` normally names the remote. Do not paste credentials into repository URLs or commit them.

### Start an approved new repository locally

```bash
mkdir my-project
cd my-project
git init
git status -sb
```

Initialise a README, commit, then connect the remote GitHub repository following your organisation's approved process. Use `git remote add origin <repo-url>` **only when the remote exists and `origin` is not already configured**.

## 3. Inspect, stage and commit

```bash
git status -sb
git diff
git diff --staged
git log --oneline --graph --decorate -12
```

**Difference:** `git diff` shows local working changes not yet staged; `git diff --staged` shows what would be included in the next commit.

```bash
git add path/to/file
git diff --staged
git commit -m "Add validation for missing source records"
```

Prefer `git add path/to/file` to indiscriminate staging when working on sensitive data. The commit should explain **what changed and why**. Use `git diff --check` to spot whitespace problems.

### Edit the last local unshared commit

`git commit --amend` changes commit history. Use it only when you understand whether the commit has been shared. **Do not amend already-reviewed/shared commits without agreement.**

## 4. Branch, remote and synchronisation

```bash
git branch -a
git switch -c feature/fix-source-checks
git status -sb
git remote -v
git fetch origin
```

`git fetch` downloads remote history **without automatically changing your working files**. `git pull` fetches and then integrates changes according to configuration; inspect your status and agree merge versus rebase policy before pulling.

To publish the current branch:

```bash
git push -u origin HEAD
```

To inspect remote changes against your branch:

```bash
git log --oneline --left-right HEAD...origin/main
git diff --stat HEAD..origin/main
```

**Note:** These examples assume `origin/main` exists. Verify the actual default branch and fetch first.

## 5. GitHub issues, pull requests and review

Optional GitHub CLI commands require authentication and repository access:

```bash
gh auth status
gh issue list
gh issue view <issue-number>
gh pr list
gh pr status
gh pr checks <pr-number>
```

Open a PR **after** pushing the branch:

```bash
gh pr create --base main --fill
```

`--fill` draws a title/body from commits; **review and edit the generated description** so it includes the problem, solution, validation and any privacy/licensing considerations. If the default branch is not `main`, replace it.

Review an actual PR:

```bash
gh pr view <pr-number>
gh pr diff <pr-number>
gh pr checks <pr-number>
```

### Pull request checklist

- [ ] Issue or task requirement identified.
- [ ] Change isolated to a relevant branch, with clear commits.
- [ ] Automated tests/checks passed **where configured** (do not claim a repository has CI unless it does).
- [ ] Manual checks documented where needed.
- [ ] No secrets, personal records, restricted datasets or unlicensed assets.
- [ ] Appropriate reviewer and approvals obtained before merge.

## 6. Integrate, merge and resolve conflicts

**Safest collaboration rule:** Decide as a team whether the repository uses merge or rebase before integrating shared work. Avoid rewriting history that others depend on.

Typical safe, non-destructive first actions:

```bash
git status -sb
git fetch origin
git log --oneline --graph --decorate --all -15
```

If your team uses merging, switch to the feature branch and merge the approved base:

```bash
git switch feature/fix-source-checks
git merge origin/main
```

If Git reports a conflict, open each affected file. Git marks conflict regions with `<<<<<<<`, `=======`, `>>>>>>>`. **Resolve the intended content carefully**, not by automatically choosing “ours” or “theirs”. Then:

```bash
git status
git add path/to/resolved-file
git commit
```

If the merge was initiated and still in progress but is not ready, `git merge --abort` **attempts** to return to the pre-merge state. Before using it, check status and preserve important uncommitted work.

## 7. Stash, tag and releases

A stash temporarily stores changes so you can switch context. **It is not a durable backup strategy.**

```bash
git stash push -m "Work in progress on validation"
git stash list
git stash show -p stash@{0}
```

On some shells `stash@{0}` needs quoting. Prefer `git stash apply` rather than `pop` until you've confirmed that the changes were restored correctly; `pop` also drops the stash when successful.

Create an **approved** annotated release tag only after team review:

```bash
git tag -a v1.0.0 -m "Approved initial release"
git push origin v1.0.0
```

Do not tag an unapproved draft as a production release.

## 8. Recover changes safely

| What went wrong? | Start by running | Safer next action |
| --- | --- | --- |
| You staged the wrong file | `git diff --staged` | `git restore --staged path/to/file` unstages it **without discarding the working edit** |
| A tracked file was deleted by mistake but not committed | `git status -sb` | After checking, `git restore path/to/file` restores it **and overwrites any uncommitted changes for that path** |
| Your last commit needs investigation | `git log --oneline -8` | Inspect before choosing revert or local amend |
| A bad commit was already pushed | `git log --oneline` | Prefer `git revert <commit>` to add an inverse commit while preserving shared history |
| You accidentally moved HEAD | `git reflog -15` | Record the desired commit ID and seek review before a reset |
| An unwanted untracked file exists | `git status --untracked-files=all` | Check sensitive content and **manually** remove only the intended file |
| You suspect credentials were committed | Pause and notify owner | **Rotate/revoke secrets immediately**; deleting from latest commit alone is insufficient |

**Use care:** `git restore path/to/file` is destructive to *unstaged edits* to that tracked file. `git reset --hard` can discard staged and unstaged work. `git clean -fd` deletes untracked files. Force-pushing can overwrite colleagues' history. These are intentionally not presented as routine quick-fix recipes.

[Git's authoritative restore reference](https://git-scm.com/docs/git-restore) · [Git user manual on recovering mistakes](https://git-scm.com/docs/user-manual).

## 9. Troubleshooting by symptom

| Symptom | Likely cause | First investigation |
| --- | --- | --- |
| “not a git repository” | You are outside a repository | `pwd` or current folder, then `git status` in correct clone |
| “nothing to commit” | No staged changes, or no work changes | `git status -sb`, `git diff`, `git diff --staged` |
| “permission denied / authentication failed” | Wrong remote URL, identity/SSO or repo permission | `git remote -v`, `gh auth status`, organisation access policy |
| “non-fast-forward rejected” | Remote changed | `git fetch origin`, inspect graph, integrate with team policy |
| Merge conflict | Same changes diverged | `git status`, inspect markers, agree correct version and tests |
| Notebook generates huge noisy diffs | Output/metadata changes | Clear safe outputs, use notebooks review conventions, never erase relevant reproducibility details |
| Git refuses large file | Hosting limits | Use approved data storage or Git LFS with licensing/privacy review |
| PR check failed | A configured validation task failed | Read actual logs and reproduce relevant test; do not ignore silently |

## 10. Security, notebooks, large files

**Before pushing, check:** credentials in `.env`, service-account JSON, API tokens, real customer tables, private notebooks and identifiable data. Use suitable `.gitignore` rules **before tracking** restricted files; ignoring a file later doesn't remove secrets already committed. Notify project owners and rotate exposed keys.

For data projects, keep README, requirements/environment, notebooks/code, testing approach, sample synthetic data and data-source permissions. Never upload entire operational datasets simply to make a portfolio look substantial.

**GitHub-specific best practice:** Review branch protections and contribution permissions with your organisation. No contributor should bypass tests or approvals purely to obtain contribution evidence.

## 11. Copyable Mettelo contribution workflow

```bash
# Start inside an authorised, already-cloned project repository
git status -sb
git fetch origin
git switch -c feature/describe-the-task

# Edit the specific files for the issue; run the project's real checks
git diff
git add path/to/changed-file
git diff --staged
git commit -m "Explain the concrete improvement"
git push -u origin HEAD

# Requires GitHub CLI authenticated and an appropriate default branch
gh pr create --fill
```

**Before using this recipe:** Check if `feature/describe-the-task` already exists, whether your starting branch is up to date, and the repo's actual base branch. Never run a literal placeholder path. An appropriate reviewer must inspect and approve before merge.

### Verified references and publication note

- [Git documentation](https://git-scm.com/docs).
- [Git restore](https://git-scm.com/docs/git-restore).
- [GitHub CLI PR creation](https://cli.github.com/manual/gh_pr_create).
- [GitHub CLI manual](https://cli.github.com/manual/).

**Editorial changes:** Rebuilt the original source's 16 command areas into semantic sections with proper code fences, operational explanations and risk distinctions. This is a source-informed **adaptation**, not a verbatim reproduction; original 11-page extraction can be retrieved through Git history. Individual commands have been checked against documentation; they have **not all been executed on a test repository**. Keep status as *enhanced technical draft* pending hands-on test.

### Find your way around

[← GitHub resources](README.md) · [Practical Handbook](github-handbook.md) · [Contribution Guide](contribution-guide.md) · [Start Here](../../START_HERE.md) · [Directory](../../RESOURCE_INDEX.md) · [🏠 Home](../../README.md)
