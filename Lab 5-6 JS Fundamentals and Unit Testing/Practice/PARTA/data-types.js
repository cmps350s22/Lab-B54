const num = 10
let x = 20

console.log(num, x)

const student = {
    name : "Fereyal",
    age : 21,
    gender: 'Female',
    hobbies : ['Movies', 'BasketBall', 'Karate'],
    pets :[
        {
            name : 'nemo',
            type : 'fish',
        },
        {
            name : 'ginger',
            type : 'cat',
        }
    ]
}

console.log(student.pets[1].name)


console.log(student)

student.grade = 'A'
console.log(student)

const mixedArray = ['Abdulahi', [1,2,4], {carName: 'BMW'}]
console.log(mixedArray[2].carName)