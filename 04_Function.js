// Function
// 1 Function Declaration
// function getName(name) {
//     console.log('Привет, - ', name)
// }

// Function Expression
// const output = function getName2(name){
//     console.log('Привет, - ', name)
// }

// getName('Yerassyl')
// output('Max')
// console.log(typeof(output))

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function(){
//     if(counter === 7){
//         clearInterval(interval)
//     }
//     else{
//         console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции
// function greet() {
//     console.log('Привет - ', name)
// }

// const output = name => console.log('Привет - ', name)
// output('Yerassyl')
// const output2 = num => console.log(num ** 2)
// output2(5)

// 4 Параметры по умолчанию
// const sum = (a = 41, b = 1) => a + b
// console.log(sum(2, 10))
// console.log(sum())

// function numbers (...all){
//     let result = 0
//     for(let num of all){
//         result += num
//     }
//     return result
// }
// const res = numbers(1,2,3,4,5)
// console.log(res)

// 5 Замыкания
// function createMamber(name){
//     return function(lastName){
//         console.log(name + lastName)
//     }
// }

// const logWithLastName = createMamber('Yerassyl ')
// console.log(logWithLastName('Kenzha'))