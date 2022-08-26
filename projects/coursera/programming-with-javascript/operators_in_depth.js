const currentTime = new Date().getHours();
console.log(currentTime);

// AND operator
console.log(currentTime > 9 && currentTime < 17);

// OR operator
console.log(currentTime > 9 || currentTime < 17);
console.log();
// NOT operator
// you can thinl of the ! operator as a switch, which flips the evaluated boolean value true to false and vice versa
let petHungry = true;
console.log(petHungry);

console.log('Feeding the pet');
console.log("pet is hungry: ", !petHungry);

//reasign the value
petHungry = !petHungry;
console.log("after reassign the value:", petHungry);
console.log();


// Modulus operator : return the remainder of division
// imagine that a samll restaurant that has 4 chairs per table, and a total of 5 tables, suddenly receives 22 guest.
// how many guest will not be able to sit down in the restaurant?
const chairsPerTable = 4;
const totalTables = 5;
let guest = Math.floor(Math.random() * 100);
console.log(guest);
console.log("how many guest will not be able to sit down in the restaurant?",guest % totalTables);


// equality operator : check if two values are equal.
console.log(5 == "5");

// strict equality operator : to check or compares for both values data types

console.log(5 === "5");

console.log();

// inequality operator : check if two values are not the same.
console.log(5 != "5");

// strict inequality operator : to check or compares for both values data types
console.log(5 !== "5");

// combining two strings using the + operator 
console.log("inter" + "net");
console.log("note" + "book");

// combining strings and numbers using the + operator (concatenation operator).

// here, javascript tries to help by converting the numbers to strings, and then concatenating the number and the string together, ending up with a string value.

// the process of this "under the hood" conversion of values in javascript is referred to as `coercion`.
// JavaScript coerces a number value to a string value - so that it can run the + operator on disparate data types.
console.log(365 + " days");
console.log(12 + " months");

// the process of coercion can sometimes be a bit unexpected.

console.log(1 + "2");

// addition assignment operator, +=
var mon = 1; 
var tue = 2; 
var wed = 1; 
var thu = 2; 
var fri = 3; 

console.log(mon + tue + wed + thu + fri);

let overtime = 0;
overtime += mon;
overtime += tue;
overtime += wed;
overtime += thu;
overtime += fri;
console.log(overtime);

// concatenation assignment operator, +=
let longString = "";
longString += "Once ";
longString += "upon ";
longString += "a ";
longString += "time";
longString += "...";
console.log(longString); 


// operator precedence and associativity, is a set of rules that determines which operator should be evaluated first
console.log(2 + 1 * 3);
console.log(1 + 2 * 3); // right to left associativity 
console.log(3 * 2 + 1); // left to right associativity

console.log();
var num = 10; // the value on the right is assigned to the variable name on the left

// the 5 > 4 is evaluated first (to `true`), then true > 3 is eveluated to `false`, because the `true` value is coerced to `1`
console.log(5 > 4 > 3); 





