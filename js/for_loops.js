"use strict";

(function() {

// 2) Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
    function showMultiplicationTable(num) {
        for(let i = 1; i <= 10; i++) {
            console.log(`${num} X ${i} = ${num * i}`);
        }
    }

    showMultiplicationTable(7);
    showMultiplicationTable(99);

// function showMultiplicationTable() {
//     let i = 7; {
//         for (let j = 1; j <=10; j++) {
//             console.log(`${i} * ${j}`);
//         }
//     }
// }
// showMultiplicationTable();


// 3) Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

    for(let i = 1; i < 11; i++) {
        let randomNum = Math.floor(Math.random() * 181) + 20;
        if (randomNum % 2 === 0) {
            console.log(`${randomNum} is even`);
        } else {
            console.log(`${randomNum} is odd`);
        }
        // console.log(randomNum % 2 === 0 ? `${randomNum} is even` : `${randomNum} is odd`);
    }

// for (let i=1; i <= 10; i++) {
//     let random = Math.floor((Math.random() * 200) + 20);
//     if(random % 2 === 0) {
//         console.log(`${random} is even`);
//     } else {
//         console.log(`${random} is odd`);
//     }
// }

// 4) Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
//
//


    for (let i = 1; i < 10; i++) {
        let output = "";
        for (let j = 1; j <= i; j++) {
            output += i;
        }
        console.log(output);
    }

// for (let i = 1; i <= 9; i++) {
//     console.log(i.toString().repeat(i));
// }



// 5) Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
//
//

for(let i = 100; i > 0; i -= 5){
    console.log(i);
}


})();




