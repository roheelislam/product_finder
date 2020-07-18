//TODO: add validation
//Take user input
//<Posibility validate>
//Check list to see if it contains user input value
//Return True or False


let readline = require("readline")
const product = require("./models/product.js")
let rl = readline.createInterface(process.stdin, process.stdout)

let itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]
product1 = new product("PL123456", "name", "dose", "substance", "url" )
product2 = new product("PL513872", "name", "dose", "substance", "url" )
product3 = new product("PL999999", "name", "dose", "substance", "url" )
product4 = new product("PL654321", "name", "dose", "substance", "url" )
product5 = new product("PL818181", "name", "dose", "substance", "url" )
let products = [product1, product2, product3, product4, product5]

let productObjects = {}
for (let i = 0; i < products.length; i++){
    let product = products[i]
    productObjects[product.plNumber] = product
}

//productObject[""]

function getProduct(product){
    return productObjects[product]
}

function inputHandler(answer){
    let result = getProduct(answer)
    if (result) {
    console.log(result)
    console.log(result.tostring())
    rl.question("Please press A for search again and Q to quit", (nextMove) => {
            if (nextMove == "Q") {
                rl.close()                
            } else if (nextMove == "A") {
                rl.question("Input your medical  license number: ", inputHandler)
            }            
        }
    )
    }
    else {
    console.log("Product doesn't exists", answer)
    }
}

rl.question("Input your medical  license number: ", inputHandler) 

exports.getProduct = getProduct
