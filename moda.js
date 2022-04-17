function calcularModa(lista){

const listaCount = {};

lista.map(
    function(elemento){
        if(listaCount[elemento]){
            //si ya existe
            listaCount[elemento] += 1; //suma 1 al elemento ya guardado listaCount[elemento] = listaCount[elemento] + 1
        }else{
            //si no existe
            listaCount[elemento] = 1;
        }
    }
);

const listaArray = Object.entries(listaCount).sort((a, b) => a[1] - b[1]);
const moda = listaArray[listaArray.length -1];

return moda;

};