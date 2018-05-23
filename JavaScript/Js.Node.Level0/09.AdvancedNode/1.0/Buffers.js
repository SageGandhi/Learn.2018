const string = 'touché',
    buffer = Buffer.from('touché'),
    fs = require('fs');
//Does Have Character Encoding    
console.log(string, string.length);
//Does Not Have Character Encoding
console.log(buffer, buffer.length);

fs.readFile(__filename, (err, buffer) => {
    let tags = buffer.slice(-4, -1);// Holds Last 3 Byte
    // Original Buffer Modified
    tags.forEach((value, index, array) => tags[index] = '65');
    console.log(buffer.toString());
});

//StringDecoder Handles MultiByte Character
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
// 0xE2, 0x82, 0xAC -> € Euro Symbol
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    const buffer = Buffer.from([chunk]);
    console.log('With .toString():', buffer.toString());
    console.log('With StringDecoder:', decoder.write(buffer));
});