var hello = "Hello";
var hello = "Hello +";
let world = "World";
// let world = "World +"; // Da error
const helloWorld = "Hello World!";

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();

const helloWorldFunc = () => {
  globalVar = "I'm global";
};

helloWorldFunc();
console.log(globalVar);

const anotherFunction2 = () => {
  var localVar = (globalVar = "I'm Global");
};

anotherFunction2();
console.log(localVar); // Da error
