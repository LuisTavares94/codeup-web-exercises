// function remainder(a, b) {
//     if (
//         typeof a !== 'number' ||
//         typeof b !== 'number'
//     ) {
//         return false
//     } else if (
//         b === 0
//     ) {
//         return false
//     } else return a % b;
// }
//
// function containsAce(input) {
//     if (typeof input !== 'string') {
//         return false;
//     }
//     input = input.toLowerCase();
//     const aces = 'ace';
//     if (input.indexOf(aces) !== -1) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// // console.log(containsAce());
//
// function divisibleBy5(num) {
//     if (typeof num !== 'number') {
//         return false;
//     } else if (num % 5 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function averageThreeNumbers(num1, num2, num3) {
//     if (arguments.length !== 3) {
//         return false;
//     } else if (
//         typeof num1 !== 'number' ||
//         typeof num2 !== 'number' ||
//         typeof num3 !== 'number'
//     ) {
//         return false;
//     }
//     const sum = num1 + num2 + num3;
//     const average = sum / 3;
//     return average;
// }
//
// function stringsAreSameLength(str1, str2) {
//     if (arguments.length !== 2) {
//         return false;
//     }
//
//     if (typeof str1 !== 'string' || typeof str2 !== 'string') {
//         return false;
//     }
//
//     if (str1.length !== str2.length) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function seven(x) {
//     return 7;
// }

// function findFactors(num) {
//     if(typeof num === "number" && !isNaN(num)) {
//     let factors = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i);
//         }
//     }
//     return factors;
// }
// console.log(findFactors(6))
// console.log(findFactors(16)); // returns [1,2,4,8,16];
// console.log(findFactors(0)); // returns [];
// console.log(findFactors(true));; // returns false;
// console.log(findFactors("13"));; // returns false;
// console.log(findFactors([54, 72, 144]));; // returns false;
// console.log(findFactors({value: 64}));; // returns false;
// console.log(findFactors());; // returns false;


// findFactors(6); // returns [1,2,3,6];
// findFactors(16); // returns [1,2,4,8,16];
// findFactors(0); // returns [];
// findFactors(true); // returns false;
// findFactors("13"); // returns false;
// findFactors([54,72,144]); // returns false;
// findFactors({value: 64}); // returns false;
// findFactors(); // returns false;

// Write a function that takes in a string and counts the instances of the letter 'e' within the argument.
// The count should be case insensitive. If the string does not contain any 'e's it should return 0.
// If the argument is not a string it should return false.

// function eCount(value) {
//      value === value.toLowerCase();
//     if (typeof value !== String) {
//         return false;
//     } if (value.toLowerCase())
// }

function countEs(str) {
    if (typeof str !== 'string') {
        return false;
    } str = str.toLowerCase();

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'e') {
            count++;
        }
    }

    return count;
}
console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;

