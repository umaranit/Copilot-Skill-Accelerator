#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// --- Configuration: REPLACE WITH YOUR REPO DETAILS ---
const GITHUB_USER = "YOUR_GITHUB_USERNAME";
const GITHUB_REPO = "YOUR_REPO_NAME";
const BRANCH = "main";
const BASE_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${BRANCH}`;

// The manifest of files to be injected into the customer's project
const filesToDownload = [
  { remote: '.github/copilot-instructions.md', local: '.github/copilot-instructions.md' },
  { remote: '.github/skills/expert-code-reviewer/SKILL.md', local: '.github/skills/expert-code-reviewer/SKILL.md' },
  { remote: '.github/skills/auto-linter-expert/SKILL.md', local: '.github/skills/auto-linter-expert/SKILL.md' },
  { remote: '.github/skills/_template-skill/SKILL.md', local: '.github/skills/_template-skill/SKILL.md' },
  { remote: 'skill-config.json.example', local: 'skill-config.json' },
  { remote: 'CHEATSHEET.md', local: 'CHEATSHEET.md' },
  { remote: 'EXTENDING_SKILLS.md', local: 'EXTENDING_SKILLS.md' }
];

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // Prevent overwriting customer configuration
    if (dest === 'skill-config.json' && fs.existsSync(dest)) {
      console.log(`- Keeping existing ${dest}`);
      return resolve();
    }

    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Installed: ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function start() {
  console.log("\x1b[36m%s\x1b[0m", "🛠️  Deploying Copilot Agent Skills...");
  
  for (const file of filesToDownload) {
    try {
      await downloadFile(`${BASE_URL}/${file.remote}`, file.local);
    } catch (err) {
      console.error(`❌ Error: ${file.remote} -> ${err.message}`);
    }
  }

  console.log("\n\x1b[32m%s\x1b[0m", "✨ Success! Your Copilot is now Supercharged.");
  console.log("1. Check 'skill-config.json' to set your project rules.");
  console.log("2. Open 'CHEATSHEET.md' for trigger commands.");
  console.log("3. Use '_template-skill' to build your own custom agents.");
}

start();