// primitive

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol('123')
// const another_id = Symbol('123')
// console.log(id == another_id);


// reference(non-primitive)
// Array, Objects, Functions

// const hero = ["shaktiman", "nagraaj", "doga"]
// let myObj = {
//     name : "Poojan",
//     age : 12,
// }

// const myFunc = function() {
//     console.log("Hello World!");
    
// }

// ***********************************

// stack(primitive)
// heap(non primitive)

let name = "Victus"
let anothername = name
anothername = "Poojan"

console.log(name);
console.log(anothername);

let userOne = {
    email : "poojan@iitram.ac.in",
    upi : "poojan@ybl"
}

let userTwo = userOne
userTwo.email = "poojan@google.com"

console.log(userOne.email);
console.log(userTwo.email);
