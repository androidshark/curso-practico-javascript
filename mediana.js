function calcularMediaArimetica(lista){
   
    const sumalista = lista.reduce(
      (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
    ); 
    
    const promedioLista = sumalista / lista.length;
        
    return promedioLista;
  }



function calcularMediana(lista){

lista.sort((a,b)=>a-b);  //ordena la lista de forma ascendente para numeros

const mitadlista = parseInt(lista.length /2); //devuelve un valor entero sin decimales
let mediana;

function esPar(numero){

    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }

}


if(esPar(lista.length)){
    const elemento1 = lista[mitadlista - 1]; 
    const elemento2 = lista[mitadlista];
    const promedioElemento1y2 = calcularMediaArimetica([elemento1,elemento2,]);
    mediana = promedioElemento1y2;
}else{
    mediana = lista[mitadlista]
}

return mediana;

}