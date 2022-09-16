// const obj = {
//     name: 'Yera',
//     age: 20,
//     job: 'Fullstack'
// }

// const entries = [
//     ['name', 'Yera'],
//     ['age', 20],
//     ['job', 'Fullstack']
// ]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

// const map = new Map(entries)

// map.set('newField', 42).set(obj, 'Value of object').set(NaN, 'NaN ??')

// console.log(map.get(NaN))
// map.delete('job')
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// 1
// for (let [key, value] of map.entries()){
//     console.log(key, value)
// }

// 2
// for (let val of map.values()){
//     console.log(val)
// }

// 3 
// for (let key of map.keys()){
//     console.log(key)
// }

// 4 
// map.forEach((val, key, m) => {
//     console.log(val, key)
// })

// 5
// const array = [...map] // Array.from(map)
// const mapObj = Object.fromEntries(map.entries())
// console.log(array)
// console.log(mapObj)

//=============================
const users = [
    {name: 'Yerassyl'},
    {name: 'Elena'},
    {name: 'Irina'},
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[1]))



