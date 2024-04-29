const name = "Parvez"
const age = 22

// console.log(`My name is ${name} and my age is ${age}`) 
  
const gameName = new String("Alibaba")

// console.log(gameName);

console.log(gameName.length);
console.log(gameName.endsWith);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const nayavariable = gameName.substring(0,5) //5 will not include (0,1,2,3,4)

const anothername = gameName.slice(1,3)
console.log(anothername);

const newstringone = "  Parvez   "
console.log(newstringone);
console.log(newstringone.trim()); // Remove the spaces from start and end of a string

const url = "https://www.google-docs.com" //replace strings
console.log(url.replace('-', '%20'));




