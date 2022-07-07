//  ### Convert the code below from ES5 to ES6 and answer the question
//  1. Define a variable
//  - ES5
/*
    var MAX_SIZE = 25 * 1024 * 1024;
    var title = 'Hello World';
    title = 'Hello ES6'
*/
//  -ES6
const MAX_SIZE = 25 * 1024 * 1024;
let title = 'Hello World';
title = 'Hello ES6';
//  - Question: Let and Const – What's the Difference?
// Const won't be reassigned new value, Let can be reassigned new value.

//  2. String Interpolation
//  - ES5
/*  var user = { name: 'David' };
    var card = { amount: 7, product: "Bar", unitprice: 42 };
    var message = "Hello " + user.name + ",\n" +
    "want to buy " + card.amount + " " + card.product + " for\n" +
    "a total of " + (card.amount * card.unitprice) + " bucks?";
*/
//  - ES6
let user = { name: 'David' };
let card = { amount: 7, product: 'Bar', unitprice: 42 };
let message = `Hello ${user.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

// 3. Rest Parameter
//   - ES5
/*
  function foo(x, y) {
      var a = Array.prototype.slice.call(arguments, 2);
      return (x + y) * a.length;
  };
  foo(1, 2, 'hello', true, 7) === 9;
*/
//  ES6
const foo = (x, y, ...args) => {
    let a = args;
    return (x + y) * a.length;
}
foo(1, 2, 'hello', true, 7) === 9;

// 4. Default Parameter Values
//   - ES5
/*
function sum(x, y, z) {
    if (y === undefined) {
      y = 7;
    }
    if (z === undefined) {
      z = 42;
    }
    return x + y + z;
  };
*/
const sum = (x, y = 7, z = 42) => {
    return x + y + z;
}
console.log(sum(0));

// 6. Classes
//   - ES5
/*
  var Shape = function(id, x, y) {
    this.id = id;
    this.move(x, y);
  };
  Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
};
*/

class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

// 7. Modules
//   - ES5


//   8. Promise
//   - ES5
// function showMessAfterTimeout(msg, who, timeout, onDone) {
//     setTimeout(function () {
//       onDone(msg + ' Hi ' + who + '!');
//     }, timeout);
// }

// showMessAfterTimeout('', 'Foo', 100, function(msg) {
//     showMessAfterTimeout(msg, 'Bar', 200, function(msg) {
//       console.log('Finish after 300ms:' + msg);
//     });
//   });

const showMessAfterTimeoutPromise = (msg, who, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const response = `${msg} Hi ${who}!`;
            resolve(response);
        }, timeout);
    });
}

showMessAfterTimeoutPromise('', 'Foo', 100)
    .then(msg => {
        return showMessAfterTimeoutPromise(msg, 'Bar', 200);
    })
    .then(msg => {
        console.log('Finish after 300ms:' + msg)
    })

//     9. Loops
//   - Give an example for each method: 
//     + for…of
//     + findIndex()

const nums = [1,2,3,4,5,7,8];
// for..of
for (let num of nums) {
    console.log(num);
}

//  findIndex()
const indexEven = nums.findIndex((num) => num % 2 === 0);
console.log(indexEven)
