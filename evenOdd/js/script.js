const userChoice = prompt('even or odd')
const userNumber =parseInt(prompt('number between 1 and 5'))

//  computer function number
let min = 1
let max = 5
function getRndPcNumber(min, max) {
    return Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
  }
let pcNumber = getRndPcNumber(min, max)
console.log(pcNumber) 

// funtcion of sum userNumber and pcNumber

function userAndPcSum(userNumber,pcNumber){
    return userNumber + pcNumber
}
let userAndPcSumResult = userAndPcSum(userNumber,pcNumber)

console.log(userAndPcSumResult) 

// even and odd conditions
function even ()