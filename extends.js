class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} - thank you for your feedback.`)
    }
}

class Instructor extends TeamMember {
    designation = 'Software Instructor'
    team = 'googleAI'
    constructor(name, location) {
        // object er moddhe kono field set korte this use hoy
        // constructor ke directly call kora jay na class ke call korar somoy call korte hoy
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    cerateQuiz(module) {
        console.log(`create quiz ${module}`)
    }
}

class Developer extends TeamMember {
    designation = 'Software Developer'
    team = 'firefoxAI'
    tech;
    constructor(name, location, tech) {
        // object er moddhe kono field set korte this use hoy
        // constructor ke directly call kora jay na class ke call korar somoy call korte hoy
        super(name, location);
        this.tech = tech;
    }
    developerFeature(feature) {
        console.log(`Please delelop the ${feature}`)
    }
    release(version) {
        console.log(`release the ${version}`)
    }
}

class JobPlacement extends TeamMember {
    designation = 'Job Placement Commandos'
    team = 'operaAI'
    region;
    constructor(name, location, region) {
        // object er moddhe kono field set korte this use hoy
        // constructor ke directly call kora jay na class ke call korar somoy call korte hoy
        super(name, location);
        this.region = region;
    }
    provideResume(resume) {
        console.log(`Please provide ${resume}`)
    }
    prepareStudent(version) {
        console.log(`release the ${version}`)
    }
}


// const sizan = new Developer('Sizan', 'Santahar', 'JavaScript');
// console.log(sizan);
// sizan.provideFeedback();

const mariam = new JobPlacement('Mariam', 'Rajshahi', 'Bangladesh');
console.log(mariam)
mariam.provideResume('your resume');