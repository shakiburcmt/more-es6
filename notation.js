const student = {
    name: 'Sizan',
    age: 24,
    class: 'BSc',
    mark: {
        math: 23,
        biology: 34,
        bangla: 87
    }
}
console.log(student.mark.biology)
console.log(student['mark']['math'])

const bangla = 'bangla';
console.log(student.mark[bangla])