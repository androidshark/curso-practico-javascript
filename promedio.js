function calcularMediaArimetica(lista){
  // let sumaLista = 0;

  // PRIMERA FORMA DEL FOR
  // for(let i = 0; i < lista.length; i++) {
  //     sumaLista = sumaLista + lista[i];
  // }

  // SEGUNDA FORMA DEL FOR
  // const sumalista = lista.reduce(
  //   function(valorAcumulado = 0, nuevoElemento){
  //     return valorAcumulado + nuevoElemento;
  //   }
  // ); 
  
  // FORMA REDUCIDA DEL FOR Y LA FUNCION
  const sumalista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
  ); 
  
  // console.group('promedio');
  // console.log(`la suma de la lista es: ${sumaLista}`);
  
   const promedioLista = sumalista / lista.length;
  
  // console.log(`El promedio de la lista es: ${promedioLista}`);
  // console.groupEnd;

  return promedioLista;
}