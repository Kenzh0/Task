// const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
// const citiesEurope = ['Берлин', 'Прага', 'Париж']

// const citiesRussiaWithPopulation = {
//     Moscow: 20,
//     SaintPetersburg: 8,
//     Kazan: 5,
//     Novosibirsk: 3
// }
// const citiesEuropeWithPopulation = {
//     Berlin: 10,
//     Prague: 3,
//     Paris: 2
// }

// const allCities = [...citiesEurope, ...citiesRussia]
// const allCities = citiesEurope.concat(citiesRussia) // Давно использовали жтот метод
// console.log(allCities)

// console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})

// const numbers = [1, 2, 3, 4, 5, 7, 42]
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers)) // Давно использовали apply, чтобы найти максимум numbers

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))

// Rest
function sum(a, b, ...res){
    return a + b + res.reduce((a, i) => a + i, 0)
}

const numbers = [1, 2, 3, 4, 5, 6, 7]
// console.log(sum(...numbers))

// const [a, b, ...other] = numbers
// console.log(a, b, other)

const person = {
    name: 'Yera',
    age: 20,
    city: 'Astana',
    country: 'Qazaqstan'
}

const {name, age, ...address} = person
console.log(name, age, address)