

const submit = document.getElementById('submit');
submit.addEventListener('submit',
    function(event){
        event.preventDefault();
        // get user choice from imput
            const userChoice = document.getElementById('choice').value
            const userNumber = parseInt(document.getElementById('user-number').value)
            console.log('user choise ', userChoice)
            console.log('user number', userNumber) 
        // random pc number
            let min = 1;
            let max = 5;
            function getRndPcNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            };
            let pcNumber = getRndPcNumber(min, max);
            document.getElementById('random-number').innerHTML = `pc number = ${pcNumber}`
            console.log('pc number',pcNumber)

        if( ((userNumber <= 5) && (userNumber > 0)) && ((userChoice == 'odd') || (userChoice == 'even'))){

            // userChoice == 'odd' || userChoice == 'even'  
            // funtcion of sum userNumber and pcNumber
            function userAndPcSum(userNumber,pcNumber){
                return userNumber + pcNumber
            };
            let userAndPcSumResult = userAndPcSum(userNumber,pcNumber);
            
            console.log('sum of pc and user',userAndPcSumResult) 
        
            // even and odd conditions
            let resultinHtml = `<h4>
                                    sum = ${userAndPcSumResult}
                                </h4>`
            document.body.innerHTML += resultinHtml  

            let finalOutcome;
            

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
                    finalOutcome = `<h4>
                                    YOU WON (choosing even)
                                    </h4>`
                    console.log('user chose even and won')
                }
                else{
                    finalOutcome = `<h4>
                                    YOU LOST (choosing odd)
                                    </h4>`
                    console.log('user chose odd and lost')
                }
            }
            else if (evenValidation == false){
                console.log('the number is odd')
                if(userChoice == 'odd'){
                    finalOutcome = `<h4>
                                    YOU WON (choosing odd)
                                    </h4>`
                    console.log('user chose odd and won')
                }
                else{
                    finalOutcome = `<h4>
                                    YOU LOST (choosing even)
                                    </h4>`
                    console.log('user chose even and lost')
                }
            };
                document.body.innerHTML += finalOutcome
        }
    }
)


//   ORIGINAL WAY
// let userChoice;
// do{
//     userChoice = prompt('even or odd')
//  }
// while (userChoice !== 'odd' && userChoice !== 'even');

// let userNumber;
// do{
//     userNumber = parseInt(prompt('number between 1 and 5'))
//  }
// while ((userNumber >= 5) && (userNumber < 0));


// console.log('user choise ', userChoice)
// console.log('user number', userNumber) 

// //  computer function number
// let min = 1;
// let max = 5;
// function getRndPcNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   };
// let pcNumber = getRndPcNumber(min, max);
// document.getElementById('random-number').innerHTML+= pcNumber
// console.log('pc number',pcNumber) 

// // funtcion of sum userNumber and pcNumber

// function userAndPcSum(userNumber,pcNumber){
//     return userNumber + pcNumber
// };
// let userAndPcSumResult = userAndPcSum(userNumber,pcNumber);

// console.log('sum of pc and user',userAndPcSumResult) 

// // even and odd conditions
// function even (userAndPcSumResult){
//     if (userAndPcSumResult % 2 == 0){
//         return true
//     }
//     return false
// };
// let evenValidation = even(userAndPcSumResult)
// if (evenValidation == true){
//     console.log('then number is even')
//     if(userChoice == 'even'){
//         console.log('user chose even and won')
//     }
//     else{
//         console.log('user chose odd and lost')
//     }
// }
// else if (evenValidation == false){
//     console.log('the number is odd')
//     if(userChoice == 'odd'){
//         console.log('user chose odd and won')
//     }
//     else{
//         console.log('user chose even and lost')
//     }
// };
