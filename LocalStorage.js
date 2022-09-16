// const number = 42
// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', number.toString())
// console.log(localStorage.getItem('number'))
// number.clear()

const object = {
    name: 'Yera',
    age: 20
}

localStorage.setItem('person', JSON.stringify(object))
const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.age = 21

window.addEventListener('storage', event => {
    console.log(event)
})
