"use strict";

(function() {

// 2) Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

    let numToSkip;

    while (true) {
        numToSkip = parseInt(prompt("Give me an odd number between 1 and 50!"));
        if (numToSkip >= 1 && numToSkip <= 50 && numToSkip % 2 !== 0) {
            break;
        }
    }

    // let oddNumber = parseFloat(prompt('Please enter a odd number from 1 - 50.'));
    //
    // while (oddNumber > 50 || oddNumber % 2 === 0 || oddNumber < 1) {
    //     oddNumber = prompt("Please enter a valid odd number from 1-50.");
    //     if (oddNumber < 50 && oddNumber % 2 !== 0) {
    //         break;
    //     }
    // }
    //
    // alert("That is an odd number.");

// 3) Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

    for (let i = 1; i < 50; i += 2) {
        if (i === numToSkip) {
            console.log(`Oops! Skipping ${numToSkip}`);
            continue;
        }
        console.log(i);
    }

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 ===0) {
//         continue;
//     } else if (i === oddNumber) {
//         continue;
//     }
//     console.log(i)
// }
//
//


})();
