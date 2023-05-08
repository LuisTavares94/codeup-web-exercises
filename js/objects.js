(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        first_name: "Luis",
        last_name: "Tavares",
    };
    console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return ('Hello from ' + person.first_name + " " + person.last_name);
    };
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        console.log(shopper.name);
        if(shopper.amount > 200){
            console.log("Amount before discount $" + shopper.amount);
            var discountAmt = shopper.amount * .12
            console.log("Amount of discount $" + discountAmt.toFixed(2));
            console.log("Amount after discount $" + (shopper.amount - (discountAmt)));
        } else {
            console.log("No discount, amount due $" + shopper.amount);
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "A Confederacy of Dunces.",
            author: {
                first_name: "John Kennedy",
                last_name: "Toole"
            },
        },{
            title: "Harry Potter and the Sorceror's Stone.",
            author: {
                first_name: "J.K",
                last_name: "Rowling",
            },
        },{
            title: "Harry Potter and the Chamber of Secrets.",
            author: {
                first_name: "J.K",
                last_name: "Rowling",            },
        },{
            title: "Harry Potter and the Prisoner of Azkaban.",
            author: {
                first_name: "J.K",
                last_name: "Rowling",
            },
        },{
            title: "Harry Potter and the Goblet of Fire.",
            author: {
                first_name: "J.K",
                last_name: "Rowling",            },
        }
    ]

    console.log(books[1].author.first_name)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function(createBook) {
    // return ("Book #" + (index + 1) + "Title:" + books.title + "Author" + books.author)
    // })
    // console.log(createBook);
    // console.log(createBook.books);
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, firstName, lastName){
        let bookObject = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
        books.push(bookObject);
    }

    createBook("The Two Towers", "John","Tolkien");

    function showBookInfo(book){
        return "Title: " + book.title + "\n" + "Author " + book.author.firstName + " " + book.author.lastName;
    }



    books.forEach(function(book,index){
        console.log("Book # " + (index + 1) + "\n" + showBookInfo(book))
    })

})();