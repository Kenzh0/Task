function calcValues(a, b){
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

const [sum, sub, ...rest] = calcValues(42, 10)
// console.log(sum, sub, rest)

// Object
const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Saint-Petersburg'
    }
}

// const {
//     name: firstName = 'Bon', 
//     age, 
//     car = 'Машины нет'
// } = person
// const {name, ...info} = person
// console.log(name, info)

const logPerson = ({name: firstName = 'Не указано', age}) => console.log(firstName + ' ' + age)
logPerson(person)