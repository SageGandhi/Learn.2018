var assert = require('assert');
var evenDoubler = require('../Chap.01/03.EvenDoubler');

assert.equal(evenDoubler.EvenDoublerSync(2),4);
assert.throws(()=>evenDoubler.EvenDoublerSync(3),/Odd/);//RegEx For Exception Message

evenDoubler.EvenDoubler(2,(err,results) => {
    assert.ifError(err);
    assert.equal(results,4,"EvenDoubler Failed On Even Number");
});

evenDoubler.EvenDoubler(3,(err,results)=>assert.notEqual(err, null));