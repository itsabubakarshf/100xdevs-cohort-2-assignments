/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vowels="aeiou";
    const strArr=str.toLowerCase().split("")
    let counter=0;
    strArr.map(char=>{
      if(vowels.includes(char)){
        ++counter;
      }
    })
    return counter
}
countVowels("Coding is fun!!!")
module.exports = countVowels;