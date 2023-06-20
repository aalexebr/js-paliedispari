
let userChoice;
do{
    userChoice = prompt('even or odd')
 }
while (userChoice !== 'odd' && userChoice !== 'even');
console.log('user choise ', userChoice)

let userNumber;
do{
    userNumber = parseInt(prompt('number between 1 and 5'))
 }
while (userNumber > 5 );

console.log('user number', userNumber) 

//  computer function number
let min = 1;
let max = 5;
function getRndPcNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };
let pcNumber = getRndPcNumber(min, max);
console.log('pc number',pcNumber) 

// funtcion of sum userNumber and pcNumber

function userAndPcSum(userNumber,pcNumber){
    return userNumber + pcNumber
};
let userAndPcSumResult = userAndPcSum(userNumber,pcNumber);

console.log('sum of pc and user',userAndPcSumResult) 

// even and odd conditions
function even (userAndPcSumResult){
    if (userAndPcSumResult % 2 == 0){
        return true
    }
    return false
};
let evenValidation = even(userAndPcSumResult)
if (evenValidation == true){
    console.log('then number is even')
    if(userChoice == 'even'){
        console.log('user chose even and won')
    }
    else{
        console.log('user chose even and lost')
    }
}
else if (evenValidation == false){
    console.log('the number is odd')
    if(userChoice == 'odd'){
        console.log('user chose odd and won')
    }
    else{
        console.log('user chose odd and lost')
    }
};
