//Do npm install request After cd JavaScript/Js.01/04.NodeIntroduction/Chap.02/
//ReadableStream
var request = require('request'),
    googleHomePage = request('https://www.google.com/');
    
console.warn(
    '===========================================',
    '<<Data Incoming Started:>>',
    '===========================================')
googleHomePage.on('data',(chunk)=>console.warn(`<<Data Chunk:>>${chunk}/n`));
googleHomePage.on('end',()=>console.warn(
    '===========================================',
    '<<Data Done:>>',
    '==========================================='));

//WritableStream
console.log(
    '===========================================',
    `Is StdOut Writable ${process.stdout.writable}`,
    '===========================================');
process.stdout.write('Prajit Learns Node..');
process.stdout.write('Prajit Learned EcmaScript First..');

//ReadableStream+WritableStream=>Piping
var googleHomePage01 = request('https://www.google.com/');
googleHomePage01.pipe(process.stdout);
//Or Fluent Programming Style
request('https://www.google.com/').pipe(process.stdout);

//Write To File
var fileSystem = require("fs");
request('https://www.google.com/').pipe(fileSystem.createWriteStream('GoogleHomePage.html'));
//ReadableStream+BothType+WritableStream=>Piping Gzipped Version
var zipLib = require("zlib");
//Type zcat Command To View Gzipped File
request('https://www.google.com/').pipe(zipLib.createGzip()).pipe(fileSystem.createWriteStream('GoogleHomePageZippped.html.gz'));