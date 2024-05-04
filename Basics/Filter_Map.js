const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
// return num > 4
// } )

const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


const UserBooks = books.filter((bk) => bk.publish === 1981)

const UsrBooks = books.filter((bk2) => {
    return bk2.edition >= 2000 && bk2.genre === "History"
})
// console.log(UsrBooks);
//   console.log(UserBooks);

const NewNums = [1, 2, 3, 5, 6, 7, 8, 9, 10]

// const Numbers = NewNums.map ( (num) => num + 10 )

// console.log(Numbers);

const NewNumbers = NewNums
    .map((num) => num * 10) // map => kuch bhi add/sub/ or math function karwana chahte to map use karne ka 
    .map((num) => num + 1)
    .filter((num) => num >= 40)  // .filter => True or False wala game hai

// console.log(NewNumbers);


//Reduce 

const ReduceNumber = [1, 2, 3] // reduce number will take the values and add it to the end

const NumberReduce = ReduceNumber.reduce(function (acc, currval) {
    console.log(`The Value of acc : ${acc}, the value of currval id : ${currval}`);
    return acc + currval



}, 0)

console.log(NumberReduce);


const ShoppingCart = [
    {
        itemNumber: "1",
        courseName: " Pyhton Course",
        price: 999
    },

    {
        itemNumber: "2",
        courseName: " JavaScript Course",
        price: 9999
    },

    {
        itemNumber: "3",
        courseName: " Java Course",
        price: 99999
    },
     
    {
        itemNumber: "1",
        courseName: " React Course",
        price: 9999
    }
]

 const PricetoPay = ShoppingCart.reduce (function (accc, curr) {
            return accc +  curr.price
 },0 ) 


 console.log(PricetoPay);



















