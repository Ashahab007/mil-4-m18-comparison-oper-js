/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burger = 600;

if (burger > 500) {
  console.log("Get one coke free.");
} else {
  console.log("Pay for the coke 30 taka. ");
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weightInKg = 30;
let heightInMeter = 1.64;

let calculateBmi = weightInKg / heightInMeter ** 2;

console.log(calculateBmi);

if (calculateBmi < 18.5) {
  console.log("You are underweight");
} else if (calculateBmi >= 18.5 && calculateBmi <= 24.9) {
  console.log("You are normal");
} else if (calculateBmi >= 25 && calculateBmi <= 29.9) {
  console.log("You are overweight.");
} else {
  console.log("You are obese");
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let obtainMarks = 75;

if (obtainMarks >= 90) {
  console.log("You've got 'A' grade.");
} else if (obtainMarks >= 80 && obtainMarks <= 89) {
  console.log("You've got 'B' grade.");
} else if (obtainMarks >= 70 && obtainMarks <= 79) {
  console.log("You've got 'C' grade.");
} else if (obtainMarks >= 60 && obtainMarks <= 69) {
  console.log("You've got 'D' grade.");
} else {
  console.log("You've got 'F' grade.");
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myMarks = 70;

let friendMarks = 30;

if (myMarks >= 80) {
  if (friendMarks >= 80) {
    console.log("Let's go for a lunch.");
  } else if (friendMarks < 80 && friendMarks >= 60) {
    console.log("Good luck next time.");
  } else if (friendMarks < 60 && friendMarks >= 40) {
    console.log("Message unseen.");
  } else {
    console.log("Friends block");
  }
} else {
  console.log("Go to home and sleep.");
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 15;
let num2 = 30;

let result;
if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}
console.log(result);

// using ternary
result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log("Using ternary", result);

/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 61;
let fare = 800;
let isStudent = false;

if (age <= 10 && (isStudent || !isStudent)) {
  fare = "You are free to ride.";
} else if (isStudent) {
  let discount = fare * 0.5;
  fare = `Please pay ${fare - discount} tk`;
} else if (age >= 60 && !isStudent) {
  let discount = fare * 0.15;
  fare = `Please pay ${fare - discount} tk`;
} else {
  fare = "Please pay: " + fare + " tk";
}

console.log(fare);
