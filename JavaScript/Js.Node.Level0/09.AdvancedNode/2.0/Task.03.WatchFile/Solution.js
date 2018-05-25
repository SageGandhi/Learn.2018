const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'FilesInput');
const currentFiles = fs.readdirSync(dirname);

const logWithTime = (message) =>
  console.log(`${new Date().toUTCString()}: ${message}`);

fs.watch(dirname, (eventType, filename) => {
  if (eventType === 'rename') { // Add/Delete
    const index = currentFiles.indexOf(filename);
    if (index >= 0) {
      currentFiles.splice(index, 1);
      logWithTime(`${filename} Was Removed`);
      return;
    }
    currentFiles.push(filename);
    logWithTime(`${filename} Was Added`);
    return;
  }
  logWithTime(`${filename} Was Changed`);
});
