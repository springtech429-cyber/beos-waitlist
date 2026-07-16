# 🚫 Never Get "Not a Repository" Again — Git Setup Guide

## Why it keeps happening

There are **3 common reasons** `git push -u origin main` fails after creating a GitHub repo:

---

### Reason 1: Branch name mismatch (THE MOST COMMON)

GitHub creates new repos with the default branch called `main`.
But `git init` on your machine creates a branch called `master`.

So you push `master` to a repo expecting `main` → 💥 error.

**The fix — run this ONCE on your machine (global setting):**
```bash
git config --global init.defaultBranch main
```

Now every `git init` will use `main` instead of `master`. Forever.

**Verify it worked:**
```bash
git config --global init.defaultBranch
# Should output: main
```

---

### Reason 2: No remote added

You create a repo on GitHub but forget to link your local project to it.

**The fix — always run this after git init:**
```bash
git remote add origin https://github.com/YOUR-USERNAME/beos-waitlist.git
```

**Verify it worked:**
```bash
git remote -v
# Should show:
# origin  https://github.com/YOUR-USERNAME/beos-waitlist.git (fetch)
# origin  https://github.com/YOUR-USERNAME/beos-waitlist.git (push)
```

---

### Reason 3: GitHub repo initialized with README

If you check "Add a README" when creating the repo on GitHub, it creates
a commit on the remote. Your local repo also has a commit. They diverge → 💥

**The fix — do NOT check "Add a README" or ".gitignore" when creating the repo on GitHub.**
Create an EMPTY repository. Push your local code first.

If you already have a diverged repo, fix it with:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## ✅ The Bulletproof Checklist (every new project)

Run these commands IN ORDER, every single time:

```bash
# 1. Navigate to your project
cd /path/to/your-project

# 2. Initialize git (now uses 'main' if you set the global config)
git init

# 3. Add all files
git add -A

# 4. Commit
git commit -m "Initial commit"

# 5. Add the remote (use YOUR repo URL)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# 6. Verify the remote
git remote -v

# 7. Verify the branch name
git branch
# Should say: * main

# 8. Push!
git push -u origin main
```

## ⚠️ BEFORE Step 5 — Create the repo on GitHub

1. Go to github.com → **New repository**
2. Name it (e.g., `beos-waitlist`)
3. ❌ Do NOT check "Add a README file"
4. ❌ Do NOT choose a .gitignore template
5. ❌ Do NOT choose a license
6. ✅ Just click **Create repository**
7. Copy the URL
8. Come back and run steps 5–8 above

## 🔐 Authentication Issues

If you get "Authentication failed" or "Support for password authentication was removed":

You need a **Personal Access Token** (not your GitHub password):

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Check: `repo` (full control)
4. Copy the token
5. When pushing, use the token as your password

**Or better — use SSH:**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH and GPG keys → New SSH key

# Then use SSH URL instead of HTTPS:
git remote set-url origin git@github.com:YOUR-USERNAME/REPO-NAME.git
```

## 🔄 Pushing future changes

After the initial setup, it's just:
```bash
git add -A
git commit -m "Description of what changed"
git push
```

That's it. No `-u` needed after the first push.
