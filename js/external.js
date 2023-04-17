"use strict";
 console.log("Hello from external javascript");

alert("Welcome to my website!");

var favoriteColor = prompt('What is your favorite color:');

alert('Wow ' + favoriteColor + ' is my favorite color too!');

var littleMermaidRentalLength = prompt('How many days did you rent "The Little Mermaid"?')

var brotherBearRentalLength = prompt('How many days did you rent "Brother Bear"?')

var herculesRentalLength = prompt('How many days did you rent "Hercules"?')

var dayPrice = 3

var total = ((Number(littleMermaidRentalLength) + Number(brotherBearRentalLength) + Number(herculesRentalLength)) * dayPrice)

alert('For all the movies you rented you owe $' + total + '! Please pay.')

var googleWork = prompt('How many hours did you work for "Foofle"?');
var amazonWork = prompt('How many hours did you work for "Amazon"?');
var facebookWork = prompt('How many hours did you work for "Facebook"?');
var googlePay= 400;
var amazonPay = 380;
var facebookPay = 350;

var payCheck = ((Number(googleWork) * googlePay) + (Number(amazonWork) * amazonPay) + (Number(facebookWork) * facebookPay));

alert('You will receive $' + payCheck + ' way to go champ')

alert('Hold on while we check class seating availability.')

var studentAvailability = confirm("Press ok if you do not have any scheduling conflicts with this class.")
var classOpen = confirm("The class is open.")
var canAttend = studentAvailability && classOpen

alert("it is " + canAttend + " that you can attend this class.")

alert('Need to check promotion offer eligibility')

var minimumPurchase = prompt('How many items are you purchasing?')
var notExpired = confirm('Confirm that the product offer has not expired')
var premiumMember = confirm("Are you a Premium Member")
var eligibleProductOffer = (minimumPurchase > 2 && notExpired) || premiumMember

alert("it is " + eligibleProductOffer + " that you are eligible for the product offer.")