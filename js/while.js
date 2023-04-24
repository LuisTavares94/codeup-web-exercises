"use strict";

(function() {

    let x= 2
while(x <= 65536) {
    console.log(x);
    x *= 2;
}

    let allCones = Math.floor(Math.random() * 50) + 50;
    let remainingInventory = allCones

    do {
        let conesToSell = Math.floor(Math.random() * 5) + 1;
        if (remainingInventory >= conesToSell) {
            remainingInventory -= conesToSell;
            console.log(`Started the day with ${allCones} ice cream cones. Customer will purchase ${conesToSell} cones. Only ${remainingInventory} left.`);
        } else {
            console.log(`Sorry I don't have ${conesToSell} cones.We only have ${remainingInventory} cones left.`);
            }
    } while(remainingInventory > 0)

    // let allCones = Math.floor(Math.random() * 51) + 50;
    // let remainingInventory = allCones
    //
    // do {
    //     let conesToSell = Math.floor(Math.random() * 5) + 1;
    //     if (remainingInventory >= conesToSell) {
    //         remainingInventory -= conesToSell;
    //         console.log(`Started the day with ${allCones} ice cream cones. Customer is purchasing ${conesToSell} cones. Only ${remainingInventory} left!`);
    //     } else {
    //         console.log(`Sorry! I cannot sell ${conesToSell} cones. We only have ${remainingInventory} left!`);
    //     }
    // } while (remainingInventory !== 0)
})();
