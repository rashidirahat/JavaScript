// const str = "Welcome to john deere its a deere company";

// const strArray = str.split(" ")
// const joinedStr = strArray.join("")

// console.log(joinedStr)

let obj = {}

let rht = new Object(); // {}
let arr = new Array(5); // [] // [ <5 empty items> ]

obj["r"] = 1
obj.r = 2
// obj.includes("r") // only works on array not on object

console.log(arr)

console.log('Start');
 
async function async1() {
    console.log('Async1 Start');
    await async2();
    console.log('Async1 End');
}
 
async function async2() {
    console.log('Async2');
}
 
async1();
 
setTimeout(() => console.log('Timeout'), 0);
 
console.log('End');


console.log("Start");
 
setTimeout(() => {
  console.log("Timeout 1");
}, 0);
 
new Promise((resolve, reject) => {
  console.log("Promise 1");
  resolve("Promise 1 Resolved");
}).then(res => console.log(res));
 
setTimeout(() => {
  console.log("Timeout 2");
}, 0);
 
new Promise((resolve, reject) => {
  console.log("Promise 2");
  resolve("Promise 2 Resolved");
}).then(res => console.log(res));
 
console.log("End");


async function test() {
  console.log("A");
 
  await Promise.resolve();
  console.log("B");
 
  await Promise.resolve();
  console.log("C");
}
 
test();
 
Promise.resolve().then(() => console.log("D"));
 
Promise.resolve().then(() => console.log("E"));