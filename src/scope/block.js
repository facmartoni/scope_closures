// Ejemplo 1

const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    let fruits2 = "banana";
    const fruits3 = "kiwi";
    console.log(fruits2);
    console.log(fruits3);
  }
  console.log(fruits1);
};

fruits();

// Ejemplo 2

// let x = 1;
// {
//   let x = 2;
//   console.log(x);
// }
// console.log(x);

// Ejemplo 3 (comentar el ejemplo anterior para que funcione)

var x = 1;
{
  var x = 2;
  console.log(x);
}
console.log(x);

// Ejemplo 4

const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
};

anotherFunction();
