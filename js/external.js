"use strict";
 console.log("Hello from external javascript");

alert("Welcome to my website!");

var favoriteColor = prompt('What is your favorite color:');

alert('Wow ' + favoriteColor + ' is my favorite color too ');

var littleMermaid = prompt('How many days did you rent \"The Little Mermaid\"?')

var brotherBear = prompt('How many days did you rent \"Brother Bear\"?')

var hercules = prompt('How many days did you rent \"Hercules\"?')

var dayPrice = 3

var total = ((Number(littleMermaid) + Number(brotherBear) + Number(hercules)) * dayPrice)

alert('For all the movies you rented you owe $' + total + '! Please pay.')

var googleWork = prompt('How many hours did you work for \"Foofle\"?');
var amazonWork = prompt('How many hours did you work for \"Amazon\"?');
var facebookWork = prompt('How many hours did you work for \"Facebook\"?');
var googlePay= 400;
var amazonPay = 380;
var facebookPay = 350;

var payCheck = ((Number(googleWork) * googlePay) + (Number(amazonWork) * amazonPay) + (Number(facebookWork) * facebookPay));

alert('You will receive $' + payCheck + ' way to go champ')

alert('checking availability')

var studentAvailability = confirm("Press ok if you have open availability")
var classOpen = confirm("Class has available seats")
var canAttend = studentAvailability && classOpen

alert("it is " + canAttend + " that you can attend.")

alert('Need to check promotion offer eligibility')

var minimumPurchase = confirm('Two or more items?')
var notExpired = confirm('Confirm that the product offer has not expired')
var premiumMember = confirm("Are you a Premium Member")
var eligibleProductOffer = (minimumPurchase && notExpired) || premiumMember

alert("it is " + eligibleProductOffer + " that you are eligible for the product offer.")