// Helpers
function calcularMediaArimetica(lista){
   
    const sumalista = lista.reduce(
      (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
    ); 
    
    const promedioLista = sumalista / lista.length;
        
    return promedioLista;
  }


function esPar(numero){
    //devuelve true o false
    return (numero % 2 === 0);
}

//Calculadora de Medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaArimetica([personaMitad1,personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


//MEDIANA GENERAL
// se crea un array que tenga solo los salarios
const salariosCol = colombia.map(
    (persona)=>persona.salary
);

const salariosColSorted = salariosCol.sort(
    (a,b) => a - b
);


const medianaGeneralCol =  medianaSalarios(salariosColSorted);

// Mediana del Top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col =  medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
}
   
);


