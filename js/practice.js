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


function countEs(str) {
    if (typeof str !== 'string') {
        return false;
    }
    str = str.toLowerCase();

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'e') {
            count++;
        }
    }

    return count;
}

console.log(countEs("Ease")); // returns 2;
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

// let num = 2;
//
// do {
//     console.log(num);
//     num = num * num;
// } while (num < 1000000);

// Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).

function addEmUp(arr) {
    var arrayTotal = arr.length;
    var totalSum = 0;

    for (var x = 0; x < arrayTotal; x++) {
        totalSum += arr[x];
    }

    return (totalSum); // This is where the return should be
}


// let sum=0;
// arr.forEach(function(num) {
// sum += num;
// });
// return sum;
// }


// console.log(addEmUp([2,6,19])); // returns 27
// console.log(addEmUp([-99, 180, -5])); // returns 76
// console.log(addEmUp([44,10,7])); // returns 61
// console.log(addEmUp([-100])); // returns -100
// console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
// console.log(addEmUp([-13, -92, -3500])) // returns -3605

// Write a function that takes in a string and returns an object describing the string.
// The object should have a string property that contains the original string, a numberOfEs property that contains
// a count of the number of e's in the string (case-insensitive), and a isEvenLength property that contains a boolean for whether
// the string's length is even or not.

function explainString(str) {
    return {
        string: str,
        numberOfEs: countEs(str),
        isEvenLength: str.length % 2 === 0
    }
}

// console.log(explainString("cheese") // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
// console.log(explainString("dog") // returns {string: "dog", numberOfEs: 0, isEvenLength: false}

// Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    }, {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    }, {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    }, {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    }, {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function extractNames(arr) {
    // return arr.map(obj => obj.name);
    let bucket = [];
    arr.forEach(function (el) {
        bucket.push(el.name);
    });
    return bucket;
}

console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];

// Write a function that takes in an array of objects and returns the object with the largest heightInMM property


const getTallest = function (arr) {
    let tallest = {heightInMM: 0};
    arr.forEach(function (obj) {
        if (obj.heightInMM > tallest.heightInMM) {
            tallest = obj;
        }
    });
    return tallest;
}

console.log(getTallest(hamsters)); // returns {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"}


// Write a function that takes in an array of objects and returns an array of the objects from the array that only have one fur color.

function singleFurColor(arr) {
    let newArr = [];
    arr.forEach(function (elem) {
        if (elem.fur.length === 1) {
            newArr.push(elem);
        }
    })

    return newArr;
}



console.log(singleFurColor(hamsters)); // returns [{name: "Bijou", heightInMM: 75, fur: ['white'], gender: "female", dateOfBirth: "July 10"}];