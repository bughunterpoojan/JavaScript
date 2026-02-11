const name = "Poojan"
const repoCount = 15

// console.log(name + repoCount + "Value")

// console.log(`Hello my name is ${name}, my repo count is ${repoCount}`)

const gameName = new String("Poojan-kP")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf("j"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    Poojan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://poojan.com/poojan%20kamani"

console.log(url.replace('%20','-'));
