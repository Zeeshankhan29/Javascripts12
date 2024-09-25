function greet(name) {
    return "Hello" +" "+ name 
}
console.log(greet('zeeshan'))


var age = 18

if (age<= 18){
    console.log('You are minor')
}
 else {
    console.log('You are eligible to vote')
}


for (var i = 0; i < 5; i++)
    if (i%2==0){
    console.log(i,'even')
    }
    else {
        console.log(i,'odd')
    }

var var1 = 'zeeshan'

for (let char of var1) {
    console.log(char);

}