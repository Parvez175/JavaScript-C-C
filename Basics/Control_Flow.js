// IF statement

const temperature = 50

if (temperature === 40) {
    console.log(`Iam goin to watch Boys Series on amazon prime on june 12`);
}
else {
    console.log(`Iam not going to watch the season on june 12`);


    const balance = 1200

    if (balance < 500) {
        console.log(`less than 500 `);
    } else if (balance < 750) {
        console.log(`less than 750 `);
    } else if (balance < 1000) {
        console.log(`less than 1000`);
    } else (`Equal to 1200`); {
        console.log(`Equal to 1200`);
    }


    const IsuserLoggedn = true
    const Debitcard = true
    const Email = true
    //  const Google = false

    if (IsuserLoggedn && Debitcard) {
        console.log(`User has logged In`);

    }


    if (Email || Google) {
        console.log(`user has Logged In with Either email  or google`);

    }


    switch (key) {
        case value:

            break;

        default:
            break;
    }
    const month = 3

    switch (month) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("Feb");
            break;
        case 3:
            console.log("March");
            break;
        case 1:
            console.log("April");
            break;

        default:
            console.log("Deault match");
            break;
    }


    // Falsy Values 

    // false, 0, -0, BigInt 0n, Undefined, Null, NaN, ""

    // Truthy Values

    "0(zero)", "false", " ", [], {}, function () { }

    const Obj = {}

    if (Object.keys(Obj).length === 0) {
        console.log("Empty Object");
    }

    // Nullish Coalesing Operator (??) : Null, Undefined

    let val1;

    val1 = 10 ?? 20
    val1 = null ?? 30
    val1 = undefined ?? 40

    console.log(val1);


    //Ternary Operator

    const iceTeaPrice = 100
    iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More then 80")

}

















