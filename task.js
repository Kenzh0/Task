// console.log(Number.MAX_SAFE_INTEGER) // (−2 + 1 or -9,007,199,254,740,991) 
// console.log(Number.isNaN(45))
// console.log(isFinite(0))
// 'Hello'.substring(0, 2.5)
// let destination = 'world'
// let greeting = `Hello, ${destination.toUpperCase()}`
// console.log(greeting)

// let harry = {
//     name: 'Harry Smith',
//     age: 42, // Add more properties below
// }
// let field = 'Age'
// let harrysAge = harry[field.toLowerCase()]
// console.log(harrysAge)

// var o = {};
// var o = {a: 'foo', b: 42, c: {}};

// var a = 'foo', b = 42, c = {};
// var o = {a: a, b: b, c: c};

// var o = {
//   property: function ([parameters]) {},
//   get property() {},
//   set property(value) {}
// };

// var obj = { a: 1 };
// var copy = Object.assign({}, obj);
// console.log(copy); // { a: 1 }

// var firsDigits = { a: 1 }
// var secondDigits = { b: 5 }
// var thirdDigits = { c: 7 }
// var obj = Object.assign(firsDigits, secondDigits, thirdDigits)
// console.log(obj)
// console.log(firsDigits)

// Example: copying symbolic properties
// var firsDigits = { a: 1 }
// var secondSymbol = {[Symbol('foo')]: 2 }
// var obj = Object.assign({}, firsDigits, secondSymbol)
// console.log(obj)

// What is Prototype?
// const person = {           // or const person = new Object({})
//     name: 'Yerassyl',
//     age: 20,
//     greet: () => {
//         console.log('Greet!')
//     }
// }

// Object.prototype.sayHello = () => {
//     console.log('Hello, Yerassyl')
// }

// const lena = Object.create(person)
// lena.name = 'Lena'

// const str = new String('I am string')

//------------------------------------------------------------------------------//

// What is the context of this?
// function hello() {
//     console.log('Hello', this)
// }



// const person = {
//     name: "Yerassyl",
//     age: 20,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function(job, phoneNumber) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone number is ${phoneNumber}`)
//         console.groupEnd()
//     }
// }

// const lena = {
//     name: 'Lena',
//     age: 18
// }

// const fnLenaInfoLog = person.logInfo.bind(lena) // (2) or (lena, 'Backend', '8-778-424-42-42')
// fnLenaInfoLog('Backend', '8-778-424-42-42')  // (2) or fnLenaInfoLog()

// person.logInfo.call(lena, 'Backend', '8-778-424-42-42') 
// person.logInfo.apply(lena, ['Backend', '8-778-424-42-42'])

// const array = [1, 2, 3, 4, 5]
// const multBy = (array, n) => {
//     return array.map((i) => {
//         return i * n
//     })
// }
// Array.prototype.multBy = function(n) {
//     return this.map((i) => {
//         return i*n
//     })
// }
// console.log(array.multBy(5))

//---------------------------------------------------------------------------//

// What is Closure? 
// function createCalcFunction(n) {
//     return () => {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n){
//     return function(num){
//         return n + num
//     }
// }
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(10))
// console.log(addOne(41))

// console.log(addTen(10))
// console.log(addTen(41))

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru') 

// console.log(comUrl('google'))
// console.log(ruUrl('yandex'))

// Task
// function logPerson(){
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const personFirst = { name: 'Михаил', age: 22, job: 'Frontend' }
// const personSecond = { name: 'Елена', age: 19, job: 'Backend' }

// bind(personFirst, logPerson)()
// bind(personSecond, logPerson)()

// function bind (context, fn){
//     return function(...args){
//         fn.apply(context, args)
//     }
// }

// Async
// console.log('Start')
// console.log('Start 2')
// function timeout(){
//     console.log('After 2 seconds')
// }
// window.setTimeout(function(){
//     console.log('Inside timeout, after 5 seconds')
// }, 5000)
// setTimeout(timeout())
// console.log('End')

// Promise
// console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')
    
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)

// console.log('Request data...')
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)    
//     }, 2000)

// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000) 
//     })

// })
//     .then((clientData) => {
//         console.log('Data received', clientData)
//         return clientData
//     })
//     .then ((data) => {
//         console.log('Modified', data)   
//     })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => console.log('Finally'))

// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// // sleep(2000).then(() => console.log('After 2 seconds'))
// Promise.all([sleep(2000), sleep(5000)]).then(() => {
//     console.log('All promises')
// })
// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//     console.log('Race promises')
// })

// Promise.all
// var p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "one");
//   });
//   var p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "two");
//   });
//   var p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "three");
//   });
//   var p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "four");
//   });
//   var p5 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, "five");
//   });
  
//   Promise.all([p1, p2, p3, p4, p5]).then(value => {
//     console.log(value);
//   }, reason => {
//     console.log(reason)
//   })

// Promise.race
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });

// var p1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, "один");
// });
// var p2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, "два");
// });

// Promise.race([p1, p2]).then(function(value) {
//   console.log(value); // "два"
//   // Оба вернули resolve, однако p2 вернул результат первым
// });

// var p3 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, "три");
// });
// var p4 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, "четыре");
// });

// Promise.race([p3, p4]).then(function(value) {
//   console.log(value); // "три"
//   // p3 быстрее, поэтому выведется значение его resolve
// }, function(reason) {
//   // Не вызывается
// });

// var p5 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, "пять");
// });
// var p6 = new Promise(function(resolve, reject) {
//     setTimeout(reject, 100, "шесть");
// });

// Promise.race([p5, p6]).then(function(value) {   
//     console.log(value)
// }, function(reason) {
//     console.log(reason)
// });

// const person = Object.create (
//     {
//         calculate: {
//             age: new Date().getFullYear() - this.birthYear
//         }
//     }, 
//     {
//         name: {
//             value: 'Yerassyl',
//             enumerable: true,
//             writable: true,
//             configurable: true  // разрешает удалить объект
//         },
//         birthYear: {
//             value: 2001,
//             enumerable: true,
//             writable: true,
//             configurable: false  // запрещяет удалить объект
//         },
//         age: {
//             get(){
//                 return new Date().getFullYear() - this.birthYear
//             },
//             set(value){
//                 document.body.style.background = 'red'
//                 console.log('Set age', value)
//             }
//         }
//     }
// )

// person.name = 'Kenzha'

// for(let key in person) {
//     if (person.hasOwnProperty(key)){
//         console.log('key', key, person[key])  
//     }
// }

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }

// ES6 class
// class Animal {  
//     static type = 'ANIMAL'
//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice(){
//         console.log('I am Animal')
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal{
//     static type = 'CAT'

//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }

//     voice(){
//         super.voice()
//         console.log('I am cat')
//     }

//     get ageInfo(){
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })

// class Component {
//     constructor(selector){
//         this.$el = document.querySelector(selector)
//     }

//     hide(){
//         this.$el.style.display = 'none'
//     }

//     show(){
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Component {
//     constructor(options){
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color

//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'green'
// })

// const box2 = new Box({
//     selector: '#box2',
//     size: 120,
//     color: 'blue'
// })

// class Circle extends Box {
//     constructor(options){
//         super(options)

//         this.$el.style.borderRadius = '50%'
//     }
// }

// const circle = new Circle({
//     selector: '#circle',
//     size: 90,
//     color: 'red'
// })

// How does async, await work?
// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(), ms))
// }

//delay(2000).then(() => console.log('After 2 seconds'))
// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodo(){
//     console.log('Fetch todo started...')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }

// fetchTodo()
//     .then(data => {
//         console.log('Data', data)

// })
//     .catch(e => console.log(e))

// async function fetchAsyncTodo() {
//     console.log('Fetch todo started...')
//     try {
//         await delay(2000) 
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data:', data)
//     } catch(e) {
//         console.error(e)
//     } finally {

//     }
// }

// fetchAsyncTodo()

// Proxy
// const person = {
//     name: 'Yerassyl',
//     age: 20,
//     job: 'FullStack'
// }

// const op = new Proxy(person, {
//     get(target, prop){
//         // console.log('Target', target)
//         // console.log('Prop', prop)
//         console.log(`Getting target ${prop}`)
//         return target[prop]
//     },
//     set(target, prop, value) {
//         if(prop in target) {
//             target[prop] = value
//         } else {
//             throw new Error(`No ${prop} field in target`)
//         }
//     },
//     has(target, prop){
//         return ['name', 'age', 'job'].includes(prop)
//     },
//     deleteProperty(target, prop) {
//         console.log('Deleting...', prop)
//         delete target[prop]
//         return true
//     }
// })

// const log = text => `Log: ${text}`

// const fp = new Proxy(log, {
//     apply(target, thisArgs, args) {
//         console.log('Calling fp...')

//         return target.apply(thisArgs, args).toUpperCase()
//     }
// })

// class 
// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }

// const PersonProxy = new Proxy(Person, {
//     constructor(target, args){ 
//         console.log('Constructor...')
//         return new Proxy(new target(...args), {
//             get(t, prop){
//                 console.log(`Getting prop "${prop}"`)
//                 return t[prop]
//             }
//         })
//     }
// })

// const p = new PersonProxy('Elena', 18)

// Proxy part2
// const withDefaultValue = (target, defaultValue = 0) => {
//     return new Proxy(target, {
//         get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
//     })
// }

// const position = withDefaultValue({
//     x: 24,
//     y: 42
// }, 0)

// console.log(position)

// const withHiddenProp = (target, prefix = '_') => {
//     return new Proxy(target, {
//         has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
//         ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
//         get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
//     })
// }

// const data = withHiddenProp({
//     name: 'Yerassyl',
//     age: 20,
//     _uid: '1234567'
// })

// Optimization
// const userData = [
//     {id: 1, name: 'Yerassyl', job: 'Fullstack', age: 20},
//     {id: 2, name: 'Lena', job: 'Front', age: 25},
//     {id: 3, name: 'Max', job: 'Student', age: 20},
//     {id: 4, name: 'Petr', job: 'Fullstack', age: 21},
// ]

// const index = {}
// userData.forEach(i => (index[i. id] = i))

// const IndexArray = new Proxy(Array, {
//     construct(target, [args]){
//         const index = {}
//         args.forEach(item => (index[item.id] = item))

//         return new Proxy (new target (...args), {
//             get(arr, prop) {
//                 switch (prop) {
//                     case 'push':
//                         return item => {
//                             index[item.id] = item
//                             arr[prop].call(arr, item)
//                         }
//                     case 'findById': return id => index[id]
//                     default:
//                         return arr[prop]
//                 }
//             }
//         })
//     }
// })

// const users =  new IndexArray([
//     {id: 1, name: 'Yerassyl', job: 'Fullstack', age: 20},
//     {id: 2, name: 'Lena', job: 'Front', age: 25},
//     {id: 3, name: 'Max', job: 'Student', age: 20},
//     {id: 4, name: 'Petr', job: 'Fullstack', age: 21}
// ])

// Symbol iterator
// function* strGenerator(){
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = strGenerator()

// function* numberGen(n = 10) {
//     for(let i = 0; i < n; i++){
//         yield i
//     }
// }

// const num = numberGen(5)
// const iterator = {
//     [Symbol.iterator](n = 10){
//         let i = 0
//         return {
//             next(){
//                 if(i < n){
//                     return { value: ++i, done: false }
//                 }
//                 return { value: undefined, done: true }
//             }
//         }
//     }
// }

// for(let k of iterator){
//     console.log(k)
// }

// function* iter(n = 10){
//     for(let i = 0; i < n; i++){
//         yield i
//     }
// }

// for(let k of iter(5)){
//     console.log(k)
// }

// forEach, map, filter, reduce, find, findIndex
// const people = [
//     {name: 'Yera', age: 20, budget: 100000},
//     {name: 'Lena', age: 18, budget: 80000},
//     {name: 'Elena', age: 30, budget: 90000},
//     {name: 'Maxim', age: 18, budget: 50000},
//     {name: 'Jone', age: 21, budget: 100000},
// ]

// for(let i = 0; i < people.length; i++){
//     console.log(people[i])
// }

// for(let person of people){
//     console.log(person)
// }

//Foreach
// people.forEach(function(person, index, pArr){
//     console.log(person)
// })

// people.forEach(person => console.log(person))

// Map
// const newPeople = people.map(person =>  `My name is ${person.name}, age: ${person.age}`)
// console.log(newPeople)

// Filter
// const adults = []
// for(let i = 0; i < people.length; i++){
//     if(people[i].age >= 18){
//         adults.push(people[i])    
//     }
// }
// console.log(adults)
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)

//  Reduce
// let amount = 0
// for(let i = 0; i < people.length; i++){
//     amount += people[i].budget
// }
// console.log(amount)

// const amount = people.reduce((total, person) =>  total += person.budget, 0)
// console.log(amount)

// Find
// const yera = people.find(person => person.name === 'Yera')
// console.log(yera)

// FindIndex
// const yeraIndex = people.findIndex(person => person.name === 'Yera')
// console.log(yeraIndex)

// Filter
// const newPeople = people
//     .filter(person => person.budget > 90000)
//     .map(person => {
//         return {
    
//             info: `${person.name} ${person.age}`,
//             budget: person.budgetnd
//         }
//     })
//     .reduce((total, person) => total + person.budget, 0)

// console.log(newPeople)

// const aboutPerson = (s, name, age) => { 
//     console.log(s, name, age);
//     return `${age > 0 ? 'Родился' : 'Еще не родился'} ${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const namePerson = 'Yera';
// const agePerson = 20;

// const output =  aboutPerson`My name is ${namePerson}, age ${agePerson}`;
// console.log(output)

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.map(function(a, b,c,d,f
//     ){
//     return a+b+c+d+f;
// })

// console.log(sum)

// const pow2 = num => num ** 2;

// const pow2Arr = arr.map(pow2);
// console.log(pow2Arr);

// const people = [
//     {name: 'Yera', budget: 100000},
//     {name: 'Lera', budget: 70000},
//     {name: 'Yera', budget: 40000}
// ]

// const allBudget = people.filter(person => person.budget > 50000).reduce((acc, person) => {
//     return acc += person.budget
// }, 0)

// console.log(allBudget);

// const delay = (callback, wait = 2000) => {
//     setTimeout(callback, wait);
// }

// delay(()=> {
//     console.log('After 2 seconds')
// }, 2000)

// const delay = (wait = 2000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//             //reject('Что-то пошло е так, повторите позже!');
//         }, wait)
//     })
//     return promise;
// }

// delay(2500)
//     .then(() => {
//         console.log('After 2 seconds')
//     })
//     .catch(err => console.error('Error:', err))
//     .finally(() => console.log('Finally'))

// const getData = () => new Promise(resolve => resolve([1, 2, 3, 42, 7]))
// //getData().then(data => console.log(data))

// async function asyncExample() {
//     try{
//       await delay(3000);
//         const data = await getData();
//         console.log('Data', data);  
//     } catch(e){
//         console.log(e);
//     } finally{
//         console.log('Finally');
//     }
    
// }

// asyncExample()  

// const array = [1, 2, 3, 4, 5];
// Array.prototype.multBy = function(n){
//     return this.map(function(i){
//         return i * n;
//     })
// }

// console.log(array.multBy(5));

// function urlGenerator(domain){
//     return function(url){
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// console.log(comUrl('google'))

// function bind(context, fn){
//     return function(...args){
//        fn.apply(context, args)  
//     } 
// }

// function logPerson(){
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = {name: 'Yera', age: 2, job: 'Frontend'};
// const person2 = {name: 'Ger', age: 42, job: 'SMM'};

// bind(person1, logPerson)();
// bind(person2, logPerson)();

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backendData = {
//         server: 'awd',
//         port: 2000,
//         status: 'working'
//     }
//     resolve(backendData);  
//     }, 2000)
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             reject(data);
//         }, 2000)
//     })
// })
// .then(clientData => {
//     console.log('Data received', clientData)
// })
// .catch(err => console.error('Error: ', err))

// const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));
// sleep(2000).then(() => console.log('After 2 seconds'))

// Promise.all([sleep(2000), sleep(5000)]).then(() => console.log('All promises'));
// Promise.race([sleep(2000), sleep(5000)]).then(() => console.log('Race promises'));

// Object cretate
// const person = Object.create(
//     {}, 
//     {
//         name: {
//             value: 'Yerassyl',
//             enumerable: true,
//             writable: true,
//             configurable: true
//         },

//         birthYear: {
//             value: 1999,
//             enumerable: true,
//             writable: true,
//             configurable: true
//         },

//         age:{
//             get(){
//                 return new Date().getFullYear() - this.birthYear
//             },
//             set(value){
//                 document.body.style.background = 'red';
//                 console.log('Set value: ', value);
//             }
//         }
//     })

// for(let key in person){
//     console.log('Key', key, person[key])
// }

// class Animal {
//     constructor(options){
//         this.name = options.name,
//         this.age = options.age,
//         this.hasTail = options.hasTail
//     }

//     voice(){
//         console.log('I am Animal')
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal{
//     static type = 'Cat';

//     constructor(options){
//         super(options)
//         this.color = options.color;
//     }

//     voice(){
//         super.voice();
//         console.log('I am cat')
//     }

//     get ageInfo(){
//         return this.age * 7;
//     } 

//     set ageInfo(newAge){
//         this.age = newAge;
//     }
// }

// const cat = new Cat({
//     name: 'Mur',
//     age: 5,
//     hasTail: true,
//     color: 'black'
// })

// class Component{
//     constructor(selector){
//         this.$el = document.querySelector(selector);
//     }

//     hide(){
//         this.$el.style.display = 'none';
//     }

//     show(){
//         this.$el.style.display = 'block';
//     }
// }

// class Box extends Component{
//     constructor(options){
//         super(options.selector);

//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.background = options.color;
//     }
// }

// class Circle extends Box{
//     constructor(options){
//         super(options);
//         this.$el.style.borderRadius = '50%';
//     }   
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })

// const box2 = new Box({
//     selector: '#box2',
//     size: 50,
//     color: 'green'
// })

// const circle1 = new Circle({
//     selector: '#circle',
//     size: 100,
//     color: 'black'
// })

// const delay = ms => {
//     return new Promise(resolve => setTimeout(() => resolve(), ms));
// }

// delay(2000).then(() => console.log('2 seconds'));

// const url = 'https://jsonplaceholder.typicode.com/todos'

// Method 1: with Promise
// function fetchTodos(){
//     console.log('Fetch todo started...');
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json());
// }

// fetchTodos()
//     .then(data => console.log('Data:', data))
//     .catch(e => console.error(e));

// Method 2: with async, await
// async function fetchAsyncTodo(){
//     console.log('Fetch todo started...');
//     try{
//         await delay(2000);
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log('Data', data);
//     }catch (e){
//         console.error(e)
//     }

// }

// fetchAsyncTodo();

// Proxy with Object
// const person = {
//     name: 'Yera',
//     age: 20,
//     job: 'Fullstack'
// }

// const objectProxy = new Proxy(person, {
//     get(target, prop){
//         // console.log(`Getting prop ${prop}`);
//         if(!(prop in target)){
//             return prop.split('_').map(p => target[p]).join(' ');
//         }
//         return target[prop];
//     },
//     set(target, prop, value){
//         if(target in prop){
//             target[prop] = value;
//         } else{
//             throw new Error(`No ${prop} field in target`);
//         }
//     },
//     has(target, prop){
//         return ['age', 'job'].includes(prop)
//     }, 
//     deleteProperty(target, prop){
//         console.log('Deleting', prop);
//         delete target[prop];
//         return true; 
//     }
// })

// // Proxy with Functions
// const log = text => `Log: ${text}`

// const fp = new Proxy(log, {
//     apply(target, thisArg, args){
//         console.log('Calling fn...')
//         return target.apply(thisArg, args).toUpperCase()
//     }
// })

// // Proxy with Classes
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const PersonProxy = new Proxy(Person, {
//     construct(target, args){
//         console.log('Construct...');

//         return new Proxy(new target(...args), {
//             get(t, prop){
//                 console.log(`Getting prop ${prop}`);
//                 return t[prop];
//             }
//         })
//     }
// })

// const p = new PersonProxy('Yera', 20);

// const withDefaultValue = (target, defaultValue = 0) => new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
// })

// const position = withDefaultValue({
//     x: 42,
//     y: 7
// }, 0)

// console.log(position)

// Hidden properties
// const withHiddenProps = (target, prefix = '_') => {
//     return new Proxy(target, {
//         has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
//         ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
//         get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
//     })
// }

// const data = withHiddenProps({
//     name: 'Yera',
//     age: 20,
//     _number: '77777'
// })

// const userData = [
//     {id: 1, name: 'Yera', age: 20, job: 'Fullstack'},
//     {id: 2, name: 'Lera', age: 18, job: 'Backend'},
//     {id: 3, name: 'Gena', age: 35, job: 'Frontend'},
//     {id: 4, name: 'Maxim', age: 19, job: 'Fullstack'}
// ]

// const index = {};
// userData.forEach(i => (index[i.id] = i)) 

// const indexArray = new Proxy(Array, {
//     construct(target, [args]){
//         const index = {}
//         args.forEach(i => index[i.id] = i)
//         return new Proxy (new target(...args), {
//             get(arr, prop){
//                 switch(prop){
//                     case 'push': return item => {
//                         index[item.id] = item
//                         arr[prop].call(arr, item)
//                     }
//                     case 'findById': return item => index[id]
//                     default: return arr[prop]
//                 }
//             }
//         })
//     }
// })

// const users = new indexArray([
//     {id: 1, name: 'Yera', age: 20, job: 'Fullstack'},
//     {id: 2, name: 'Lera', age: 18, job: 'Backend'},
//     {id: 3, name: 'Gena', age: 35, job: 'Frontend'},
//     {id: 4, name: 'Maxim', age: 19, job: 'Fullstack'}
// ])

// Iterator
// function* strGenerator(){
//     yield 'h'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = strGenerator()

// function* numGenerator(n = 10){
//     for(let i = 0; i < n; i++){{
//         yield i
//     }}
// }

// const num = numGenerator(3)

// const iterator = {
//     gen(n = 10){
//         let i = 0
//         return{
//             next(){
//                 if(i < n){
//                     return {value: ++i, done: false}
//                 }
//                 return {value: undefined, done: true}
//             }
//         }
//     }
// }

// const people = [
//     {name: 'Yera', age: 20, budget: 100000},
//     {name: 'Lera', age: 18, budget: 100000},
//     {name: 'Denis', age: 26, budget: 80000},
//     {name: 'Jon', age: 35, budget: 90000},
//     {name: 'Gena', age: 30, budget: 50000},
//     {name: 'Lana', age: 21, budget: 40000}
// ]
// ES5
// for(let i = 0; i < people.length; i++){
//     console.log(people[i])
// }

// ES6
// for(let person of people){
//     console.log(person)
// }

// forEach
// people.forEach(person => console.log(person))

// map 
// const newPeople = people.map(person => `${person.name} ${person.age}`)
// console.log(newPeople)

//filter
// const adults = []
// for(let i = 0; i < people.length; i++){
//     if(people[i].age > 18){
//         adults.push(people[i])
//     }
// }
// console.log(adults)

// with method filter()
// const adults = people.filter(person => person.age > 18)
// console.log(adults)

// Reduce
// const allBudget = people.reduce((total, person) => total += person.budget, 0)
// console.log(allBudget)

// find
// const findPerson = people.find(person => person.name === 'Yera') 
// console.log(findPerson)

// findIndex
// const findIndexByPerson = people.findIndex(person => person.name === 'Yera')
// console.log(findIndexByPerson)

// const newPeople = people
//     .filter(person => person.budget > 60000)
//     .map(person => {return {info: `${person.name}`, budget: person.budget}})
//     .reduce((total, person) => total += person.budget, 0)
// console.log(newPeople)

// 
// const obj = {
//     name: 'Yera',
//     age: 20,
//     job: 'Fullstack'
// }

// const arr = [
//     ['name', 'Lena'],
//     ['age', 20],
//     ['job', 'Fullstack']
// ]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(arr))

// const map = new Map(arr)
// map
//     .set('newField', 42)
//     .set(obj, 'Value of Object')
//     .set(NaN, 'NaN ??')

// console.log(map.get(NaN))
// map.delete('job')
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// =================================
// for(let [key, value] of map.entries()){
//     console.log(key, value)
// }

// const mapObj = Object.fromEntries(map)
// console.log(mapObj)

//=================================================
// const users = [
//     {name: 'Lena'},
//     {name: 'Egor'},
//     {name: 'Erzhan'}
// ]

// const visits = new Map()
// visits
//     .set(users[0], new Date())
//     .set(users[1], new Date(new Date().getTime()+ 1000 * 60))
//     .set(users[2], new Date(new Date().getTime() + 5000 * 60))

// function lastVisit(user){
//     return visits.get(user)
// }

// console.log(lastVisit(users[2]))

// Set
// const set = new Set([1, 2, 3, 3, 3, 4, 4, 5])
// set.add(10).add(42).add(7)
// console.log(set)
// console.log(set.size)
// console.log(set.has(20))
// console.log(set.delete(1))
// console.log(set.entries())
// console.log(set.clear())

// for(let key of set){
//     console.log(key)
// }

// ===================================
// const uniqValues = (array) => Array.from(new Set(array))
// console.log(uniqValues([1, 3, 3, 3, 5, 42, 42]))

// weakMap
// let obj = {name: 'Yera'}
// const arr = [obj]
// obj = null
// console.log(arr[0]) 

// const map = new WeakMap([
//     [obj, 'obj data']
// ])
// obj = null
// console.log(map.get(obj))

// =================================
// const cache = new WeakMap()
// const cacheUser = (user) => {
//     if(!cache.has(user)) {
//         cache.set(user, Date.now()) 
//     } 
//     return cache.get(user)
// }

// const yera = {name: 'Yerassyl'}
// const lena = {name: 'Elena'}

// cacheUser(yera)
// cacheUser(lena)
// // lena = null
// console.log(cache.has(yera))
// console.log(cache.has(lena))

// WeakSet
// const users = [
//     {name: 'Yera'},
//     {name: 'Lena'},
//     {name: 'Kuka'}
// ]

// const visits = new WeakSet()
// visits.add(users[0]).add(users[1]) 

// console.log(visits.has(users[0]))
// console.log(visits.has(users[1]))

// let month = prompt('Enter number');
// month = month.toLowerCase();
// switch (true) {
//   case month == 'January':
//     console.log(' January has 31 days.');
//     break;
//   case month == 'February':
//     console.log('February has 28 days.');
//     break;
//   default:
//     console.log('Entered value was not a month');
// }
// -----------------------------------------------------------
// const arr = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// console.log(arr)

// const arr = new Array()
// console.log(arr)

// const eightEmptyValues = new Array(8).fill('x')
// console.log(eightEmptyValues)

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice(0,1)
// console.log(numbers)          

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(3, 3, 7, 8, 9)
// console.log(numbers.splice(3, 3, 7, 8, 9))

// Practices Day 6
// let i = 0;
// do {
//     console.log(i)
//     i++
// } while (i <= 5)

// for(let i = 0; i < 100; i++){
//     if(i % 2 === 0) {
//        console.log(i) 
//     }
// }

// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
    
//     // Пока не дошли до конца массива - тасуем...
//     while (0 !== currentIndex) {
  
//       // берем оставшийся элемент
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
  
//       // Меняем местами его с текущим элементом
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
  
//     return array;
//   }
  
  
// function makeid(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }
// console.log(makeid(5));

// let r = (Math.random() + 1).toString(36).substring(7);
// console.log("random", r);

// const countries = ['Kazakhstan', 'Finland', 'Ireland', 'Iceland'];
// let newCountries = [];
// for(let i = 0; i < countries.length; i++){
//     if(countries[i].includes('land')){
//         newCountries.push(countries[i])
//     }
// }
// console.log(newCountries)

const countries = ['Kazakhstan', 'Finland', 'Ireland', 'Iceland'];



// const longest = countries.reduce((a, b) => a.length > b.length ? a : b)
// console.log(longest)

