---
name: auto-linter-expert
description: Automatically identifies and fixes linting, formatting, and style violations. Trigger this when a user says "lint", "format", "fix style", or "tidy up".
---

# Auto-Linter & Style Expert

## 1. Environment Detection
Before acting, you must identify the project's styling environment:
- Look for configuration files: `.eslintrc`, `.prettierrc`, `pyproject.toml`, `.stylelintrc`, or `lint-staged.config.js`.
- Check `package.json` or `requirements.txt` for linting dependencies.

## 2. Core Capabilities
When triggered, perform the following:
- **Style Audit:** Scan the current file for inconsistencies (indentation, trailing whitespace, missing semicolons).
- **Auto-Fix:** Proactively suggest the corrected version of the code that satisfies the local linting rules.
- **Rule Explanation:** If a user asks "Why is this an error?", explain the specific linting rule (e.g., "no-unused-vars") and why it matters.

## 3. Interaction Protocol
1. **Identify:** "I see you're using [ESLint/Prettier/Ruff]. I've found 3 style issues."
2. **Apply:** Offer a single "Click to Apply" block that fixes all formatting issues at once.
3. **Optimize:** Suggest improvements that the linter might miss, such as simplifying complex boolean logic.

## 4. Configuration
Respect the `forbidden_patterns` and `coding_standard` defined in the root `skill-config.json`.