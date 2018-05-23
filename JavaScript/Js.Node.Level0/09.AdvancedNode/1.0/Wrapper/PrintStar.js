const print = (stars, header) => console.log('*'.repeat(stars), header, '*'.repeat(stars));
if (require.main == module) {// Running As A Script:Arguments Start From 2nd Index
    print(process.argv[2], process.argv[3]);
    console.log('All Arguments:',process.argv);
} else {
    module.exports.print = print;// Being Required
}
