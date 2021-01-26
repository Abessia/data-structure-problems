/* 1/26/2021: Given two strings, write a method to decide if one is a permutation of the other */

function checkPermutation(string1, string2) {
  let string1Obj = {};
  let string2Obj = {};

  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  for (let i = 0; i < string1.length; i++) {
    let currentChar = string1[i];
    if (string1Obj[currentChar] !== undefined) {
      string1Obj[currentChar] = string1Obj[currentChar] + 1;
    } else {
      string1Obj[currentChar] = 1;
    }
  }

  for (let j = 0; j < string2.length; j++) {
    let currentChar = string2[j];
    if (string2Obj[currentChar] !== undefined) {
      string2Obj[currentChar] = string2Obj[currentChar] + 1;
    } else {
      string2Obj[currentChar] = 1;
    }
  }

  return isEqual(string1Obj, string2Obj);
}

function isEqual(obj1, obj2) {
  // iterate obj1 checking that each key exists in obj2 with an equal value
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const testString1 = 'abcde';
const testString2 = 'edcba';
const testString3 = 'aabbccdd';
const testString4 = 'abcdadbc';
const testString5 = '';
const testString6 = 'ABCDABCD';
const testString7 = '  I am not a test  ';
const testString8 = 'Not a test am I    ';

console.log(checkPermutation(testString1, testString2)); // returns true
console.log(checkPermutation(testString3, testString4)); // returns true
console.log(checkPermutation(testString1, testString5)); // returns false, empty string
console.log(checkPermutation(testString3, testString6)); // returns true, case insensitive
console.log(checkPermutation(testString7, testString8)); // returns true, whitespace
