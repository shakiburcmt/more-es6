// const er man reassign kora jayna, agey value set korte hoy, ar let block mane second bracket er baire jayna


// default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}
console.log(calculateSalary(100))


// template string
const elementHTML = `
<div>
    <h3>Name:Sizan</h3>
    <p>Salary: ${calculateSalary(1000, .01, 0)}</p>
</div>
`
console.log(elementHTML)

// arrow function
const doubleInt = x => x * 2;
console.log(doubleInt(5));

// sprear operator
const age = [34, 66, 12, 33, 24, 22];
console.log(Math.max(...age))

// destructuring,,, ekhane ... dile je koyta call kora hoyni oiguloke ke n er moddhe rakhbe
const { x, ...n } = { x: 45, name: 'Shakib', salary: 40000 }
console.log(x, n)

const [a, b, ...c] = [344, 5, 66, 77, 23];
console.log(c)
