const array = [2, 4, 56, 6, 333, 63, 543, 22, 5, 6, 7,];
// find only one value array array theke find korbe
const new1 = array.find(num => num % 7 === 0);
const new2 = array.filter(num => num % 7 === 0);
console.log(new1, new2)

const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 2, name: 'mobile', price: 5000 },
    { id: 3, name: 'computer', price: 10000 },
    { id: 4, name: 'watch', price: 400 }
];
const low = products.find(pro => pro.price > 10000);
console.log(low)