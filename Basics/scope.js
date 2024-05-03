 var a = 10
let b = 20
const c = 30


if (true) {
    var a = 10
let b = 20
const c = 30
}

console.log(a) //It will return the value => worst case to declare the vaiable
console.log(b) //It will not return the value
console.log(c) //It will not return the value





if (true) {
    const username = "Parvez"
    if (username === "Parvez") {
        const website = " Github"
         console.log(username + website);
    }
     console.log(website);
}

console.log(username);

console.log(Addone(6));

function Addone (num){
    return num + 1
}

const addtwo = function(num){
    return num + 1

}

console.log(addtwo(9));




