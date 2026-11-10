const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = [
  { regex: /brandYellow/g, replacement: 'brandTeal' },
  { regex: /font-montserrat/g, replacement: 'font-plus-jakarta' },
  // Teal color: 14B8A6 (rgb 20, 184, 166)
  { regex: /rgba\(250,204,21,/g, replacement: 'rgba(20,184,166,' },
  // Hex replacement for #FACC15 -> #14B8A6
  { regex: /#FACC15/gi, replacement: '#14B8A6' },
  { regex: /#CA8A04/gi, replacement: '#0F766E' },
  { regex: /#FDE047/gi, replacement: '#5EEAD4' }
];

walk(srcDir, function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(({regex, replacement}) => {
      content = content.replace(regex, replacement);
    });
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
});
