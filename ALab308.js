// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

//  Check if all numbers are divisible by 5. Cache the result in a variable.
const divisibleBy5 = isSum50 / 5 >= 0;
console.log(`The four numbers are divisible by 5: ${divisibleBy5}.`);

// Check if the first number is larger than the last. Cache the result in a variable.
const checkNumber = n1 > n4;
console.log(
  `Checking if the first number is larger than the last: ${checkNumber}`
);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const arithmeticChain = ((n1 - n2) * n3) / n4;
console.log(`The remainder of the arithmetic chain is: ${arithmeticChain}`);

//  Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isOver25Redo = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`There is a number over 25: ${isOver25}.`);

// PART 2
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:

// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// Set up a program to answer the following questions:
let fiftyFiveMiles = 30; // avg of miles per gallon
let sixtyMiles = 38; // avg of miles per gallon
let seventyFive = 23; // avg of miles per gallon
let distance = 1500; // miles
let budget = 175; // dollars
let avgFuelPrice = 3; // dollars
let fiftyFiveMpg = 55 // mph
let sixtyMpg = 60 //mpg
let seventyFiveMpg = 75 //mph

// How many gallons of fuel will you need for the entire trip?

let avgFuel55 = distance / fiftyFiveMiles;
console.log(`You will need ${avgFuel55} gallons of fuel at 55 miles per hour`);

let avgFuel60 = distance / sixtyMiles;
console.log(`You will need ${avgFuel60} gallons of fuel at 60 miles per hour`);

let avgFuel75 = distance / seventyFive;
console.log(`You will need ${avgFuel75} gallons of fuel at 75 miles per hour`);

// Will your budget be enough to cover the fuel expense?
let cost55 = avgFuel55 * avgFuelPrice;
if (budget >= cost55) {
  console.log(`Yes, driving at ${fiftyFiveMpg} mph cost $${cost55} and it is under your budget.`);
} else {
  console.log(`No, driving at ${fiftyFiveMpg} mph cost $${cost55} over budget`);
}

let cost60 = avgFuel60 * avgFuelPrice;
if (budget >= cost60) {
  console.log(`Yes, driving at ${sixtyMpg} mph cost $${cost60} is under your budget.`);
} else {
  console.log(`No, drivnig at ${sixtyMpg} mph cost $${cost60} and is over budget`);
}

let cost75 = avgFuel75 * avgFuelPrice;
if (budget >= cost75) {
  console.log(`Yes, driving at ${seventyFiveMpg} mph cost $${cost75} is under your budget.`);
} else {
  console.log(`No, driving at ${seventyFiveMpg} mph cost $${cost75} and is over budget`);
}
// How long will the trip take, in hours?
let timeAt55 = (distance / fiftyFiveMiles )
console.log(`It will take ${timeAt55} hours to travel at ${fiftyFiveMiles} mph.`);

let timeAt60 = (distance / sixtyMiles)
console.log(`It will take ${timeAt60} hours to travel at ${sixtyMiles} mph.`);

let timeAt75 = (distance / seventyFive)
console.log(`It will take ${timeAt75} hours to travel ${seventyFive} mph.`);

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Driving at 60 mph makes the most sense.

// Log the results of your calculations using string concatenation or template literals.
