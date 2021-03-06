const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const { Transform } = require('stream');

const progress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('.');
    callback(null, chunk);
  }
});

fs.createReadStream(file)
  .pipe(crypto.createDecipher('aes192', 'secret.ingredient'))
  .pipe(zlib.createGunzip())
  .pipe(progress)
  .pipe(fs.createWriteStream(`${file}.ok`))
  .on('finish', () => console.log('Done'));
