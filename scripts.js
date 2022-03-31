console.log("JavaScript is working!");
let colors =  ["orange", "blue", "green", "purple"];
let post = {
    title: "My post",
    description: "My First Post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

let posts = [{
    title: "First post",
    likeCount: 12
}, {
    title: "Second post",
    likeCount: 100
}];

console.log(colors);
console.log(post);

let age = 18;

if (age >= 18) {
    console.log("You're an adult!");
} else {
    console.log("You're a kid!");
}

for (let i = 0; i < 10; i++) {
    console.log (i);
}

console.log(colors);


let myFunction = x => {
    console.log(x)
} 

colors.forEach(color => {
    console.log(color);
});

//Friday week02 workshop 4th exercise

// Condition
// You can make a piece of your code optional, with the if statement. 
// It lets you define a condition which your code depends on

let forthA = 7;
if (forthA < 5){
    console.log(forthA / 2);
} else {
    console.log(forthA * 2);
}

// Loops
// Sometimes you want to execute a piece of code several times. Like in the real life when you want to move books from one shelf to another.

// you grab the book
// you move it to the other shelf
// you release the book
// And you do this until you have books to move. For example if you have 10 books:

let bookCount = 10;
for (let i=0; i< bookCount+1; i++) {
    console.log(i);
}
// Print the even numbers between 0 and 20.?!

let payBill = (amount, beneficiary) => {
    return amount + beneficiary;
    // transfer amount money to the beneficiary
  };

  
let amountX = 100;
let beneficiaryX = 5;
console.log("pay bill", payBill(amountX,8));

//   Within functions (key word: =>) you can use the return keyword which will give back the function's output. 
//   For example if you want to add 2 numbers, then you will need the result as well:

let add = (a, b) => {
    let c = a + b;
    return c;  // the return keyword will give you back the result
  };
  
  console.log(add(1, 2)) // will print 3


// Use your previous for loops (key word: for) and create a function which print the first N numbers.
let f = (N) => {
    console.log("print numbers till", N)
    for (let j=1; j <= N; j++) {
        console.log(j);
    };
}
(f(10));


// printNumbersTill(20); // should print 1, 1, 2, ...., 20
// printNumbersTill(15); // should print 1, 1, 2, ...., 15

// Create a function which gets a name as parameter and then returns a greeting to the specified person.
// getGreetingTo('Mark');              // Should not print to the console
// console.log(getGreetingTo('Mark'));  // Should print 'Hello Mark!'

let getGreetingTo = (nameX) => {
    return ("Hello " + nameX + "!");
}
// getGreetingTo('Mark');
console.log(getGreetingTo('Mark'));

// For loops and arrays
// We need to iterate through arrays pretty often, what do you think how can you do that? 
// As you remember for loops execute something N times, 
// so if we want to print an array's values we will need to execute the loop .length times.

// Exercise 1
// Create a function which gets an array as parameter and prints each value from it.

let Array = [0, 3, 6, 7, 9];
let printValues = (Array) => {
    for (let k=0; k<Array.length; k++) {
        console.log(Array[k]);
    }
};
printValues(Array);

// forEach
// Usually we try to avoid this i variable, it makes our code more complicated. 
// When we want to iterate through an array we have a special syntax for that.

let myNumbers = [10, 20, 30, 50, 12];

// here we say, we want to do something with each item
myNumbers.forEach((number) => {
  // within the function I can tell what I want to do with the items
  console.log(number*2);
});



console.log("This is the End og the Code!")