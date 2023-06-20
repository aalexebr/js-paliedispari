const userWord = prompt('insert word')
console.log('user word', userWord)
// let reverseUserWord;
// let splitString = userWord.split('');

function reverse(){
    return userWord.split("").reverse().join("");
}
reverseUserWord = reverse();
console.log('reversed word', reverseUserWord);

if (userWord == reverseUserWord){
    console.log('the word is a palindrome')
}
else{
    console.log('the word is NOT a palindrome')
};