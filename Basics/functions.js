function sayMyname() {
    console.log("P");
    console.log("P");
    console.log("P");
    console.log("P");
    console.log("P");
    console.log("P");

}
// sayMyname()//reference =>sayMyname ()=>execution

function addTwonumbers(number1, number2) {
    console.log(number1 + number2);

}

// addTwonumbers(2,3)

function addnumber(number1, number2) {
    return number1 + number2
}
const result = addnumber(4, 5)
console.log("result", result);


function addanother(username) {
    if (!username) {
        console.log("u r goddamm right");
        return
    }
    return `${username} just logged in `
}

console.log(addanother()); 