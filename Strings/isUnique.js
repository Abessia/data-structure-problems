/* 1/19/2021: Implement an algorithm to determine if a string has all unique characters.
   Challenge: Avoid using any additional data structures other than strings. */

function isUnique(string) {
   if (typeof string !== 'string') {
      return false;
   }

   let storageString = '';
   for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < storageString.length; j++) {
         if(string[i] === storageString[j]) {
            return false;
         }
      }
      storageString += string[i];
   }

   return true;
}

const example1 = "boolean"; //returns false
const example2 = "help"; //returns true
const example3 = 1234; //returns ??
const example4 = "abcdefghijklmnopqrstuvwxyz"; //returns true

console.log(isUnique(example1));
console.log(isUnique(example2));
console.log(isUnique(example3));
console.log(isUnique(example4));
