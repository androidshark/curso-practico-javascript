
function calculaPonderado(notas){

//CALCULA EL PESO DE CADA MATERIA SEGUN SU NOTA
//===============================================
//Crea un nuevo array con la multiplicacion de la nota por el credito de la materia
const notasConCredito = notas.map(
    (notasObjeto) => notasObjeto.nota * notasObjeto.credito
);

//se suma todos los elementos del arreglo multiplicados por su peso
const sumaDeNotasConCreditos = notasConCredito.reduce(
    (sum = 0, nuevoValor) => sum + nuevoValor
);

//SUMA DE TODOS LOS CREDITOS
//===============================================
//Se crea un array solo con los creditos
const creditos = notas.map(
    (notasObjeto) => notasObjeto.credito
);

//se suma todos los elementos del arreglo creditos
const sumaDeCreditos = creditos.reduce(
    (sum = 0, nuevoValor) => sum + nuevoValor
);

const promedioPonderado = sumaDeNotasConCreditos / sumaDeCreditos;

return promedioPonderado;

}


