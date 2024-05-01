const marvel = ["Ironman", "black panther", "captain america"]

const dc = ["superman", "batman", "flash"]


marvel.push(dc) // It will not concat the following arrays, instead it will consider the second array as one single element
console.log(marvel);

const another = marvel.concat(dc) // It will not concat the following arrays, instead it will consider the second array as one single element

console.log(another); 
 
const new_heros = [...marvel, ...dc] //spraed => It will concat the following array

console.log(new_heros)

const another_aray = [1,2,3,[1,3,4], [8,9,[7,8]],9]

const another_aray_results = another_aray.flat(Infinity)//It will concat the arrays inside the arrays
console.log(another_aray_results);

console.log( Array.isArray("parvez"));  //It will convert the string into the elements
console.log( Array.from("parvez"));  //false
console.log( Array.from({name : "parvez"})); //It will return an empty string, we have to specify the particular string to convert

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));//It will return the elements



