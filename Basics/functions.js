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
// console.log("result", result);


function addanother(username) {
    if (!username) {
        console.log("u r goddamm right");
        return
    }
    return `${username} just logged in `


console.log(addanother()); 

// ++++++++++++++++++++Second Part ++++++++++++++++++++++++

 function AddCart (val1, val2, ...num1){
    return num1 
 }

 console.log(AddCart(2,3,4,5,6)); 

const user ={
    name : "Parvez",
    age : 22
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.name} and my age is ${anyobject.age}`);
}

// handleObject(user)

handleObject({
    username : "Parvez",
    age : 33
})


const mynewarray = [100,200,300]

function newarray (getarray){
    return getarray[0]

}

console.log(newarray(mynewarray))

}
