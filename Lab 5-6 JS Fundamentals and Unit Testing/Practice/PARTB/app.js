const students = [
    {name: 'Mayar', gender: 'Female', grade: 92, age: 20},
    {name: 'Ahmed', gender: 'Male', grade: 81, age: 30},
    {name: 'Sara', gender: 'Female', grade: 99, age: 24},
    {name: 'Emany', gender: 'Female', grade: 50, age: 26},
    {name: 'Issa', gender: 'Male', grade: 70, age: 22},
    {name: 'Fatima', gender: 'Female', grade: 88, age: 21}
]

const avgGrade = students.reduce((acc, curr) => acc + curr.grade, 0) / students.length
console.log(`Average Grade  = ${avgGrade}`)

const male = students.filter(s => s.gender === 'Male')

const avgMaleStudentGrade = male.reduce((acc, curr) => acc + curr.grade, 0) / male.length
console.log('avgMaleStudentGrade', avgMaleStudentGrade)

// students.forEach(s => console.log(s))
const femaleStudents = students.filter(s => s.gender === 'Female')
const saraFind = students.find(s => s.name === 'Sara')
const saraFilter = students.filter(s => s.name === 'Sara')

// console.log(femaleStudents)
// console.log('saraFind',saraFind)
// console.log('saraFilter',saraFilter)

// const numbers = [99, 99, 99, 99, 99, 99, 99]
// const total = numbers.reduce((a, b) => a + b)
// const avg = total / numbers.length
// console.log(avg)

// const myRF = (acc, curr) => {
//     console.log(`acc = ${acc} : curr = ${curr}`)
//     if(acc > curr)
//         return acc
//     return  curr
// }
// const total = numbers.reduce()
//
// console.log(total)

