# ⚡ Copilot Skill Accelerator: Cheat Sheet

Use these commands and triggers to activate your new Expert Agent Skills.

---

## 🔍 Skill: Expert Code Reviewer
**Purpose:** Provides a "Traffic Light" audit (Security, Logic, Performance).
* **Trigger Words:** `review`, `audit`, `check`, `security scan`.
* **Example Prompts:**
  - *"Review this file for logic errors."*
  - *"Perform a security audit on my current changes."*
  - *"Using the Traffic Light format, check this module."*

---

## ✨ Skill: Auto-Linter Expert
**Purpose:** Fixes formatting, naming conventions, and style violations.
* **Trigger Words:** `lint`, `format`, `tidy`, `style`.
* **Example Prompts:**
  - *"Lint this file according to our config."*
  - *"Fix all style violations in this function."*
  - *"Tidy up my imports and formatting."*

---

## ⚙️ Configuration Tips
Your skills are powered by the `skill-config.json` file. 
* **To change standards:** Update the `"coding_standard"` field.
* **To ban patterns:** Add strings to the `"forbidden_patterns"` array.
* **To focus the AI:** Change the `"priority_focus"` (e.g., set to "Security" or "Readability").

---