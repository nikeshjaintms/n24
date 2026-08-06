const fs = require('fs');
const content = fs.readFileSync('C:\\\\Users\\\\HP\\\\.gemini\\\\antigravity-ide\\\\brain\\\\7e7ab688-33c8-4256-82b2-599a055b6989\\\\.system_generated\\\\steps\\\\125\\\\content.md', 'utf8');
const html = content.split('---')[1];
const text = html
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<[^>]+>/g, '\n')
  .replace(/\n\s*\n/g, '\n');
console.log(text.substring(0, 5000));
