//TODO: add validation
//Take user input
//<Posibility validate>
//Check list to see if it contains user input value
//Return True or False

let ProductFinder = require("./services/finder.js");
let getInput = require("./app.js");
let getData = require("./repositories/data-provider.js");



function startup() {
  let finder = new ProductFinder(getData);
  getInput(finder);
}

startup();
