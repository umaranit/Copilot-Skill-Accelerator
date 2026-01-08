# 🛠️ Extending Your Copilot Skills: Part 1

This framework is designed to be your project's "AI Brain." While we provide pre-built skills for reviews and linting, the true power lies in how you customize and extend this toolkit to fit your proprietary workflows.

---

## 🟢 Level 1: Basic Configuration (No Code)
The fastest way to customize your AI is via the `skill-config.json` file located in your project's root directory.

### How it works:
The core skills (Reviewer, Linter) are programmed to scan this file before they provide any feedback. You can add your own custom rules here without touching the core skill files.

**Example: Adding project-specific rules**
```json
{
  "project_name": "My Custom App",
  "coding_standard": "Functional React with Tailwind",
  "custom_rules": [
    "Always use 'lucide-react' for icons.",
    "Ensure all API calls use the custom 'useApi' hook.",
    "Do not use inline styles."
  ]
}

---



## 🟡 Level 2: Creating New Skills (Low Code)
You can teach Copilot entirely new capabilities (e.g., "Architecture Expert," "Jira Helper," or "DB Migration Guide") by creating new skill folders.

### The 3-Step Process:
1. **Copy the Template:** Duplicate the `_template-skill` folder in `.github/skills/`.
2. **Rename:** Change the folder name to reflect the capability (e.g., `security-auditor`).
3. **Define Instructions:** Open the `SKILL.md` inside that folder and update the YAML frontmatter and Markdown instructions.

> **💡 Pro Tip:** The `description` in the YAML frontmatter is what Copilot uses to decide when to activate the skill. Use keywords like "Whenever the user mentions..." to make it more accurate.
---

## 🔴 Level 3: Advanced Customization (Adding Scripts)
You can give Copilot "Hands" by adding executable scripts. This allows the AI to perform real-world actions like running a linter, checking a database, or calling an internal API.



### Adding a Script "Tool":
1. **Create a Scripts Folder:** Add a `scripts/` folder inside your skill directory.
2. **Write the Logic:** Add a script (e.g., `check-api-health.py` or `format-report.js`).
3. **Instruct the AI:** In your `SKILL.md`, tell Copilot:
   > *"If the user asks about API health, execute `./scripts/check-api-health.py` and summarize the results."*

### Best Practices for Scripts:
* **Relative Paths:** Always use relative paths (`./scripts/filename`) so the tool works regardless of where the developer clones the repo.
* **Environment Variables:** Do not hardcode API keys. Instruct the AI to look for them in a local `.env` file or within `skill-config.json`.
* **Concise Output:** Ensure scripts return short, actionable text. Huge log dumps will fill the AI's memory and reduce performance.
* **Safety:** GitHub Copilot will always ask the user for permission before running a script in the terminal.

---

