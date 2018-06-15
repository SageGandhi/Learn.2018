"use strict";
console.log(Object.create(Object.prototype, {
    name: { value: "Prajit Gandhi", enumerable: true, writable: true, configurable: true },
    id: { value: 247119, enumerable: true, writable: true, configurable: true }
}));
class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    toString() {
        return `{ name: ${this.name}, id: ${this.id} }`
    }
}
//Constructor Function:New Keyword Create Empty Object,Set This Empty Object In This Context & Returns It.
console.log(new Student("Prajit Gandhi", 247119));
function ParttimeStudent(name, id) {
    this.name = name;
    this.id = id;
}
//Constructor Function:New Keyword Create Empty Object,Set This Empty Object In This Context & Returns It.
console.log(new ParttimeStudent("Prajit Gandhi", 247119));
console.log({ name: "Prajit Gandhi", id: 247119 });//Object Literal
//Property Descriptor
console.log(Object.getOwnPropertyDescriptor({ name: "Prajit Gandhi", id: 247119 }, 'name'));
//Writable:Can Change At Later Time(True)/Otherwise False
let freezeObject01 = Object.freeze({ name: "Prajit Gandhi", id: 247119 });
//UnComment This Line To Check The Error When Frozen Object Value Changes
//freezeObject01.name="Sintu";//Cannot Assign To ReadOnly Property 'name' Of Object,Use Strict Mode.To See Error
let enumerableObj01 = { name: "Prajit Gandhi", id: 247119 };
for (let key in enumerableObj01) { console.log(key, enumerableObj01[key]); }
console.log('Object Keys:', Object.keys(enumerableObj01));
console.log('Json:', JSON.stringify(enumerableObj01));
console.log('Enumerable Property Chnaged For Name----------');
Object.defineProperty(enumerableObj01, 'name', { enumerable: false });
for (let key in enumerableObj01) { console.log(key, enumerableObj01[key]); }
console.log('Object Keys:', Object.keys(enumerableObj01));
console.log('Json:', JSON.stringify(enumerableObj01));
//Configurable:Unable To Change enumerable,configurable/Delete A Property/Writable Property Can Be Changed
Object.defineProperty(enumerableObj01, 'cardName', {
    get: function() {return this.name},
    set:function(value){this.name = value;}
});
console.log('CardName',enumerableObj01.cardName);