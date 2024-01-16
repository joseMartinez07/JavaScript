// ESTOS SON EJEMPLOS DE HOISTING

console.log(minombre); // mustra por la consola del navegador el resultado 
var minombre = "Jose Daniel"; // se esta declarando una variable y se inicializa la variable

//esta estructura se llama un avariable antes de declararla e inicializarla
//ahora si 

var niNombre =undefined;

console.log(niNombre+ "Soy ese Hoisting"); //al hacer esto lo que va a salir es "undefined Soy ese Hoisting"
niNombre = "Jose daniel"; // luego solo va a retornar el valor de "Jose Daniel"

//ESTE ES UN EJEMPLO DE HOISTING CON FUNCIONES

hey();// llamar una funcion 
// en este caso va si llamamos la funcion antes de declararla si puede llegar a tomar el valor que se espera 
// siempre y cuando la variables esten declaras e inicializadas antes de llamar esa funcion
function hey(){// declarar una funcion
    console.log("Hola " + miNombre);
}
// hasta este punto el valor que retorna la funcion sera "Hola undefined"

var miNombre = "Jose Daniel";

//nota buena practica: las funciones siempres deben estar al inicio del codigo 