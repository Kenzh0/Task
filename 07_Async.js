// Асихронность
// Even Lookconst 
// const timeOut = setTimeout(() => {
//     console.log('After timeout')
// }, 2500)
// clearTimeout(timeOut)

// const interval = setInterval(() => {
//     console.log('After timeout')
// }, 1000)
// clearInterval(interval)

// const delay = (callBack, wait) => {
//     setTimeout(callBack, wait)
// }

// delay(() => {
//     console.log('After 2 seconds')
// }, 2000)

// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//             //reject('Что-то пошло не так')
//         }, wait)
//     }) 
//     return promise
// }
// // delay(2000)
// //     .then(() => {
// //         console.log('After 2 seconds')
// //     })
// //     .catch(err => console.error('Error:', err))
// //     .finally(() => console.log('Finally'))

// const getDate = () => new Promise(resolve => resolve([
//     1, 2, 3, 4, 5, 6, 7
// ]))
// // getDate().then(data => console.log(data))

// async function asyncExample(){
//     try{
//         await delay(3000)
//         const data = await getDate()
//         console.log('Data', data)
//     } catch(e) {
//         console.log(e)
//     } finally {
//         console.log('Finally')
//     }

// }
// asyncExample()