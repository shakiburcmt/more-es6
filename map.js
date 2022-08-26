// const numbers = [4, 6, 8, 2, 10];
// const empty = [];
// for (const number of numbers) {
//     const doubled = number * 2;
//     empty.push(doubled);
// }
// console.log(empty);



const numbers = [4, 6, 8, 2, 10];

function getDoubles(num) {
    const empty = [];
    for (const number of num) {
        const doubled = doubleIt(number);
        empty.push(doubled);
    }
    return empty;
}
// function doubleItOld(number) {
//     return number * 2;
// }

const doubleIt = num => num * 2;

const result = getDoubles(numbers)
console.log(result)


// array map

const map = [3, 5, 7, 9].map(x => x * 5);
console.log(map)