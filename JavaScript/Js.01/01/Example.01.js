/***  Command:node .\Example.01.js In PowerShell*/
/***Data Types */
console.log(typeof console.log, typeof 12.5, typeof 42, typeof undefined, typeof {}, typeof [], typeof true, typeof "Prajit", typeof /\d{0,5}/);
/***Node Process Arguments */
if (process && process.argv) {
    console.log(process.argv);
}
/***Local[Function] Scope,Global Scope */
console.log(Math.ceil(100 * Math.random()), Math.floor(100 * Math.random()));/***Other Utility Function */
/***Define Object That Can Be Required */
var dice = {
    size: 6,
    totalRolls: 0,
    roll: function () {
        this.totalRolls += 1;
        return Math.ceil(this.size * Math.random());
    }
};

/***Export Developer Name */
exports.DeveloperName = "Prajit Gandhi";
/***Export Dice */
exports.Dice = dice;