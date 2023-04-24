(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

let names = ['Luis', 'Jericho', 'Jessica', 'Jasper'];
console.log(Array.isArray(names))

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    let total = names.length;
    console.log(total);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0])
    console.log(names[1])
    console.log(names[2])
    console.log(names[3])


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (name) {
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    let numbers = ['1', '2', '3', '4', '5']
    function first(arr) {
        return arr[numbers.length - 5];
    }

    console.log(first(numbers));


    function second(arr) {
        return arr[numbers.length - 4];
    }

    console.log(second(numbers));


    function last(arr) {
        return arr[numbers.length - 1];
    }

    console.log(last(numbers));


    // function second(numbers) {
    //     console.log(numbers.indexOf(1);
    // }
    //
    // function third(numbers) {
    //     console.log(numbers.indexOf(2));
    // }

})();