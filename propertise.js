const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
// getting all property names
const keys = Object.keys(bottle);
console.log(keys);
// get all values

// propble dekhacche
const values = Object.values(bottle)
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);

const pairs = Object.entries(bottle);
// console.log(pairs);

delete bottle.isCleaned;
console.log(bottle);
