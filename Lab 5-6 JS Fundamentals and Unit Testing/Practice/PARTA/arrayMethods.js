const numbers = [1, 2, 3, -4, -5, 100, -9]

const myMapFunction = x => x ** 3
const myAnotherMap = function (x) {
    return x ** 3
}

const cubed = numbers.map(x => x ** 3)
numbers.forEach(x => console.log(x))
const neg = numbers.filter(x => x < 0)
const neg5 = numbers.find(x => x == -50)
console.log(neg)
console.log(neg5)
