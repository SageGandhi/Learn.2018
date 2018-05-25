const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'FilesInput');

const files = fs.readdirSync(dirname);
const msDay = 24*60*60*1000;

files.forEach(file => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (err, stats) => {
    if ((Date.now() - stats.mtime.getTime() > 7*msDay)) {
      fs.unlink(filePath, (err) => console.log(`Deleted ${filePath}`));
    }
  });
});
// Run JavaScript\Js.Node.Level0\09.AdvancedNode\2.0\Task.02\UpdateModifyTime.js For File Creation