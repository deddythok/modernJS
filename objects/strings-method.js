let name = 'Conan Edogawa';

// length property
console.log(name.length)

// convert to uppercase
console.log(name.toUpperCase());

// convert to lowercase
console.log(name.toLowerCase());

// includes method
let password = 'abc123pasassword098';
console.log(password.includes('password'));

// trim
console.log(name.trim());

// challenge area

// isValidPassword
let isValidPassword = function(password){
    // if(password.length > 8 && !password.includes('password')){
    //     return true;
    // } else {
    //     return false;
    // }

    // versi pendeknya
    return password.length > 8 && !password.includes('password')
}
// length is more than 8 - and it doesn't contain the word password

console.log(isValidPassword('asdf'));
console.log(isValidPassword('abc123!@#$$%^'));
console.log(isValidPassword('asdfpasdfdsfpassword'));