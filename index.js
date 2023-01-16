/*
Assignment:

Make A Function Using Callbacks :
Doing These Things:
1-Ready For Scholl At 8 Am
2-Sit On School Bus
3-Attend Classes
4-Return To HOME

Output should be like this
Ready for school at 8am
Brushed teeth and had breakfast
Sitting on school bus
Listened to music on the bus ride
Attending classes
Learned about math and science
Returning home
Ate dinner and did homework
*/

function sayHello() {
  let you = prompt("What's your name? ");
  console.log(`Hello, ${you}  !`);
}
sayHello();

let varContainingFunction = function () {
  let varInFunction = "I'm in a function.";
  console.log("hi there!", varInFunction);
};
varContainingFunction();

/*
        See if you can write a function for yourself. We want to write a function
that adds two numbers.
1. Create a function that takes two parameters, adds the parameters
together, and returns the result.
2. Set up two different variables with two different values.
3. Use your function on the two variables, and output the result using
console.log .
4. Create a second call to the function using two more numbers as
arguments sent to the function.
*/

function doAddition(a, b) {
  let c = a + b;
  console.log(c);
}
doAddition(2, 5);

let additionFunction = function (g, h) {
  let f = g + h;
  console.log(f);
};
additionFunction(4, 6);

let multiplicationFunction = function (n1, n2) {
  let n3 = n1 * n2;
  console.log(n3);
};
multiplicationFunction(5, 6);

// console.log (Math.floor (Math.random()*10));

let newArray = ["Great", "Good", "Excellent", "Humble"];
function provideName() {
  let yourName = prompt("What is your name? ");
  let arrSelection = Math.floor(Math.random() * newArray.length);
  console.log(newArray[arrSelection] + " " + yourName);
}
provideName();

const val1 = 10;
const val2 = 5;
let operat = "-";
function cal(a, b, op) {
  if (op == "-") {
    console.log(a - b);
  } else {
    console.log(a + b);
  }
}
cal(val1, val2, operat);
