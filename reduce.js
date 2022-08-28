const number = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters
const total = number.reduce((previous, current) => previous + current, 0);
console.log(total)


const num = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initial value)
// accumulatorFunction use two parameters
const totalReduce = num.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current
}, 0);
console.log(totalReduce)