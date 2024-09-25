var l = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat']


// for (let i = 0; i <=l.length - 1; i++){
//     console.log(l[i]);
// }


// l.forEach(function (data,index)
// {
//     console.log(index,data);
// })


for (var i = 0; i <= l.length-1; i++){
    console.log(l[i])
    
}

// var j=[]
// l.forEach(function (data, index) {
//     // console.log(index, data)
//     j.push((index,data))
// })

// console.log(j)
var j = {};
l.forEach(function (data, index) {
    // Push an array representing the tuple (index, data)
    j[index] =data;
    // j['data'] = data;
});

console.log(j);

// var formattedOutput = j.map(pair => `(${pair[0]}, ${pair[1]})`).join(', ');

// // Display the output
// console.log(`[${formattedOutput}]`); // Output: [(0, apple), (1, banana), (2, cherry)]

class Features{
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    extract_name() {
        console.log(`Your name is ${this.name}`)
        
    }

    extract_phone() {
        console.log(`Your phone number is ${this.phone}`)

    }
    exract_email() {
        console.log(`Your email is ${this.email}`)
    }
}

import dotenv from 'dotenv';

dotenv.config();


class Dbconnections{
    constructor(user_name, passwd, db_name, port) {
        this.user_name = process.env.user_name
        this.passwd = process.env.passwd
        this.db_name = process.env.db_name
        this.port = process.env.port
    }


    credential() {
        console.log(
            'Db connection established'
        )
    }
}



export default Features;

