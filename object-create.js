// 1.using object literal
const student = { name: 'Sakib Al Hasan', job: 'cricketer' };

// 2.using constructor
const person = new Object();
console.log(person);

// 3. 
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.name);

class  People{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
// console.log(peop);

// function 
function manush(name) {
    this.name = name;

}
const man = new manush('Pobarul islam');
console.log(man);