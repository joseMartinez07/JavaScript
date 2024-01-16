// para conprovar el tipo de variable se puede hacer esto
var a = 4 + "7"; //coercion implicita
typeof a; // su valor va hacer un string

// en esta el lenguaje interpreta que lo que queriamos decir
// es que el 7 es un numero y no un string
var b = 4 * "7"; //coercion implicita
typeof b; // su valor va hacer un numero

// ahora se vera la coercion explicita de esta manera tenemos el ejemplo 
var c = 20;
var d = c + "";
var coer = String(c); // con esta linea se pretende obligar a la variable c a cambiar de num a string
// esto tambien se puede hacer para otros tipos de valores
var coer2 = Number(coer);






