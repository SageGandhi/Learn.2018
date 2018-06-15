console.log((4.1 + 4.3), 10 / 0, -10 / 0, 0 / 0, typeof (0 / 0));
//For Splice/Slice https://ariya.io/2014/02/javascript-array-slice-vs-splice
let arrNos = [1, 2, 3];
//Does Not Mutate Array,Start Index Inclusive,End Index Exclusive
console.log(arrNos.slice(1, 2), arrNos);
//Mutate Original Array,Returned Removed Part Of The Array,Start Index Inclusive,No Of Element To  Be Removed,Add Elements After Deletion
console.log(arrNos.splice(1, 2, 4, 5, 6, 7), arrNos);
console.log("Delete Element From Start:", [1, 2, 3].shift());
console.log("Delete Element From End:", [1, 2, 3].pop());
console.log(!!false, !!0, !!"", !!'', !!null, !!undefined, !!NaN);//Falsy Values

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];
for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        console.log(values[valueIdx] + ' Of ' + suits[suitIdx] );
    }
}
console.log(Math.trunc(Math.random()*suits.length*values.length));