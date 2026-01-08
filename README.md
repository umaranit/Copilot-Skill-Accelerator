# 🚀 Copilot Skill Accelerator

**Turn GitHub Copilot into your most senior team member.**

This repository is a professional-grade distribution hub for **GitHub Copilot Agent Skills**. It provides a "zero-configuration" setup to inject expert-level coding standards, automated reviews, and style enforcement directly into any existing development workflow.

---

## 🌟 Why Use This Accelerator?
Standard AI is a generalist. This toolkit provides **Specialized Agents** that:
* **Enforce Standards:** Automatically applies your team's specific coding rules.
* **Reduce Review Time:** Catches security flaws and logic errors before you even open a PR.
* **Boost Consistency:** Ensures every developer follows the same high-quality patterns.

## 📦 Core Skills Included
| Skill | Expert Capability | Trigger Phrase |
| :--- | :--- | :--- |
| **Expert Reviewer** | Security & Logic Audit (Traffic Light System) | *"Review this file"* |
| **Auto-Linter** | Automated Style & Formatting Correction | *"Lint my code"* |
| **_template-skill** | Starter kit for your own custom agents | N/A |

## 🛠️ Cross-Platform Installation (30 Seconds)

Whether you are on **Windows, macOS, or Linux**, you can inject these skills into your project with one command:

```bash
npx github:YOUR_GITHUB_USERNAME/YOUR_REPO_NAME

⚙️ Step 2: Configure Your Rules
Once installed, locate skill-config.json in your root directory. Copy and paste the configuration that matches your stack:

🐍 For Python Projects

{
  "project_name": "AI Analysis Tool",
  "primary_language": "Python",
  "coding_standard": "PEP 8",
  "linter_preference": "Ruff",
  "forbidden_patterns": ["print", "global", "import *"],
  "custom_rules": ["Use type hints for all arguments."]
}

🌐 For React / TypeScript Projects
{
  "project_name": "Web Dashboard",
  "primary_language": "TypeScript",
  "coding_standard": "Airbnb Style",
  "linter_preference": "ESLint",
  "forbidden_patterns": ["var", "any", "console.log"],
  "custom_rules": ["Use functional components and Hooks."]
}


## 🧠 How to Use

Open Copilot Chat (`Cmd+Shift+I` or `Ctrl+Shift+I`) and use natural language:

* **For a Review:** *"Audit this module using the Expert Reviewer skill."*
* **For Linting:** *"Tidy up this file based on my config rules."*

## 🎨 Built for Extensibility
This is not a "closed" product; it is a **Framework**. 

* **Add New Skills:** Simply add a new folder to `.github/skills/`.
* **Add Scripts:** Link your internal CLI tools to Copilot by adding them to the `scripts/` folder.
* **Guide:** See [EXTENDING_SKILLS.md](./EXTENDING_SKILLS.md) for the full developer manual.