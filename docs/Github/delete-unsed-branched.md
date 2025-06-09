# 🧹 How to Delete GitHub Unused Branches

Cleaning up unused branches in GitHub is important for keeping your repository organized and reducing clutter. Below is a **step-by-step beginner-friendly guide** for deleting both local and remote branches.

---

## ✅ Step-by-Step Instructions

| Step | Command                                | Purpose                                                              |
| ---- | -------------------------------------- | -------------------------------------------------------------------- |
| 1️⃣  | `git branch`                           | View all local branches                                              |
| 2️⃣  | `git checkout main`                    | Switch to main branch (must not be on the branch you want to delete) |
| 3️⃣  | `git branch -d branch-name`            | Delete a local branch (only if already merged)                       |
| 4️⃣  | `git branch -D branch-name`            | Force delete a local branch (even if not merged)                     |
| 5️⃣  | `git push origin --delete branch-name` | Delete a remote GitHub branch                                        |
| 6️⃣  | `git fetch -p`                         | Prune deleted remote branches from your local list                   |

---

## 📌 Notes

* Never delete a branch directly from remote unless you're sure it’s not needed.
* `-d` vs `-D`: `-d` is safe (only deletes merged), `-D` is forceful.
* Always switch to a different branch (e.g., `main`) before deleting another branch.

---

## 🔍 Example

Assume you're working on branch `feature/cleanup-ui` and it's no longer needed.

```bash
git checkout main               # Switch to main

# Delete local branch safely
git branch -d feature/cleanup-ui

# OR force delete if unmerged
git branch -D feature/cleanup-ui

# Delete remote branch
git push origin --delete feature/cleanup-ui

# Clean up local tracking
git fetch -p
```

---

## ✅ Best Practices

* Name branches meaningfully (`feature/login-api`, `fix/null-checks`).
* Delete merged branches regularly.
* Document closed branches in PRs if needed.

---

## 🔗 Related

* [Git Branch Docs](https://git-scm.com/docs/git-branch)
* [GitHub CLI Reference](https://cli.github.com/manual/)

---

Created by **Atul Gupta**
📁 Repo: [Easy Bytes – Tech Notes for Atul](https://github.com/your-username/easy-bytes-tech-notes)
