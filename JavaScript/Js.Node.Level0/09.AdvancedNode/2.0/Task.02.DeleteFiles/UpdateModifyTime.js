const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'FilesInput');

fs.mkdirSync(dirname);
const msDay = 24 * 60 * 60 * 1000;

for (let dayBefore = 0; dayBefore < 10; dayBefore++) {
  const filePath = path.join(dirname, `File.0${dayBefore}`);
  fs.writeFile(filePath, dayBefore, (err) => {
    const time = (Date.now() - dayBefore * msDay) / 1000;
    fs.utimes(filePath, time, time, () => { });
  });
}
