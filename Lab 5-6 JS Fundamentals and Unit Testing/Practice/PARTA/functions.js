const numbers = [1, 2, 3, 4, 5, 6]
// for (const number of numbers) {
//     console.log(number)
// }
//
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// function add(a, b) {
//     return a + b
// }

// console.log(add(12,33))
// console.log(add(12.4,33.4))
// console.log(add("Abdulahi ", " Hassen"))
const multiply = function (a, b) {
    return a * b
}
function add(a, b) {
    return a + b
}

const x = 10
const y = 20

console.log(add(x, y))
console.log(multiply(x, y))
console.log(multiply(10, 20))

function displayResult(a, b , fun) {
    const result = fun(a, b)

    console.log(result)
}


displayResult(x, 20, multiply)
displayResult(x, 20, add)
displayResult(x, y, function (a, b) {return a + b})
displayResult(x, y,  (a, b) => a + b)
displayResult(x, y,  (a, b) => a * b)
displayResult(x, y,  25)

function display(a) {
    console.log(a)
}


a =>  console.log(a)

function square(a) {
    return a ** 2
}

a => a ** 2

function max(a, b) {
    if(a > b)
        return a
    else
        return b
}

(a, b) => a > b ? a : b





