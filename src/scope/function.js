const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};

fruits();
// console.log(fruit); // Da error

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  //   let y = 2; // Da error
  console.log(x);
  console.log(y);
};

anotherFunction();
