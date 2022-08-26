const array = [2, 4, 56, 6, 333, 66, 543, 22, 5, 6, 7,];
// Filter diye array theke onekgulo value theke koyketa newa jay
const filterFromArray = array.filter(number => number > 100);
const filterFromArraySmall = array.filter(number => number < 10);
console.log(filterFromArray, filterFromArraySmall)



const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 2, name: 'mobile', price: 5000 },
    { id: 3, name: 'computer', price: 10000 },
    { id: 4, name: 'watch', price: 400 }
];
const expensive = products.filter(product => product.price > 5000);
console.log(expensive)