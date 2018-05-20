var dice = require("./Example.01");
console.log(dice);/*** Get Exported Module Using Require */
console.log(dice.Dice.roll(), dice.Dice.roll(), dice.Dice.roll(), dice.Dice.roll());
console.log("Total Rolls " + dice.Dice.totalRolls);
/*** For Testing Use NodeUnit:npm install -g nodeunit */