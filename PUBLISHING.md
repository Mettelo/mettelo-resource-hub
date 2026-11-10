# Mettelo Resource Hub — Private Repository and Public Publishing Controls

**Administrative operating guide · Updated 10 November 2026**

The master repository is `Mettelo/mettelo-resource-hub`. It is intended to remain **private** while Mettelo publishes an approved set of reader-facing resources on a separate website. This document does not change GitHub account settings by itself.

## 1. Confirm actual repository protection

| Setting | Recommended value | Where to configure |
| --- | --- | --- |
| Visibility | **Private** | Repository → Settings → General → Danger Zone (only if change needed) |
| Allow forking | **Off**, if permitted by organisation policy | Repository → Settings → General → Features |
| Organisation private forking | **Disabled** | Organisation → Settings → Member privileges → Repository forking |
| Repository permissions | **Least privilege**; editors only as needed, remove unused external collaborators | Repository → Settings → Collaborators and teams |
| Default branch | `main`; protect via PR review and prevent force-push/deletion | Repository → Settings → Rules → Rulesets, or Branches → branch protection |
| Required approvals | At least **one** independent approval for normal content changes, adjusted for actual team size | Branch ruleset / protection |
| Require code-owner review | Consider after real owner/team has been configured | Branch protection and `.github/CODEOWNERS` |
| Secrets | Never committed; rotate any exposed credential | Secret scanning/security review and repository audit |
| Website publishing token | Restricted to approved read-only access on source, short-lived where possible | Deployment platform/GitHub integration settings |

**Important:** No GitHub setting can reliably prevent an authorised reader from downloading/copying accessible content. Disabling forks removes GitHub's built-in fork operation but **does not disable `git clone`**, screenshots or copying.

## 2. Apply these settings manually (administrator)

1. Open https://github.com/Mettelo/mettelo-resource-hub/settings.
2. Confirm **Private** repository visibility.
3. Under **General → Features**, untick **Allow forking** if it is displayed and enabled.
4. In Mettelo **Organisation settings → Member privileges → Repository forking**, ensure private forks are not permitted. This affects all organisation private repositories; coordinate if other teams intentionally require forks.
5. Review **Collaborators and teams**. Remove unused access only after confirming who owns legitimate work.
6. Create a `main` branch ruleset: pull request before merging; at least one approval; block force pushes and branch deletion; add actual CI checks only after workflows exist.
7. Review existing repository forks and collaborator permissions separately: a change to future forking **does not necessarily erase copies already made**.
8. Confirm actual settings in GitHub after saving; mark each control complete only when verified.

Sources: [GitHub repository forking policy](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository) · [Organisation forking policy](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) · [Protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

## 3. Website publication architecture

```text
PRIVATE: Mettelo/mettelo-resource-hub
     |  review and approve only publishable resources
     v
BUILD / CONTENT EXPORT (server-side, access-controlled)
     |  strip restricted metadata, drafts and sensitive files
     v
PUBLIC: mettelo.com/resources
     |  readers use a friendly navigation website
     v
copyright, legal notices, resource links, updates
```

**Do not** make the master repository public to gain a website. Don't put a GitHub access token in JavaScript or client-delivered HTML. A website that displays an entire guide is still exposing that text to viewers; copy/paste cannot be made impossible. For additional restriction use member login and authorisation on the website, while recognising that authorised users can still copy what they see.

### First release requirements

- Choose hosting/domain, and confirm Mettelo owns and controls the domain.
- Decide public versus authenticated member access.
- Publish approved resources only; maintain route-based, understandable navigation.
- Apply Mettelo logo/branding, link original Mettelo page, copyright/reuse terms, corrections mechanism, privacy notice if collecting analytics/member data.
- Put source repository links and administrator controls **outside public navigation**.
- Test mobile/desktop readability; verify external links and current immigration rules before release.
- Remove personal data, protected employer information, secrets, private application documents and internal operational notes from publishable outputs.
- Set a review cadence and designate a maintainer who can update or withdraw outdated resources.

## 4. Publication status

| Action | Status |
| --- | --- |
| Private source repository | Confirmed private in connected repository metadata (10 November 2026) |
| Copyright and reader terms | Text files added; review legal ownership and permitted exceptions |
| Security/publishing controls | Documented, **not evidence that GitHub setting toggles were changed** |
| Disable private forking | **Requires verification/change in GitHub Settings** |
| Branch ruleset and access audit | **Requires verification/change in GitHub Settings** |
| `mettelo.com/resources` hosting | **Not yet provisioned or published** |
| Public resource selection and legal-content review | Required before making private material accessible |

[← Resource Hub](README.md) · [Security Policy](SECURITY.md) · [Copyright](COPYRIGHT.md)
