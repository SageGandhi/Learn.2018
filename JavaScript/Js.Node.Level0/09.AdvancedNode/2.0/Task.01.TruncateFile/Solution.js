const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'FilesInput');

const files = fs.readdirSync(dirname);

files.forEach(file => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (err, stats) => fs.truncate(filePath, stats.size / 2,()=>{}));
});
