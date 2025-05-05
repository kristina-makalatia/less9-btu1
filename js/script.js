// variables

let fName = "Anna"; //string
let age = 25; //number
let userStatus = false; //boolean
let x = null; //null
let y; //undefined

let number1 = "Good";
let number2 = "Morning";

let sum = number1 + " " + number2;
console.log(sum);

//
let number3 = 5;
number3 += 15; //number3 = number3 + 15
console.log(number3);

//
let item = true;
console.log(!item);

let a;
let b;
console.log(a + b);

//
let number4 = "10";
let number5 = 5;
let result = number4 / number5;

console.log(result); //5
console.log(typeof result); //number

//
console.log(5 == 5); //true

console.log(5 === "5"); //false
console.log(5 == "5"); //true

console.log(true && false); //false
console.log(true && true); //true
console.log(false && true); //false
console.log(true && "hello"); // hello
console.log(true && undefined); //
console.log(false && "hello");
console.log(true || false);

// if conditional

let item5 = 10;

if (item5 > 15) {
  console.log("Hello");
} else if (item5 > 7 && item5 < 9) {
  console.log("Hello 2");
} else if (item5 > 9 && item5 < 20) {
  console.log("Hello3");
} else if (item5 < 30) {
  console.log("hello4");
} else {
  console.log("error");
}

// ternary operator
let item6 = 7;

// if (item6 < 10) {
//   console.log("hello1");
// } else if (item6 > 5) {
// console.log('hello2');
// } else if (item6 < 20) {
//     console.log('hello3');
// }// else {
//   console.log("error");
// }
let resultCondition2 =
  item6 < 10
    ? "hello1"
    : item6 > 5
    ? "hello2"
    : item6 < 20
    ? "Hello3"
    : item6 < 3
    ? "hello4"
    : "error";

console.log(resultCondition2);

// let resultCondition = item6 > 10 ? "hello1" : "error";
// console.log(resultCondition);
