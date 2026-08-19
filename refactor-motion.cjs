const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (filePath) => {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Replace imports
  if (content.includes('import { motion } from "framer-motion"')) {
    content = content.replace('import { motion } from "framer-motion"', 'import { m } from "framer-motion"');
    changed = true;
  }
  if (content.includes('import { motion, AnimatePresence } from "framer-motion"')) {
    content = content.replace('import { motion, AnimatePresence } from "framer-motion"', 'import { m, AnimatePresence } from "framer-motion"');
    changed = true;
  }
  if (content.includes('import { Variants, motion } from "framer-motion"')) {
    content = content.replace('import { Variants, motion } from "framer-motion"', 'import { Variants, m } from "framer-motion"');
    changed = true;
  }
  if (content.includes('import { motion, useScroll, useTransform } from "framer-motion"')) {
    content = content.replace('import { motion, useScroll, useTransform } from "framer-motion"', 'import { m, useScroll, useTransform } from "framer-motion"');
    changed = true;
  }

  // Replace usage
  if (content.includes('<motion.')) {
    content = content.replace(/<motion\./g, '<m.');
    changed = true;
  }
  if (content.includes('</motion.')) {
    content = content.replace(/<\/motion\./g, '</m.');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
});
