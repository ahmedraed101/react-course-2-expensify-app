//
// Object destructring
//
// const person = {
//     name: 'ahmed',
//     age: 21,
//     location: {
//         city: 'Mansoura',
//         temp: 29,
//     },
// }

// const { name: firstName = 'Anonymous', age } = person

// console.log(`${firstName} is ${age}`)

// const { city = 'No-Where', temp: temperature } = person.location

// console.log(`It's ${temperature} in ${city}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Hliday',
//     publisher: {
//         name: 'Penguin',
//     },
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

//
// Arra destructuring
//

// const address = ['1500 james ST', 'newyourk', 'california', '12341']
// const [, city, state = 'Cario'] = address
// console.log(`You are in ${city} ${state}`)

const item = ['Coffee {hot}', '$3.00', '$3.50', '$3.75']

const [product, , mediumPrice] = item
console.log(`A medium ${product} costs ${mediumPrice}`)
