let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A People History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${myBook.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }

}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(otherBookSummary.pageCountSummary);

// challenge
// create function - take fahrenheit in - return object with all three

let convertFahrenheit = function(fahrenheit){
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celcius: (fahrenheit - 32) * (5 /9)
    }
}

let temps = convertFahrenheit(74);
console.log(temps);