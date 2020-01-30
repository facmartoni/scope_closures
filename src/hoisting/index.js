a = 2;
var a; //Esta variable se eleva hasta el inicio de su scope
console.log(a);

console.log(b); //El resultado es undefined
var b = 2;

nameOfDog("Elmo");

// Esta función se eleva (con su contenido) al inicio
function nameOfDog(name) {
  console.log(name);
}
