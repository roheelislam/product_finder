//TODO: add validation
//Take user input
//<Posibility validate>
//Check list to see if it contains user input value
//Return True or False


var readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout);
let itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]

function isProductPresent(product){
    return itemNames.includes(product)
}

function inputHandler(answer){
    let result = itemNames.includes(answer)
    if (result) {
    console.log("Product exists", answer)
    }
    else {
    console.log("Product doesn't exists")
    }
}

rl.question("Input your medicine license number: ", inputHandler) 

exports.inputHandler = inputHandler
exports.isProductPresent = isProductPresent
