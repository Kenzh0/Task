// 1 Переменные (JavaScript есть 8 переменных), const, let, var
// Типы данных: Bolean, Number, String, Null, Underfined, Symbol
// 2 Муттирование 
// const name = 'Yerassyl'

// const messange = prompt('Введите свою имю')
// alert("Меня зовут " + messange )

// 3 Операторы
// let currentYear = 2022
// const birthYear = 2001
// const age = currentYear - birthYear
// console.log (age)

// const a = 7
// const b = 7
// let c = 17
// c -= a // c = c - a
// c += a // c = c + a
// c *= a // c = c * a
// c /= a // c = c / a
// console.log(++currentYear)
// console.log(--currentYear)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Yerassyl'
// const age = 20
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)

// 5 Приоритет операторов
// const fullAge = 21
// const currentYear = 2022
// const birthYear = 2001
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'ready'
// if (courseStatus === 'ready'){
//     console.log('Все готово!')
// } else if (courseStatus === 'pending'){
//     console.log('Курс еще в процессе разработки')
// } else {
//     console.log('Курс еще не получился')
// }
// Тернарное выражение
// courseStatus ? console.log('Все готово') : console.log('Все не готово')
// const numFirst = 7
// const numSecond = '7'
// console.log(numFirst === numSecond)

// 7 Булевоя логика $$, ||

// 8 Функция
// function calculateAge(year){
//     return 2022 - year
// }
// function logInfoAbout(name, year){
//     const age = calculateAge(year)
//     age ? console.log('Человек по имени ' + name + ', сейчас имеет возраст: ' + age) : console.log('Человек еще не родился!')
// }

// logInfoAbout('Yerassyl', 2001)
// logInfoAbout('Elon', 1991)
// logInfoAbout('Yerassyl')

 // 9 Массивы
//  const cars = ['Mazda', 'Toyota', 'BMW']
//  console.log(cars.length)
//  console.log(cars[0])
//  console.log(cars[1])
//  console.log(cars[2])
//  cars[3] = 'KIA'
//  console.log(cars)

// 10 Циклы
// const cars = ['Mazda', 'Toyota', 'BMW']
// for (let i = 0; i < cars.length; i++){
//     const car = cars[i]
//     console.log(car)
// }
// Цикл for of
// for (let car of cars){
//     console.log(car)
// }

// 11 Объекты
// const person = {
//     firstName: 'Yerassyl',
//     lastName: 'Kenzha',
//     age: 20,
//     isProgrammer: true,
//     hasWife: false,
//     greet: function(){
//         console.log('Hello')
//     }
// }

// console.log(person.firstName)
// person.greet()
// const year = 'age'
// console.log(person[year])