// es6 e class ke syntactic sugar bole
// class er 1st letter uppercase diye suru hoy
class Instructor {
    name;
    designation = 'Software Developer'
    team = 'googleAI'
    location;
    constructor(name, location) {
        // object er moddhe kono field set korte this use hoy
        // constructor ke directly call kora jay na class ke call korar somoy call korte hoy
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    cerateQuiz(module) {
        console.log(`create quiz ${module}`)
    }
}
// class call korar age variable dite hobe ar class name er age new dite hobe
const sizan = new Instructor('Sizan', 'Naogaon');
console.log(sizan);
sizan.startSupportSession('9.00 pm');
sizan.cerateQuiz(60);

const shakib = new Instructor('Shakib', 'Santahar');
console.log(shakib)