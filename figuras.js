//Codigo del Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");

console.groupEnd();


//Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

const alturaTriangulo = 5.5;
console.log(
    `los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`
);

const perimetroTriangulo =ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(
    `El perimetro del triangulo es de ${perimetroTriangulo} cm`
);

const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
console.log(
    `El area del triangulo es de ${areaTriangulo} cm^2`
);

console.groupEnd();


//Codigo del circulo
console.group("Circulo");
const radioCirculo = 4;
console.log(
    `El radio del circulo es de ${radioCirculo} cm`
);

const diametroCirculo = radioCirculo * 2;
console.log(
    `El diametro del circulo es de ${diametroCirculo} cm`
);

const PI = Math.PI;
console.log(
    `PI es ${PI}`
);

const perimetroCirculo = diametroCirculo * PI;
console.log(
    `El perimetro del circulo es de ${perimetroCirculo} cm`
);


const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(
    `El area del circulo es de ${areaCirculo} cm^2`
);


console.groupEnd();