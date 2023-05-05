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


// function countEs(str) {
//     if (typeof str !== 'string') {
//         return false;
//     } str = str.toLowerCase();
//
//     let count = 0;
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'e') {
//             count++;
//         }
//     }
//
//     return count;
// }
// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;


// Write a function that takes in a string and returns true if the argument contains at least one instance of the letter 'e'.
// This should be case-insensitive. If the argument is not a string, or if the argument does not contain 'e' it should return false.


// function trueE(str) {
//     if (typeof str !== 'string') {
//         return false;
//     }
//
//     str = str.toLowerCase();
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'e') {
//             return true;
//         }
//     }
// }

// function trueE(str) {
//     if (countEs(str) === false) {
//         return false;
//     } else {
//         return countEs(str) > 0;
//     }
// }
//
// console.log(trueE('hi'));
// console.log(trueE('elephant'));
// console.log(trueE('when'));

// Write a function named fizzBuzz that prints to the console the number 1 - 100.
// If the number is divisible by 3 print fizz instead of the number. If the number is divisible by 5 print buzz.
// If the number is divisible by both 3 and 5 print fizzBuzz.

// function fizzbuzz(x) {
//     for (let i =1; i < 100; i++); {
//     if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0) {
//         console.log('buzz')
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz')
//         }
//         console.log(i);
//         }
//     }
//
// }

// Warmup:
//     Create a do-while loop that starts at 2, and displays the number squared on each line while the number is less than 1,000,000. Output should equal:
//     2
// 4
// 16
// 256
// 65536

// var i = 2;
//
// do {
//     console.log(i * i);
//     i++;
// } while (i < 1000000);

let num = 2;

do {
    console.log(num);
    num = num * num;
} while (num < 1000000);


