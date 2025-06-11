# 🚀 Test Remote Feature Branch Locally Before Merge (Git Workflow)

## 🧠 Use Case

You are currently on the `main` branch in your **local VS Code**.  
Your **developer has pushed a new branch named `iteration1` to GitHub**, but it **doesn't exist locally** on your machine yet.

You want to **test the code on `iteration1` locally before merging** it into `main`.

---

## ✅ Step-by-Step Git Command Reference

| Step | Git Command | Purpose / Description |
|------|-------------|------------------------|
| 1️⃣ | `git stash` *(if needed)* | Save local uncommitted changes on `main` (if any) to avoid losing work |
| 2️⃣ | `git fetch origin` | Fetch all latest branches (including `iteration1`) from the remote (`origin`) |
| 3️⃣ | `git checkout -b iteration1 origin/iteration1` | Create a local branch `iteration1` that tracks `origin/iteration1` and switch to it |
| 4️⃣ | `git branch` | Confirm you are now on the `iteration1` branch |
| 5️⃣ | *(Run/Build App)* | Test the code changes in the `iteration1` branch locally |
| 6️⃣ | `git checkout main` | Switch back to `main` after testing |
| 🔁 (Optional) | `git stash pop` | Restore your previous changes if you used `git stash` in step 1 |

---

## 🔄 What’s Happening Behind the Scenes?

- `git fetch origin` updates your local copy of all remote branches, but **doesn't check them out**.
- `git checkout -b iteration1 origin/iteration1` creates a local copy of the remote branch and switches to it.
- This allows you to **test or inspect the branch safely**, without affecting your `main`.

---

## 📝 Pro Tip

Use this workflow anytime a teammate pushes a new branch and you want to review or test it before integration.

---

📂 Part of: [Easy Bytes – Tech Notes for Atul](https://github.com/yourusername/easy-bytes-tech-notes)
