// const heading = document.getElementById('hello')
// const heading2 = document.querySelector('h2')
// const h2List = document.querySelectorAll('h2')
// const heading3 = h2List[h2List.length - 1]
// //console.log(heading2) 
// //console.dir(heading.textContent)


// setTimeout(() => {
//     addStylesTo(heading, 'Изучаем JavaScript')
// }, 2000)

// setTimeout(() => {
//     addStylesTo(heading2, 'Практикуйся!', 'green')
// }, 3000)

// const link = heading3.querySelector('a')
// link.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log('Click on link', event.target.getAttribute('href'))
//     const url = event.target.getAttribute('href')
//     window.location = url
// })
// setTimeout(() => {
//     addStylesTo(link, 'И все получиться)', 'blue', '3rem')
// }, 4000)

// const addStylesTo = (node, text, color = 'red', fontSize) => {
//     node.textContent = text
//     node.style.color = color
//     node.style.textAlign = 'center'
//     node.style.backgroundColor = 'black'
//     node.style.padding = '2rem' 
//     node.style.display = 'block'
//     node.style.width = '100%'
//     if(fontSize) {
//         node.style.fontSize = fontSize
//     }
// }

// heading.onclick = () => {
//     console.log('Onclicks')
//     if (heading.style.color === 'red'){
//         heading.style.color = '#000'
//         heading.style.backgroundColor = '#fff'
//     } else {
//         heading.style.color = 'red'
//         heading.style.backgroundColor = '#000'
//     }
// }

// heading2.addEventListener ('dblclick', () => {
//     if (heading2.style.color === 'green'){
//         heading2.style.color = '#000'
//         heading2.style.backgroundColor = '#fff'
//     } else {
//         heading2.style.color = 'green'
//         heading2.style.backgroundColor = '#000'
//     }
// })
