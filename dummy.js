// var a = 'zeeshan'
// var output = ""
// for (var i = 0; i < a.length; i++)
//     if (a[i]=='e'){
//     output += a[i]
// }

// console.log(output)


// let data = function (age) {
//     if (age >=18) {
//         console.log("You are elegible to vote")
//     }
//     else {
//         console.log("You are not elegible to vote")
//     }
// }

// ((age) => {
//     if (age >= 18) {
//         console.log("You are elegible to vote")
//     }
//     else {
//         console.log("You are not elegible to vote")
//     }
// }) (2);



// (() => {
    
// })


class voter{
    constructor(age) {
        this.age = age;
    }

    checkeligibility() {
        if (this.age > 19) {
            console.log("You are elegible to vote")
        }
        else {
            console.log("You are not elegible to vote")
        }
    
    }
}


const person = new voter(20);
// console.log(person.age)
person.checkeligibility()

export default voter