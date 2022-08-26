const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2);
console.log(half)


const friend = ['gittu', 'bittu', 'littu'];
const firstLetter = friend.map(friend => friend[0]);
console.log(firstLetter);

const friends = ['gittuSelim', 'bittu Bablu', 'littu'];
const friendsLength = friends.map(friend => friend.length);
console.log(friendsLength);

const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 2, name: 'mobile', price: 5000 },
    { id: 3, name: 'computer', price: 10000 },
    { id: 4, name: 'watch', price: 400 }
];
const items = products.map(product => product.name);
console.log(items)