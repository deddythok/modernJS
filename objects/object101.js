let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`)

// challenge
let me = {
    name: 'ClowReed',
    age: 17,
    location: 'Pebayuran'
}

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)
me.age = me.age + 1;
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)