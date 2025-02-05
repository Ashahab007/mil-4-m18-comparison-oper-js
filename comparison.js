let age = 13;
let withAdult = false;

if (age > 12) {
  console.log("You are allowed to enter to the fair.");
  if (withAdult) {
    console.log("You are allowed to enter to the vooter bari.");
  } else {
    console.log("But you are not allowed to enter to the vooter bari.");
  }
} else {
  console.log("You are not allowed to enter to the fair.");
}

//---------------------Complex Condition------------------------------//

let salary = 20000;
let hasCar = false;
let bcsCader = true;

if ((salary > 25000 || hasCar) && bcsCader) {
  console.log("I will marry him.");
} else {
  console.log("I will not marry him.");
}
