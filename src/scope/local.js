// Ejemplo 1

const helloWorld = () => {
  const hello = "Hello World";
  console.log(hello);
};

helloWorld();

// console.log(hello); // Da error

// Ejemplo 2: ÁMBITO LÉXICO

var scope = "I'm global";

const functionScope = () => {
  var scope = "I'm just a local";
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
console.log(scope);
