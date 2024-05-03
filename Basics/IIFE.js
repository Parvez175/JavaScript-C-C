//Immediatly Invoked Function Expression (IIFE)

//global scope ke pollution se problem hoti hai, usse hatane ke liye IIFE use karte hain

// (function chai (){
// console.log(`DB Connected `);
// })()

( function aurcode() {
    // console.log(`DB Connected two`);
})();

(  (name) => {
    console.log(`DB Connected three${ name}`);
})("Parvez");

