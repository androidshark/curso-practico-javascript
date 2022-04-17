//Codigo del Cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;


function areaCuadrado(lado){
    return lado * lado;
}


// console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");

console.groupEnd();


//Codigo del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// const alturaTriangulo = 5.5;
// console.log(
//     `los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`
// );


function perimetroTriangulo(lado1, lado2,base){
    return lado1 + lado2 + base;
}

// console.log(
//     `El perimetro del triangulo es de ${perimetroTriangulo} cm`
// );

// const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
function  areaTriangulo(base, altura){
    return (base * altura) /2;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
// console.log(
//     `El area del triangulo es de ${areaTriangulo} cm^2`
// );

console.groupEnd();


console.group("TrianguloIsosceles");

function AlturaIsosceles(lado,base){
    return Math.sqrt(Math.pow(lado,2) - (Math.pow(base,2)/4));
}

console.groupEnd();

//Codigo del circulo
console.group("Circulo");




// const radioCirculo = 4;
// console.log(
//     `El radio del circulo es de ${radioCirculo} cm`
// );

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

// const diametroCirculo = radioCirculo * 2;
// console.log(
//     `El diametro del circulo es de ${diametroCirculo} cm`
// );

const PI = Math.PI;
console.log(
    `PI es ${PI}`
);

function perimetroCirculo(radio){
   const diametro = diametroCirculo(radio);
   return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log(
//     `El perimetro del circulo es de ${perimetroCirculo} cm`
// );


// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio){
    return (radio * radio) * PI;
 }

// console.log(
//     `El area del circulo es de ${areaCirculo} cm^2`
// );

console.groupEnd();

// funciones que interactuan con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularAlturaIsosceles(){
    const input = document.getElementById("InputTrianguloLado");
    const lado = input.value;
    const input2 = document.getElementById("InputTrianguloBase");
    const base = input2.value;

    const altura = AlturaIsosceles(lado,base);
    alert(altura);
}

