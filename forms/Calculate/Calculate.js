let firstNum = Number(prompt("Please give me a number."));
let secNum = Number(prompt("Please give me another number."));
let thrdNum = Number(prompt("Please give me one more number."));
let finalAnswer = calcAvgSquare(firstNum, secNum, thrdNum);

function calcAvgSquare(num1, num2, num3) {
  return (((num1 + num2 + num3)/3) * num1**2);
} 

alert(`The answer is ${finalAnswer}.`)