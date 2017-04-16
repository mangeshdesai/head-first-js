var price = 28.99;	// delcare a variable price and set it's value to 28.99
var discount = 10;	// delcare another varialbe discount and set it's value to 10
var total = price - (price * (discount / 100));
// declare a variable total and set it's value to expression price - (price * (discount / 100));
// this is similar to multiplying the price with 0.10 discount to get the final total

if (total > 25) {
	freeShipping();	// if the value of total is greater than 25, then call freeShipping() function
}

var count = 10;		// declare a variable called count and assign value 10 to it
while (count > 0) {	// while the count is still greater than 0
	juggle();	// keep juggling
	count = count - 1; // decrease count by 1 on every turn
}

var dog = {name: "Rover", weight: 35};
// create an object with name dog and properties name and weight.
// assign the name property value "Rover" and weight property value 35

if (dog.weight > 30) {		// if the dog weighs more than 30, then 
	alert("WOOF WOOF");	// bark WOOF WOOF
} else {			// otherwise (if the dog weighs less than or equal to 30,
	alert("woof woof");	// bark woof woof
}

var circleRadius = 20;		// set circleRadius to 20
var circleArea = Math.PI * (circleRadius * circleRadius); // compute the area of circle pi * radius^2
