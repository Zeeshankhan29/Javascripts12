import DAtamanage from './utils.js'


const ob = new DAtamanage()
let value = ob.configuration_call()
// console.log(value)
var port = value.port
var db_name = value.db_name
var user = value.user
var passwd = value.passwd
console.log(port)
console.log(db_name)
console.log(passwd)
console.log(user)

