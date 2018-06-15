//Each Function Have A Prototype Property[All Object Created Using This Function As Constructor],But Object Have __ProtoType__ Property[Inheritence]
Object.defineProperty(Array.prototype, 'lastElementStanding', { get: function () { return this[this.length - 1]; } });
console.log(["Prajit", "Swagat", "Ghorai", "Habibi"].lastElementStanding);
function NameId(name, id) {
    this.name = name;
    this.id = id;
}
console.log("NameId.prototype === new NameId('Prajit', 247119).__proto__:", NameId.prototype === new NameId('Prajit', 247119).__proto__);
console.log("NameId['prototype'] === new NameId('Prajit', 247119)['__proto__']):", NameId['prototype'] === new NameId("Prajit", 247119)['__proto__']);
//Object __proto__ Points To prototype Of Constructor Function That Creates The Object.
//Instance Property[Object::hasOwnPropety/keys] Override Prototype Property,If Not Found Follow Prototype Chain
//Changing The Prototype Will Not Change The Prototype Property Of  Existing Object
NameId.prototype.Salutaion = "Mr.";
let nameId01 = new NameId('Prajit', 247119);
console.log('Salutaion Before:', nameId01.Salutaion);
console.log(nameId01.__proto__, nameId01.__proto__.__proto__, nameId01.__proto__.__proto__.__proto__);
NameId.prototype = { Salutaion: 'Vagabond' };
let nameId02 = new NameId('Prajit', 247119);
console.log('Salutaion After Constructor Prototype Change,Object Created Prior To This Change Remains Same:', nameId01.Salutaion);
console.log('Salutaion After Constructor Prototype Change:', nameId02.Salutaion);
console.log(nameId02.__proto__, nameId02.__proto__.__proto__, nameId02.__proto__.__proto__.__proto__);
//Steps To Alter Prototype Chain:Class Based
class Mammal { constructor(type) { this.type = type || "Mammal"; } }
class Animal extends Mammal { constructor(genre, type) { super(type); this.genre = genre; } }
console.log('Animal.prototype.constructor:',Animal.prototype.constructor);
//Steps To Alter Prototype Chain:Constructor Function Based
function HumanBeing(workingFor) { this.workingFor = workingFor || "Humanity"; }
HumanBeing.prototype.worksFor = function () { return this.workingFor; }
function PartTimeHumanBeing(name, id, worksFor) {
    HumanBeing.call(this, worksFor);//Chaining With Parent As Below,Sending Parameter For Parent Initialization
    this.name = name; this.id = id;
}
//Not Enumerable Properties When Extending From SuperClass
//Will Not Invoke The HumanBeing Constructor Function,Just Set HumanBeing As ProtoType,Setup Prototype Chain
//Object.create(HumanBeing.prototype) Set Returned Object __proto__===HumanBeing.prototype
PartTimeHumanBeing.prototype = Object.create(HumanBeing.prototype);
console.log('PartTimeHumanBeing.prototype.constructor:',PartTimeHumanBeing.prototype.constructor);
console.log('new PartTimeHumanBeing("Prajit", 247119, "Self") instanceof PartTimeHumanBeing:',new PartTimeHumanBeing("Prajit", 247119, "Self") instanceof PartTimeHumanBeing);
console.log('new PartTimeHumanBeing("Prajit", 247119, "Self") instanceof HumanBeing:',new PartTimeHumanBeing("Prajit", 247119, "Self") instanceof HumanBeing);
//PartTimeHumanBeing.prototype.constructor=PartTimeHumanBeing;//Chainig To Correct Constructor
let prajitSelf_247119 = new PartTimeHumanBeing("Prajit", 247119, "Self");
console.log(prajitSelf_247119.worksFor(), ':', prajitSelf_247119.__proto__, ':', prajitSelf_247119.__proto__.__proto__,
    ':', prajitSelf_247119.__proto__.__proto__.__proto__, ':', prajitSelf_247119.__proto__.__proto__.__proto__.__proto__);
console.log(Object.keys(prajitSelf_247119),prajitSelf_247119.hasOwnProperty('workingFor'));