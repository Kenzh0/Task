// const cars = ['Mazda', 'Toyota', 'BMW', 'Audi', 'Hyundai']
// const fib = [1, 2, 3, 4, 11, 7, 5]
// const people = [
//     {name: 'Yerassyl', budget: 100000},
//     {name: 'Kenzha', budget: 50000},
//     {name: 'Maxim,', budget: 25000}
// ]
// // Method
// cars.unshift('KIA')
// cars.push('Lada')
// const deleteFirstCar = cars.shift()
// const deleteEndCars = cars.pop()
// console.log(cars)

//console.log(cars.reverse()) // выводит начиная с конца назад

// let findedPerson
// for(const person of people){
//     if(person.budget === 100000){
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const index = cars.indexOf('BMW')
// cars[index] = 'Porche'
// console.log(cars)
// const index = people.findIndex(function(person){
//     return person.budget === 100000
// })
// const person = people.find(function(person){
//     return person.budget === 100000
// })
// const person = people.find(person => person.budget === 100000)
// console.log(person)

// console.log(cars.includes('Toyota'))

// const upperCaseCars = cars.map(car => car.toUpperCase())
// const powDouble = num => num ** 2
// const upperCaseFib = fib.map(powDouble)
// const filteredNumbers = upperCaseFib.filter(num => num > 20)
// console.log(filteredNumbers)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript!'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

// const peoples = [
//     {name: 'Yerassyl', budget: 100000},
//     {name: 'Kenzha', budget: 50000},
//     {name: 'Maxim,', budget: 25000}
// ]

// const allBudget = peoples
//     .filter(person => person.budget > 40000)
//     .reduce((acc, person) => {
//         return acc += person.budget
//     }, 0)
// console.log(allBudget)