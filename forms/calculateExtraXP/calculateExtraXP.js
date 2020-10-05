/*
let decision = prompt("Would you like to 1. Do an average calculation or 2. Do a random multiplication?")

if (decision == "1") {
  firstNum = Number(prompt("Please give me a number."));
  secNum = Number(prompt("Please give me another number."));
  thrdNum = Number(prompt("Please give me one more number."));
  finalAnswer = calcAvgSquare(firstNum, secNum, thrdNum);
    function calcAvgSquare(num1, num2, num3) {
    return (((num1 + num2 + num3)/3) * num1**2);
  }    
  alert(`The answer is ${finalAnswer}.`)
} else if (decision == "2") {
  let frthNum = Number(prompt("Please give me a number."));
  let randomNumber = Number(Math.floor(Math.random() * 10) + 1)
  let otherFinalAnswer = randomMultiply(frthNum, randomNumber);
  function randomMultiply(num4, random) {
    return (num4 * random)
  }
  alert(`The result of multiplying the random number ${randomNumber} with ${frthNum} is ${otherFinalAnswer}.`)
} else {
  alert("I'm sorry, I don't know what you chose.")
}
*/