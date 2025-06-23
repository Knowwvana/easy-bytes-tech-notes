# 🌟 Git Branch Merge & Cleanup – EasyBytes DevOps Guide 🚀

Welcome to **EasyBytes Tech**, your trusted source for dev automation, identity security, and cloud engineering insights!  
This guide walks you through the process of merging one Git branch into another and safely deleting the source branch locally and from GitHub — a common cleanup task after completing a feature or hotfix branch.

---

## 📌 Use Case

You are working on **branch A** and want to:

1. Merge code from **branch B** into A
2. Delete **branch B** locally and remotely (GitHub)

This is often done to finalize a feature into the main line and clean up unused branches.

---

## 🛠️ Step-by-Step Commands

| Step | Action | Command |
|------|--------|---------|
| 1 | Switch to branch A | `git checkout A` |
| 2 | Merge branch B into A | `git merge B` |
| 3 | Resolve merge conflicts (if needed) | `git add .`<br>`git commit -m "Resolved merge conflicts"` |
| 4 | Delete branch B locally (safe) | `git branch -d B` |
|   | Force delete branch B locally | `git branch -D B` |
| 5 | Delete branch B remotely (GitHub) | `git push origin --delete B` |
| 6 | Push updated branch A to GitHub | `git push origin A` |

---

## ✅ Tips & Notes

- Use `-d` only if the branch is fully merged.
- Use `-D` with caution — it deletes even unmerged branches.
- Always push merged changes to GitHub after cleanup.
- Collaborate with your team before deleting shared branches.

---

## 📄 Document Info

**Author**: Atul Gupta  
**Title**: Git Branch Merge and Cleanup – Practical Guide  
**Created**: June 2025  
**Use Case**: Feature completion and branch hygiene  
**Tooling**: Git, GitHub CLI, GitHub Desktop  

> *“Clean branches reflect clean releases. Keep your mainline stable and your history clear.”*

**References**:  
- [Git Merge Documentation](https://git-scm.com/docs/git-merge)  
- [Git Branch Cleanup Guide](https://www.atlassian.com/git/tutorials/using-branches/git-branch)  
- [GitHub CLI](https://cli.github.com/)

---

## 📘 Document Footer – EasyBytes Tech by Atul Gupta

This guide is part of the **EasyBytes Tech Knowledge Series**, meticulously crafted by **Atul Gupta**, an Identity and DevOps Architect with extensive experience in secure development pipelines. At **EasyBytes Tech**, we demystify complex tools and workflows to help professionals deliver high-quality code faster.

🔗 **Connect & Explore**  
- 🌐 [EasyBytes Tech Website](https://github.com/Trustiify)  
- 📬 [Email Atul](mailto:atul0085@gmail.com)  
- 💼 [LinkedIn](https://linkedin.com/in/atul-gupta-28339431/)  

🛠️ **Expertise Areas**:  
- DevOps Automation: GitHub Actions, Terraform, PowerShell  
- Identity & Access Management: SailPoint, Okta, Azure AD  
- Secure Coding & Branching Strategies  
- Full-Stack Development: .NET 9, Blazor, React, PostgreSQL  

> *“Empowering developers with clean code practices, one solution at a time.”*

---
