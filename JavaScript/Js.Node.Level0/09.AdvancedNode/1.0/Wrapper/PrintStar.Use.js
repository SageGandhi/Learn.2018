require('./PrintStar').print(10, "Prajit Gandhi");
require('./Ascii-Art')();//AS This Is A Function Executes Each Time
console.log(require.cache);//Removing Function Will Logs Only Once As It Will Be Cached
// delete require.cache['./Ascii-Art']
require('./Ascii-Art')();