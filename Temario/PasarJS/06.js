
/* ESTRUCTURAS DE CONTROL

    RETIRADA DE DINERO
    PRIMERO: EL CAJERO COMPRUEBA QUE EL PIN ESTÁ OK
    DESPUES ME DA LAS OPCIONES: SELECCIONO RETIRAR
    A CONTINUACIÓN EL CAJERO COMPRUEBA QUE TENGO SALDO SUFICIENTE

    QUE SON TODO ESTOS? CONDICIONES

    EMPEZAREMOS CON EL IF() ES DECIR, SI SE CUMPLE ()

*/

const puntaje = 900; // UN SOLO IGUAL ASIGNAMOS VALOR A UNA VARIABLE

if (puntaje === 1000) { // DOS IGUALES ES UNA COMPARACIÓN
    console.log("Puntaje es 1000")
}
else {    // SI NO SE CUMPLE EL IF, EJECUTA EL ELSE
    console.log("Puntaje NO es 1000")
}

/* TIPOS DE COMPARADORES

    == IGUAL
    === EXACTAMENTE IGUAL. TIENE EN CUENTA EL TIPO DE DATO Y EL VALOR
    !== DIFERENTE
    <= MENOR IGUAL
    >= MAYOR IGUAL
    < MENOR ESTRICTO
    > MAYOR ESTRICTO



!!!!!!!!!!!!!!!!!!!
EJERCICIO DEL CAJERO
CREAR UNA FUNCIÓN Y EN EL CUERPO DE LA FUNCIÓN
UNA ESTRUCTURA DE CONTROL QUE COMPRUEBE SI EL PIN DE MI TARJETA
ES CORRECTO Y SI PUEDO SACAR LA CANTIDAD

pin correcto es 1234;
saldo en cuenta es de 49;

LA FUNCIÓN RECIBIRÁ COMO ARGUMENTOS pin, cantidadRetirar



*/

function cajero(pin, cantidadRetirar) {
    if (pin === 1234) {
        console.log("Pin Correcto")
        if (cantidadRetirar <= 49) {
            console.log("Retirando Dinero");
        }
        else {
            console.log("Saldo Insuficiente")
        }
    }
    else {
        console.log("Pin Correcto")
    }
}

cajero(1234, 51);


//USO DE ELSE IF, PARA HACER MÚLTIPLES COMPARACIONES

const rol = "Editor"; // UN SOLO IGUAL ASIGNAMOS VALOR A UNA VARIABLE

if (rol === "Administrador") { // DOS IGUALES ES UNA COMPARACIÓN
    console.log("Acceso a todo el sistema")
} else if (rol === "Editor") {    // SI NO SE CUMPLE EL IF, EJECUTA EL ELSE
    console.log("Solo puedes editar, pero no crear")
} else {
    console.log("No tienes acceso")
}



// USO DE SWITCH, PARA HACER MÚLTIPLIES COMPARACIONES
// Y OPTIMIZAR EL USO DE TANTO ELSE IF

/*
FUNCIONAN CON CASE
NECESITA UN BREAK PARA FINALIZAR CADA CASE
DEFAULT ME MUESTRA EL CASO POR DEFECTO

*/

const metodoPago = "Tarjeta";

switch (metodoPago) {
    case "Tarjeta": console.log("Pagaste con tarjeta");
        break;
    case "En Mano": console.log("Pagaste en mano");
        break;
    case "Bizum": console.log("Pagaste con bizum");
        break;
    default: console.log("Pendiente de pago");
        break;
}



















/*
*******************
    COMIENZO CLASE 2023/03/16
*******************


!!!!!!!!!!!!!!!!!
REPASO DÍA ANTERIOR

    //ARROW FUNCTION
    //PASOS
    /*
        PARTIENDO DE LA DECLARACIÓN DE LA FUNCIÓN:

        ELIMINAR EL FUNCTION
        AÑADIR => FLECHA ANTES DE LA LLAVE DE APERTURA
        CUANDO SOLO SE TIENE UNA LINEA EN EL CUERPO DE LA FUNCIÓN PODEMOS ELIMINAR LAS LLAVES
            SI HAY MÁS DE UNA HYA QUE PONERLA {}
        CUANDO SOLO SE TIENE UN PARÁMETRO SE PUEDE ELIMINAR LOS PARÉNTESIS
            SI HAY MAS DE UN PARAMETRO, VACIO, O INICICIALIZADO HAY QUE PONERLO()
        EL RETURN VA IMPLICITO EN EL CUERPO DE LA FUNCIÓN, SE PUEDE OMITIR SU VA SOLO
            SI HAY MÁS DE UNA LINEA EN EL CUERPO DE LA FUNCIÓN HAY QUE PONERLO

        let triplicarFlecha = (numero=1) => console.log("VALOR DE TRIPLICAR CON ARROW FUNCTION",numero*numero*numero);

        triplicarFlecha(12);  

        MÉTODOS DE PROPIEDAD
            SOME IDEAL
            REDUCE
            FILTER

        ESTRUCTURAS DE CONTROL

            IF
            ELSE
            ELSE IF
            SWITCH


FIN DEL REPASO
!!!!!!!!!!!!!!!! 

!!!!!!!!!!!!!
EJERCICIO1
CREAR UNA FUNCIÓN DE FLECHA QUE DADOS 2 PARÁMETROS 
ME DE 10 VECES LA SUMA DE AMBOS
*/

let ejercicio1 = (n1, n2) => console.log("resultado de la operacion", (n1 + n2) * 10);
ejercicio1(4, 7);





/*


!!!!!!!!!!!!!
EJERCICIO2
CREAR UNA FUNCIÓN DE FLECHA QUE DADO DOS PARÁMETROS
ME INDIQUE EL NÚMERO DE CARACTERES DE LOS DOS
*/

let ejercicio2 = (p1, p2) => console.log("resultado ejercicio2", (p1 + p2).length);

ejercicio2("nomre", "apellido");



/*
 
 
!!!!!!!!!!!!!
EJERCICIO3
CREAR UNA ESTRUCTURA DE CONTROL QUE ME COMPARE SI
UN NÚMERO AL MULTIPLICARLO POR SI MISMO ES MENOR
QUE 100. SI ES MENOR QUE 200, Y SI NO CUMPLE LAS
ANTERIORES
 
*/

const numero = 12;
if (numero * numero < 100) {
    console.log("el resultado es menor que 100");
} else if (numero * numero < 200 && numero * numero >= 100) {
    console.log("el resultado es menor que 200");
} else {
    console.log("el resultado es >= 200");
}

/*
 
 
 
!!!!!!!!!!!!
EJERCICIO4
CREAR UNA ESTRUCTURA DE CONTROL QUE ME COMPARE SI
UN NÚMERO + 10 ES:
=9
=12
=15
=100
RESTO DE POSIBILIDADES
 
*/

const numero2 = 5 + 10;
switch (numero2) {
    case 9: console.log("ES IGUAL A 9");
        break;
    case 12: console.log("ES IGUAL A 12");
        break;
    case 15: console.log("ES IGUAL A 15");
        break;
    case 100: console.log("ES IGUAL A 100");
        break;
    default: console.log("RESTO DE POSIBILIDADES");
        break;
}


/*
 
 
*************
FOR LOOP (BUCLE FOR) ITERADOR
VA A ESTAR EJECUTANDO EL CODIGO HASTA QUE SE DEJE DE
CUMPLIR O SE CUMPLA UNA CONDICIÓN
 
*/

console.log(1);
console.log(2);
console.log(3);
console.log(4);

// IRÁ EJECUTANDO EL CÓDIGO SIEMPRE QUE SE CUMPLE LA CONDICION

for (let i = 0; i <= 3; i++) {
    //i === ÍNDICE, SUELE EMPEZAR POR 0, PUES SE USA MUCHO PARA
    //RECORRER ARREGLOS
    //i<10 SERÁ LA CONDICIÓN. SE EJECUTA MIENTRAS SE CUMPLE
    //i++ ACTUALIZADOR
    console.log(i);

}

for (let i = 1; i <= 500; i++) {
    console.log("500 Primeros números:", i);
} // :) 

// PODEMOS USAR LOS COMPARADORES YA VISTOS, ===,<=,>=,<,>!==

/*
!!!!!!!!!!!!!!!!
EJERCICIO5
MOSTRAR EN ORDEN DESCENDENTE DEL 100 HASTA EL 0, PERO
DE 5 EN 5
INCLUIDOS AMBOS

*/
for (let i = 100; i >= 0; i -= 5) {
    console.log("De 100 a 0 de 5 en 5:", i)
};

/*



!!!!!!!!!!!!!!!
EJERCICIO6
MOSTRAR DEL 1 AL 20 TODOS LOS NÚMEROS PARES
INCLUIDOS AMBOS
NOTA: i%2===0 ME DA LA CONDICIÓN DE PAR
*/

for (let k = 1; k <= 20; k++) {
    if (k % 2 === 0) {
        console.log("numero pares desde 1", k)
    }
}



// for (let t = 1; t<=20, t%2===0; t++ ){
//     console.log("numeros pares t",t)
// }


/*

COPIAMOS EL ARRAY DE OBJETOS carrito


*/

let carrito = [
    {
        nombre: "TV",
        precio: 750
    },
    {
        nombre: "Tablet",
        precio: 350
    },
    {
        nombre: "Movil",
        precio: 550
    },
    {
        nombre: "PC",
        precio: 1750
    }
];

/* VAMOS A RECORRER ESE CARRITO DE COMPRAS
EN QUE POSICION INICIA UN ARRAY??
MOSTRAR LOS OBJETOS DE UNO EN UNO

*/

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
}


/* 
********************
WHILE LOOP. ITERADOR
MUY SIMILAR AL FOR, SINTAXIS UN POCO DIFERENTE
SE EJECUTA MIENTRAS UNA CONDICION SEA EVALUADA COMO
VERDADERA
*/

let i = 0;
// EL INDICE VA FUERA
// LA CONDICION SI VA DENTRO
// EL INCREMENTO VA EN EL CUERPO DE LA FUNCION

while (i < 10) {
    console.log(i);
    i++; // ACTUALIZADOR
}

// SI MODIFICAMOS EL ÍNDICE Y LE DAMOS UN VALOR INICIAL DE 20
// QUE SUCEDE???
// ESA ES JUSTO LA DIFERENCIA CON EL DO WHILE, QUE AL MENOS EJECUTA 
// UNA VEZ



// **********************
// DO WHILE
/*


*/

let j = 20;

do {
    console.log(j);
    j++;
} while (j < 10);

// EJECUTA EL CODIGO AL MENOS UNA VEZ Y DESPUES EVALUA

/*

for(let i=0; i<10; i++)             ///////FOR
{
    console.log(i)
}


let i=0;                            ///////WHILE
while(i<10){
    console.log(i);
    i++;
}


let i=0;                            ////////DO WHILE
do{
    console.log(i);
    i++;
}while(i<10)





*/
// const nombreApellido = prompt("Escriba su nombre","Escriba aqui");
// console.log(nombreApellido)



/*
!!!!!!!!!!!!!!!
EJERCICIO8
MOSTRAR LOS NUMEROS PARES, PERO HACERLO AHORA CON WHILE
MOSTRAR DEL 1 AL 20 TODOS LOS NÚMEROS PARES
INCLUIDOS AMBOS
NOTA: i%2===0 ME DA LA CONDICIÓN DE PAR
*/

let k = 1;
while (k <= 20) {
    if (k % 2 === 0) {
        console.log(k)
    }
    k++;
}








/*
!!!!!!!!!!!!!!
EJERCICIO9
CREAR UNA FUNCION QUE DADO UN ARGUMENTO ME DIGA SI
* ES POSITIVO
* ES NEGATIVO
* ES =0

*/
function ejercicio9(n1) {
    if (n1 < 0) {
        console.log("El número es negativo:", n1)
    } else if (n1 > 0) {
        console.log("El número es positivo:", n1)
    } else {
        console.log("El número es 0:", n1)
    }
}

ejercicio9(12);
ejercicio9(-34535435);
ejercicio9(0)






/*
!!!!!!!!!!!!!
EJERCICIO10
CREAR UNA FUNCIÓN QUE DADO UN ARGUMENTO, (NUMERO ENTERO)
ME DE UNA CUENTA ATRÁS DE LOS NÚMEROS
*/
function ej10(n1) {
    while (n1 >= 0) {
        console.log("Cuenta regresiva", n1)
        n1--
    }
}
ej10(10)



/*
!!!!!!!!!!!!!
EJERCICIO11
CREAR UNA FUNCIÓN QUE DADO UN ARGUMENTO DE ENTRADA N, ME
DE LA SUMA DE TODOS LOS NUMEROS ENTRE 0 Y N
*/
let resultadoejercicio11 = 0;

function ejercicio11(n1) {
    while (n1 >= 0) {
        resultadoejercicio11 = n1 + resultadoejercicio11;
        n1--
    }
    console.log("reultadoejerccio11", resultadoejercicio11);
}
ejercicio11(45);




let resultadoejercicio11v2 = 0;
let indice = 0;
function ejercicio11v2(n1) {
    while (indice <= n1) {
        resultadoejercicio11v2 += indice;
        indice++;
    }
    console.log("Resultado Ejercicio 11 v2", resultadoejercicio11v2);
}

ejercicio11v2(45);








// let resultadoej11=0;
// function ej11(n1){
//     while(n1>=0){
//         resultadoej11=resultadoej11+n1;//resultadoej11+=n1;
//         n1--;
//     }
//     console.log(resultadoej11)
// }
// ej11(6);







/*
!!!!!!!!!!!!!!
EJERCICIO
USAR WHILE, CREAR UNA FUNCIÓN QUE DADO UN ARGUMENTO
ME MUESTRE DE MANERA REGRESIVA, EL NUMERO / 10

*/

function ej12(n1) {
    while (n1 >= 0) {
        console.log("Cuenta regresiva", n1 / 10)
        n1--
    }
}
ej12(10)











/*

!!!!!!!!!!!!
EJERCICIO
FUNCION QUE DADO UN ARGUMENTO, ME CALCULE LA MEDIA
DE LA SUMA DE TODOS LOS VALORES
USAR WHILE
*/
let resultadoejercicio13 = 0;
let contador2 = 0;
function ejercicio13(n4) {
    while (n4 > 0) {
        resultadoejercicio13 = n4 + resultadoejercicio13;
        n4--;
        contador2++;
    }
    console.log("reultadoejercicio13/contador", resultadoejercicio13 / contador2);
}
ejercicio13(45);


























/*
*******************
    COMIENZO CLASE 2023/03/21
*******************

/*
!!!!!!!!!!!!!
EJERCICIO
CREAR UNA FUNCIÓN QUE DADOS DOS ARGUMENTOS, SOLO ME MUESTRE LOS IMPARES
ENTRE ELLOS, Y LA SUMA DE TODOS ELLOS, LOS IMPARES
*/


// const ej = function(a,b) {}
let total = 0;
const ejercicio12 = (a, b) => {

    for (i = a; i <= b; i++) {
        if (i % 2 === 1) {
            total += i;
            console.log(i)
        }
    }
    console.log("la suma de los impares es igual a:", total);
}
// ejercicio12(5,10)
ejercicio12(2, 12)





/*
!!!!!!!!!!!!
EJERCICIO16
CREAR UNA FUNCIÓN QUE DADA 3 NOTAS DEL EXAMEN, ME DIGA SI EL
ALUMNO ESTÁ, APTO O NO APTO

*/

let ejercicio15 = function (nota1, nota2, nota3) {
    if ((nota1 + nota2 + nota3) / 3 > 4) {
        console.log("APROBADO OOOOOK");
    } else { console.log("SUSPENSO") }
}

ejercicio15(3, 4, 5.05);





/*
!!!!!!!!!!!
EJERCICIO17
CREAR UNA FUNCIÓN QUE INTRODUCIDO UN MES, ME DIGA SI TENEMOS
30, 28 O 31 DÍAS
*/

// ejercicio17("febrero");

let ejercicio17 = function (nombre) {
    if (nombre == "enero" || nombre == "marzo" || nombre == "mayo") {
console.log("tiene 31 dias"); 
    }else if(nombre=="febrero"){

        console.log("tiene 28 dias")
    }else{console.log("tiene 30 dias")};
}
ejercicio17("febrero")






/*






FOREACH Y MAP

METODOS DE UN ARRAY
SOLO SE PUEDEN EJECUTAR EN ARREGLOS, UNA VEZ POR CADA ELEMENTO
DEL ARRAY

PARTIMOS DEL ARRAY CARRITO

*/
carrito.forEach(function (producto) {
    console.log(producto, producto.nombre);
})
/*
!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
PASAR A FUNCIÓN DE FLECHA EL FOREACH ANTERIOR
*/
carrito.forEach(producto => console.log(producto,producto.nombre));

/* MAP
ES IGUAL QUE EL FOREACH, LA DIFERENCIA ES QUE
MAP SE USA PARA CREAR NUEVOS ARRAY Y EL FOREACH
PARA MOSTRAR POR PANTALLA
*/

const arrayMap = carrito.map(producto => producto.nombre);

console.log(arrayMap);

// PASAMOS AL 07.JS

