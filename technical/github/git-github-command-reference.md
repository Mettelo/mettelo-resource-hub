# Git and GitHub Command Reference

[← GitHub resources](README.md) · [← Resource Hub](../../README.md)

**Mettelo Resource Hub — source-based Markdown edition**

> **Editorial status: Draft — source text migrated.** This is a page-by-page transfer from the original user-supplied 11-page PDF, not an independently verified or fully typeset guide. The extracted source may contain flattened tables, word wrapping and PDF text-order artefacts. Source-specific suggestions, grade scores, Git command examples and application criteria must be checked against the appropriate current guidance or software manual before use.

## Page navigation

- [Page 1](#page-1)
- [Page 2](#page-2)
- [Page 3](#page-3)
- [Page 4](#page-4)
- [Page 5](#page-5)
- [Page 6](#page-6)
- [Page 7](#page-7)
- [Page 8](#page-8)
- [Page 9](#page-9)
- [Page 10](#page-10)
- [Page 11](#page-11)

<a id="page-1"></a>

## Page 1

Git & GitHub Command Reference
 A second-screen lookup sheet. Commands first; descriptions short. Covers Git, GitHub CLI (gh),
 collaboration, reviews and recovery.


  NOTE Run git commands inside a repository unless marked otherwise. Commands marked DANGER can discard or
  rewrite work. Examples use a POSIX-style terminal; quoting can vary by shell.

 START HERE | Placeholder key + instant finder
   COMMAND / SYNTAX                                                    WHAT IT DOES


   <repo-url> / <owner>/<repo>                                         Repository HTTPS/SSH URL / GitHub owner and
                                                                       repository name.

   <branch> / <file> / <sha>                                           Your branch name / relative file path / commit
                                                                       identifier. Omit angle brackets when running.

   git status -sb                                                      First check: short status, branch, tracking information.

   git diff / git diff --staged                                        Inspect unstaged / staged changes before committing.

   git log --oneline --graph --decorate -12                            See recent history and branch relationships.

   git switch -c feature/<task>                                        Create and switch to a task branch.

   git add <file> && git commit -m "Message"                           Stage a specific file and record a commit.

   git push -u origin HEAD                                             Publish current branch and set upstream.

   gh pr create --fill                                                 Open a GitHub pull request using commit-derived
                                                                       defaults.

   git fetch origin && git status -sb                                  Refresh remote information; inspect before
                                                                       integration.

Command reference • Replace placeholders • Check status before destructive actions                                                1

[↑ Pages](#page-navigation)

---

<a id="page-2"></a>

## Page 2

01 | Help, setup and identity
   COMMAND / SYNTAX                                                    WHAT IT DOES


   git --version / gh --version                                        Verify installed versions.

   git help <command> / git <command> -h                               Full reference / concise command help.

   git config --global user.name "Your Name"                           Name recorded on commits.

   git config --global user.email "you@example.com"                    Email recorded on commits; choose a verified or
                                                                       privacy email.

   git config --global init.defaultBranch main                         Default initial branch name for new repositories.

   git config --global core.editor "code --wait"                       Choose editor if VS Code CLI is available.

   git config --list --show-origin                                     Show effective settings and their source files.

   git config --local user.email "work@example.com"                    Override identity only in the current repository.

   gh auth login / gh auth status                                      Sign in to GitHub CLI / inspect authenticated account.

   gh auth setup-git                                                   Configure Git credential handling through gh where
                                                                       supported.

 02 | Create, clone and connect
   COMMAND / SYNTAX                                                    WHAT IT DOES


   git init -b main                                                    Start repository in current folder with main as initial
                                                                       branch.

   git clone <repo-url>                                                Copy repository and history to your computer.

   git clone <repo-url> <folder>                                       Clone into a chosen local directory.

   git clone --branch <branch> <repo-url>                              Clone and check out a named branch.

   git remote -v                                                       List remote names and fetch/push URLs.

   git remote add origin <repo-url>                                    Attach a new remote named origin.

   git remote set-url origin <repo-url>                                Update origin URL.

   git remote add upstream <original-repo-url>                         Add original repository when working from a fork.

   git remote show origin                                              Inspect remote tracking/default branch details.

   gh repo create <name> --private --clone                             Create private GitHub repository and clone it.

   gh repo clone <owner>/<repo>                                        Clone using GitHub CLI.

   gh repo view --web / gh repo fork --clone                           Open current repository in browser / fork and clone.

Command reference • Replace placeholders • Check status before destructive actions                                               2

[↑ Pages](#page-navigation)

---

<a id="page-3"></a>

## Page 3

03 | Inspect changes and history
   COMMAND / SYNTAX                                                    WHAT IT DOES


   git status / git status --short                                     Full / compact working-tree state.

   git diff -- <file>                                                  Show unstaged edits in one file.

   git diff --staged                                                   Show content prepared for next commit.

   git diff main...HEAD                                                Changes on current branch since merge base with
                                                                       main.

   git diff <sha1> <sha2> -- <file>                                    Compare a file across two commits.

   git show <sha> / git show --stat <sha>                              Inspect commit patch / summary.

   git log --oneline --all --graph --decorate                          Compact history across all local refs.

   git log --follow -- <file>                                          History of a path, following simple renames.

   git blame -L 10,25 -- <file>                                        Find commit attribution for lines 10–25.

   git ls-files / git ls-files --others                                List tracked files / untracked files not ignored.
   --exclude-standard


   git check-ignore -v <file>                                          Show which ignore rule matches a path.

 04 | Stage and commit
   COMMAND / SYNTAX                                                    WHAT IT DOES


   git add <file> / git add <folder>/                                  Stage a file / folder.

   git add -p                                                          Interactively stage selected hunks.

   git add -A                                                          Stage all changes including removals; review first.

   git diff --cached --check                                           Detect whitespace errors in staged changes.

   git restore --staged <file>                                         Unstage a file while retaining working changes.

   git commit -m "Explain the change"                                  Create commit with clear imperative message.

   git commit -am "Explain tracked edits"                              Stage and commit tracked-file changes only; excludes
                                                                       new files.

   git commit --amend                                                  Replace most recent commit; avoid after others have
                                                                       based work on it.

   git commit --amend --no-edit                                        Add staged changes to latest commit, retain its
                                                                       message.

   git commit --allow-empty -m "Trigger checks"                        Create intentionally empty commit where useful.

Command reference • Replace placeholders • Check status before destructive actions                                            3

[↑ Pages](#page-navigation)

---

<a id="page-4"></a>

## Page 4

05 | Branches and switching
   COMMAND / SYNTAX                                                    WHAT IT DOES


   git branch / git branch -a -vv                                      Local / local and remote-tracking branches with
                                                                       details.

   git switch -c feature/<task>                                        Create task branch from current commit.

   git switch main / git switch <branch>                               Switch to an existing local branch.

   git switch -                                                        Return to previously checked-out branch.

   git switch -c <branch> --track origin/<branch>                      Create local tracking branch from remote.

   git branch -m <new-name>                                            Rename current local branch.

   git branch -d <branch>                                              Delete merged local branch (safety check).

   git branch -D <branch> [DANGER]                                     Force-delete local branch even if unmerged.

   git branch --set-upstream-to=origin/<branch>                        Set upstream tracking for current branch.

   git branch --show-current                                           Print current branch name.

 06 | Fetch, pull and push
   COMMAND / SYNTAX                                                    WHAT IT DOES


   git fetch origin / git fetch --all --prune                          Download refs / update all remotes and prune stale
                                                                       tracking refs.

   git pull --ff-only                                                  Update current branch only if fast-forward is possible.

   git pull --rebase                                                   Fetch, then rebase local commits onto upstream; use
                                                                       with team agreement.

   git push -u origin HEAD                                             Push current branch and configure upstream.

   git push / git push origin <branch>                                 Push upstream / explicit branch.

   git push origin --delete <branch>                                   Delete remote branch (check permissions and PR
                                                                       state).

   git push --force-with-lease [CAUTION]                               Safeguarded forced update: still rewrites remote
                                                                       history; coordinate first.

   git fetch origin && git switch main && git pull                     Refresh local main safely.
   --ff-only


   git status -sb / git branch -vv                                     Diagnose ahead/behind and upstream configuration.

Command reference • Replace placeholders • Check status before destructive actions                                               4

[↑ Pages](#page-navigation)

---

<a id="page-5"></a>

## Page 5

07 | Stash temporary work
   COMMAND / SYNTAX                                                    WHAT IT DOES


   git stash push -m "WIP description"                                 Store tracked working and staged changes.

   git stash push -u -m "WIP + new files"                              Also include untracked, nonignored files.

   git stash list / git stash show -p stash@{0}                        List stashes / inspect most recent patch.

   git stash apply stash@{0}                                           Reapply without removing saved stash.

   git stash pop                                                       Reapply latest; drop it if application succeeds.

   git stash branch <branch> stash@{0}                                 Create branch at stash base and apply work.

   git stash drop stash@{0} / git stash clear [CAUTION]                Delete one / all saved stashes.

 08 | Merge, rebase and cherry-pick
   COMMAND / SYNTAX                                                    WHAT IT DOES


   git merge <branch>                                                  Merge named branch into checked-out branch.

   git merge --no-ff <branch>                                          Force merge commit even if fast-forward possible.

   git merge --abort                                                   Abandon in-progress merge and restore pre-merge
                                                                       state where possible.

   git rebase main                                                     Replay current branch commits on local main; update
                                                                       main first.

   git rebase -i HEAD~3                                                Interactively edit last 3 commits; rewrites history.

   git rebase --continue / --abort / --skip                            Continue after resolution / cancel / skip a commit
                                                                       (careful).

   git cherry-pick <sha>                                               Apply one existing commit on current branch.

   git cherry-pick --continue / --abort                                Finish conflict resolution / cancel cherry-pick.

   git merge-base main HEAD                                            Find common ancestor for comparison.

 09 | Resolve conflicts in the terminal
 Conflict workflow

  git status → Open conflicted files → Edit markers → git add <resolved-file> → git merge --continue OR git rebase
  --continue


   COMMAND / SYNTAX                                                    WHAT IT DOES


   git diff --name-only --diff-filter=U                                List files with unresolved merge conflicts.

   git status                                                          See which operation is in progress and what remains
                                                                       unresolved.

Command reference • Replace placeholders • Check status before destructive actions                                            5

[↑ Pages](#page-navigation)

---

<a id="page-6"></a>

## Page 6

COMMAND / SYNTAX                                                    WHAT IT DOES


   git ls-files -u                                                     Inspect unmerged index stages.

   git checkout --ours -- <file> [CAUTION]                             Select ours for merge context; rebase meaning can
                                                                       surprise. Review result.

   git checkout --theirs -- <file> [CAUTION]                           Select theirs for merge context; review and validate
                                                                       result.

   git add <file>                                                      Mark conflict as resolved after editing and validation.

   git merge --abort / git rebase --abort                              Cancel the respective integration operation.


  NOTE Conflict markers are <<<<<<<, ======= and >>>>>>>. Remove them, combine the correct content,
  then validate. During rebase, ours/theirs perspective differs from a normal merge.

 10 | Undo, restore and recover
   COMMAND / SYNTAX                                                    WHAT IT DOES


   git restore <file> [DANGER]                                         Discard unstaged edits in file; uncommitted work may
                                                                       be lost.

   git restore --source=<sha> -- <file>                                Restore a file from a selected commit into working
                                                                       tree.

   git restore --staged <file>                                         Unstage while preserving working edits.

   git revert <sha>                                                    Create new commit reversing an existing commit;
                                                                       good for shared history.

   git reset --soft HEAD~1                                             Move HEAD back one commit, keep all changes
                                                                       staged.

   git reset --mixed HEAD~1                                            Move HEAD back one commit, keep changes unstaged
                                                                       (default).

   git reset --hard <sha> [DANGER]                                     Discard tracked working/index changes and move
                                                                       branch pointer.

   git reflog / git reflog show <branch>                               Find previous reference positions, useful for recovery.

   git switch -c recovery <sha>                                        Preserve an accessible commit on new recovery
                                                                       branch.

   git clean -nd / git clean -fd [DANGER]                              PREVIEW / delete untracked nonignored files and dirs.

   git rm --cached <file>                                              Stop tracking file while keeping local copy; does not
                                                                       erase its history.

   git mv <old> <new> / git rm <file>                                  Rename/move tracked file / stage its removal.


  NOTE A secret already committed remains in history even after git rm --cached. Revoke/rotate it immediately and
  follow your organisation’s approved history-cleanup process.

Command reference • Replace placeholders • Check status before destructive actions                                               6

[↑ Pages](#page-navigation)

---

<a id="page-7"></a>

## Page 7

11 | Ignore rules, tags and advanced repository operations
   COMMAND / SYNTAX                                                    WHAT IT DOES


   git check-ignore -v <path>                                          Explain which .gitignore pattern applies.

   git add -f <ignored-file> [CAUTION]                                 Explicitly override ignore rules; never use to add
                                                                       secrets.

   git tag / git tag -n                                                List version labels / annotations.

   git tag -a v1.0.0 -m "Release 1.0.0"                                Create annotated release tag.

   git push origin v1.0.0 / git push origin --tags                     Push selected / all local tags.

   git worktree add ../review-worktree <branch>                        Check out another branch in another directory.

   git worktree list / git worktree remove <path>                      Inspect / remove worktree.

   git bisect start; git bisect bad; git bisect good                   Start binary search for first faulty commit; mark
   <sha>                                                               bad/current and known good.

   git bisect good / git bisect bad / git bisect reset                 Mark tested commits then return to normal.

   git submodule update --init --recursive                             Initialize and update nested repositories recorded as
                                                                       submodules.

   git gc / git fsck --full                                            Maintenance / inspect object integrity.

   git archive --format=zip HEAD -o snapshot.zip                       Export committed tree without .git metadata.

 12 | GitHub CLI: account, repositories and forks
   COMMAND / SYNTAX                                                    WHAT IT DOES


   gh auth login / gh auth status / gh auth logout                     Sign in / check / sign out.

   gh repo view / gh repo view --web                                   View repository details / open browser.

   gh repo list <owner> --limit 30                                     List repositories for owner.

   gh repo create <name> --public --clone                              Create public repository and clone.

   gh repo fork <owner>/<repo> --clone                                 Fork repository and clone fork.

   gh repo sync <owner>/<fork> --source                                Sync fork from upstream repository where supported.
   <owner>/<upstream>


   gh browse / gh browse <path>                                        Open current repo / file in browser.

   gh api repos/<owner>/<repo>                                         Query GitHub REST endpoint (requires access).

   gh alias list / gh extension list                                   Inspect configured CLI aliases / extensions.

Command reference • Replace placeholders • Check status before destructive actions                                             7

[↑ Pages](#page-navigation)

---

<a id="page-8"></a>

## Page 8

13 | GitHub issues and pull requests
   COMMAND / SYNTAX                                                    WHAT IT DOES


   gh issue list / gh issue status                                     List issues / issues relevant to you.

   gh issue create --title "Title" --body "Details"                    Open issue with title and description.

   gh issue view <number> --web                                        Open issue in browser.

   gh issue comment <number> --body "Update"                           Post a progress comment.

   gh issue close <number> / gh issue reopen <number>                  Close / reopen issue.

   gh pr create --fill / gh pr create --draft --fill                   Create normal / draft PR from current branch.

   gh pr list / gh pr status                                           List PRs / overview of your PRs.

   gh pr view <number> --web                                           Open PR in browser.

   gh pr checkout <number>                                             Check out PR locally for review.

   gh pr diff <number> / gh pr checks <number>                         Inspect patch / check results.

   gh pr review <number> --approve                                     Approve when reviewer and repository policy permit.

   gh pr review <number> --request-changes -b "Please                  Request changes with explanation.
   revise"


   gh pr review <number> --comment -b "Review notes"                   Leave nonblocking review comment.

   gh pr merge <number> --squash --delete-branch                       Squash-merge and delete branch, subject to repository
                                                                       rules.

   gh pr merge <number> --merge / --rebase                             Merge commit / rebase merge if allowed.

   gh pr ready <number> / gh pr close <number>                         Mark draft ready / close without merging.

Command reference • Replace placeholders • Check status before destructive actions                                           8

[↑ Pages](#page-navigation)

---

<a id="page-9"></a>

## Page 9

14 | Checks, workflows and releases
   COMMAND / SYNTAX                                                    WHAT IT DOES


   gh run list / gh run view <run-id>                                  List GitHub Actions runs / inspect a run.

   gh run view <run-id> --log-failed                                   Show failed-step logs.

   gh run watch <run-id>                                               Follow run until completion.

   gh workflow list / gh workflow view <workflow>                      List / inspect Actions workflows.

   gh workflow run <workflow> --ref <branch>                           Manually dispatch a workflow that supports
                                                                       workflow_dispatch.

   gh release list / gh release view <tag>                             List / inspect GitHub releases.

   gh release create v1.0.0 --generate-notes                           Create a GitHub release for a tag with generated
                                                                       notes.

   gh secret list / gh variable list                                   Show secret names / Actions variable names, not
                                                                       secret values.

   gh secret set <NAME>                                                Securely input and store a GitHub Actions secret.

 15 | Quick-copy collaboration workflows
 A. Join an existing repository and publish a branch

   COMMAND / SYNTAX                                                    WHAT IT DOES


   gh auth status && gh repo clone <owner>/<repo>                      Check login and clone.

   cd <repo> && git switch -c feature/<task>                           Enter repository and create task branch.

   git status && git diff                                              Check edits.

   git add <file> && git diff --staged                                 Stage just intended files and inspect.

   git commit -m "Describe the change"                                 Record meaningful commit.

   git push -u origin HEAD && gh pr create --fill                      Publish and open PR.


 B. Review and integrate

   COMMAND / SYNTAX                                                    WHAT IT DOES


   gh pr view <number> && gh pr diff <number>                          Read purpose and examine proposed edits.

   gh pr checkout <number> && gh pr checks <number>                    Check out changes and inspect automated checks.

   gh pr review <number> --comment -b "Review notes"                   Provide actionable feedback.

   gh pr merge <number> --squash --delete-branch                       Merge only after required review/checks pass.

   git switch main && git pull --ff-only                               Update local approved branch.

Command reference • Replace placeholders • Check status before destructive actions                                         9

[↑ Pages](#page-navigation)

---

<a id="page-10"></a>

## Page 10

C. Keep your feature branch current (choose one team policy)

   COMMAND / SYNTAX                                                    WHAT IT DOES


   git fetch origin && git merge origin/main                           Merge latest remote main into current branch.

   git fetch origin && git rebase origin/main                          Alternative: replay local feature commits on updated
                                                                       main; avoid rewriting shared branches.

   git push / git push --force-with-lease [CAUTION]                    Normal push after merge / safeguarded force update
                                                                       after approved rebase.


 D. Fork contribution

   COMMAND / SYNTAX                                                    WHAT IT DOES


   gh repo fork <owner>/<repo> --clone                                 Fork and clone; add upstream if not present.

   git remote -v && git remote add upstream                            Inspect remotes; add upstream only if missing.
   <original-url>


   git fetch upstream && git switch main && git merge                  Bring local main up to date when fast-forward is
   --ff-only upstream/main                                             possible.

   git push origin main                                                Sync own fork if permitted.

   git switch -c feature/<task> && git push -u origin                  Create contribution branch and publish it.
   HEAD


   gh pr create --repo <owner>/<original-repo> --base                  Open cross-fork PR; head owner/branch must exist.
   main --head <fork-owner>:<branch>

Command reference • Replace placeholders • Check status before destructive actions                                            10

[↑ Pages](#page-navigation)

---

<a id="page-11"></a>

## Page 11

16 | Fast troubleshooting lookup
   COMMAND / SYNTAX                                                    WHAT IT DOES


   Not a git repository → git status; pwd; ls -a                       Check current folder contains .git or navigate to clone.

   Nothing to commit → git status --short                              Check whether file changed, is ignored or already
                                                                       committed.

   Push rejected (non-fast-forward) → git fetch origin                 Inspect new remote commits; integrate safely before
                                                                       pushing.

   No upstream branch → git push -u origin HEAD                        Publish and set tracking relationship.

   Authentication failed → gh auth status; gh auth login               Check credentials and required access.

   Merge conflict → git status; git diff --name-only                   Find unresolved files; resolve, stage and continue.
   --diff-filter=U


   Wrong commit on shared branch → git revert <sha>                    Revert without rewriting shared history.

   Lost commit → git reflog                                            Find prior HEAD/branch positions; create recovery
                                                                       branch.

   File ignored unexpectedly → git check-ignore -v                     Locate matching ignore rule.
   <file>


   gh command unavailable → gh --version                               Install or update GitHub CLI independently of Git.

 Safety / conventions
 Prefer specific git add <file> over blanket staging when multiple files changed. Always inspect git status
 and git diff --staged before commit. Use git revert on shared history; discuss any rebase or forced push with
 collaborators. The remote server may enforce branch protections and require reviews/checks. Shell
 examples use placeholders rather than executable repository URLs.

 Official references: https://git-scm.com/docs | https://cli.github.com/manual/ | https://docs.github.com/

Command reference • Replace placeholders • Check status before destructive actions                                            11

[↑ Pages](#page-navigation)

---

## Publication note

This Markdown version preserves the original pages and their wording. It has **not yet passed** a layout-sensitive table, technical-command, legal or employment-policy audit. It should be reviewed against the original before its status is changed to Published.

**Prepared by Johnson Taiwo for Mettelo.**
