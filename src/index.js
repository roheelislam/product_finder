var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout);
let itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]

//TODO: add validation
//Take user input
//<Posibility validate>
//Check list to see if it contains user input value
//Return True or False


rl.question("Input your medicine license number: ", function(answer) {
    console.log(answer)
})


// function inputHandler(){

// }
