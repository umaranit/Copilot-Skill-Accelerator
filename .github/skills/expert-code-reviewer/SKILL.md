---
name: expert-code-reviewer
description: Performs a deep-dive code review based on industry standards and local project rules. Trigger this when a user asks to "review", "audit", or "check" code.
---

# Expert Code Reviewer Skill

## 1. Context Discovery (Mandatory First Step)
Before providing feedback, you MUST:
1. Check the root directory for a `skill-config.json` file.
2. If found, identify the `coding_standard` and `forbidden_patterns` defined there.
3. If not found, use the default "Modern Clean Code" standards.

## 2. Review Process
Follow these steps in order:
- **Security Check:** Look for hardcoded secrets, SQL injection risks, and insecure dependencies.
- **Maintainability:** Ensure functions are under 30 lines and variables are descriptively named.
- **Performance:** Identify unnecessary loops or heavy computations inside render cycles.
- **Project Alignment:** Verify the code follows the directory structure defined in the project's `README.md`.

## 3. Output Format
Always present your review in a "Traffic Light" format:
- 🔴 **Critical:** Fix immediately (Security/Bugs).
- 🟡 **Warning:** Architectural improvements.
- 🟢 **Praise:** Point out what was done well.