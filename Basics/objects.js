// Objects

const mySym = Symbol("key1")
console.log(mySym);



const user = {
    name : "parvez",
    age : 22,
    email : "parvez@gmail.com",
    isLoggedIn : true,
    [mySym] : "key1"
}

console.log(user["email"])
console.log(typeof user.mySym);
console.log(user["mySym"])

user.email = "parvezzz@gmail.com"
console.log(user.email);

Object.freeze(user)

user.email = "parvezzz@google.com"


user.greeting = function(){
    console.log(`Hello world, ${this.name}`);
}
console.log(user.greeting());

// ++++++++++ second Part ++++++++++++++++++++++++++++++++++++++++


// const tinderuser = new Object()
console.log(tinderuser);

const tinderuser = {
    id : "abc123",
   email : "parvzz@google.com",
   phno : 7474747474
}

console.log(tinderuser.id);

const regularuser = {
    fullname : {
        firstname :{
            namedeclare : "parvez",
            lastname : "Mujawar"
        }
    }
}


// console.log(regularuser.fullname?.firstname);


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const obj4 = Object.assign({},obj1, obj2, obj3)
// console.log(obj4);
const obj5 = {...obj1, ...obj2, ...obj3}
// console.log(obj5);


const userss = [
    {
        id : 23,
        email : "prvvrv@gmail.com"
    },
    {
        id : 23,
        email : "prvvrv@gmail.com"
    },
    {
        id : 23,
        email : "prvvrv@gmail.com"
    }
]

userss[1].email
console.log(tinderuser);

// console.log(Object.keys(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('emajbjil'));






