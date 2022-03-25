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

// f(x) = x*x
// let myFunction =x => {
//     x => x*x
// } 

let myFunction =x => {
    console.log(x)
} 

colors.forEach(color => {
    console.log(color);
});

console.log("This is the End og the Code!")