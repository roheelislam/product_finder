//TODO: add validation
//Take user input
//<Posibility validate>
//Check list to see if it contains user input value
//Return True or False



let readline = require("readline")
let getProduct = require("./product-finder.js")
let rl = readline.createInterface(process.stdin, process.stdout)


function inputHandler(answer){
    if (answer === "Q") {
        rl.close()
        return null
    }  
    let result = getProduct(answer)
    if (result) {
    console.log(result.tostring())
    }
    else {
    console.log("Product doesn't exists", answer)
    }
             
            rl.question("Input your medical license number or Q to quit: ", inputHandler)
        }
        
function startup() {
    rl.question("Input your medical license number or Q to quit: ", inputHandler) 
}

startup()

