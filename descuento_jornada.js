// ACTIVIDADES
// 1. lista como objeto
// 2. funcion tipo arrow
// 3. validacion con procedimiento find

// objeto con los datos a trabajar
const descuentoJornada = [
    {
        jornada: "DI",
        descuento: 15,
    },
    {
        jornada: "TA",
        descuento: 30,
    },
    {
        jornada: "NO",
        descuento: 0,
    },
    {
        jornada: "ES",
        descuento: 30,
    },
];


//Funcion que calcula el descuento 
function calcularDescuento(){
    const matricula = document.getElementById("matricula").value;
    const jornada = document.getElementById("jornada").value;

    // console.group("funcion: calcularDescuento");   
    //     console.log({
    //     matricula,
    //     jornada
    //     });
    // console.groupEnd;

    //(Forma larga de la funcion)
    //funcion que verifica si la jornada es la misma a la del objeto 
    // const isJornadaValueValid = function (descuentoJorn) {
    //    return descuentoJorn.jornada === jornada;
    // };

    //(Forma corta de la funcion [ARROW])
    const isJornadaValueValid = (descuentoJorn) => descuentoJorn.jornada === jornada;
     
    //recorre el objeto hasta encontrar el valor enviado
    const desc = descuentoJornada.find(isJornadaValueValid); 
    

    if (!desc){
        alert("La jornada no es válida");
    } else {
        const descuento = desc.descuento;
        const precioConDescuento = matricula - ((matricula * descuento) / 100);
        // console.log(precioConDescuento);

        const valorTotal = document.getElementById("valorTotal");
        valorTotal.innerText = precioConDescuento;
    }



}