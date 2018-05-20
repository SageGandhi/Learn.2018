//Do npm install --global mocha should As Well As Local.
//Run As mocha -R spec 08.MochaEvenDoubler.js For Reporters[-R]
var assert = require('assert'),
    evenDoubler = require('../Chap.01/03.EvenDoubler'),
    should = require('should');
    
describe('EvenDoubler', ()=> {
    describe('When Used Synchronously',()=>{
        it.skip('Should Double Even Numbers Correctly', ()=>{
            evenDoubler.EvenDoublerSync(2).should.equal(4);
        });
        it.skip('Should Throw On Odd Numbers',()=>{
            (()=>evenDoubler.EvenDoublerSync(3)).should.throw(/Odd/);
        });
    });
    
     describe('When Used Asynchronously',()=>{
        it.only('Should Double Even Numbers Correctly',(done)=>{
            evenDoubler.EvenDoubler(2,(err, results)=>{
                should.not.exist(err);
                results.should.equal(4);
                done();
            });
        });
        
        it.only('Should Throw On Odd Numbers',(done)=>{
            evenDoubler.EvenDoubler(3,(err, results)=> {
                should.exist(err);
                should.not.exist(results);
                done();
            });
        });
    });
});
//Should Example
var users = {name:'Prajit Gandhi',ids:[247119,454545,829637,374070]};
users.should.have.property('name','Prajit Gandhi');
users.should.have.property('ids').with.lengthOf(4);