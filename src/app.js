let readline = require("readline")
let rl = readline.createInterface(process.stdin, process.stdout);

function inputHandler(answer, finder) {
  if (answer === "Q") {
    rl.close()
    return null
  }
  let result = finder.getProduct(answer);
  if (result) {
    console.log(result.tostring());
  } else {
    console.log("Product doesn't exists", answer)
  }

  getInput(finder)
}

function getInput(finder) {
  rl.question(
    "Input your medical license number or Q to quit: ", (answer) =>
    inputHandler(answer, finder)
  );
}

module.exports = getInput;
