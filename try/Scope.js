// ejemplo de Scope Global y local

var miNombre = "Jose";

function nombre(){
    var apellido = "Caceres"
    console.log(miNombre +' '+ apellido);
}

nombre(); // esta linea permite llamar desde el Scope global la funcion nombre

miNombre; // llama la variable que esta en el Scope global

apellido; // ESTO LLAMA LA VARIABLE DESDE GLOBAL ESTANDO EN LOCAL ESTO NO ES PERMITIDO

