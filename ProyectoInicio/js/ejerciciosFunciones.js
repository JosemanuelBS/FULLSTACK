// PASAR CADENA DE TEXTO A MAYUSCULAS

function mayusculas(texto){
    return texto.toUpperCase();

};

let nuevo = mayusculas("buscar en texto");

console.log(nuevo);


// CONCATENAR DOS ARREGLOS DADOS
// FUNCION QUE RECIBA 2 ARREGLOS Y DE COMO RESULTADO
// UN ARRAY NUEVO CONCATENANDO LOS DOS ANTERIORES

function concatenar(array1,array2){
    return [...array1,...array2];
}

array1 = [1,2,3,4,5];
array2 = ["lunes", "martes", "miercoles"];

let resultadoConcatenado = concatenar(array1,array2);

console.log(resultadoConcatenado);


// OBTENER EL ULTIMO ELEMENTO DE UN ARRAY

function lastElement (array){
    let total = array.length;
    let last = array.slice(total -1);
    return last
};
arraySemana = ["lunes","martes","miercoles","jueves","viernes"];
let element = lastElement(arraySemana);
console.log(element);


// GENERAR UN NUMERO ALEATORIO ENTRE DOS NUMEROS DADOS
// N1<N2

function aleatorio(a, b) {
    let random = Math.random()*(b - a + 1) + a
    console.log(Math.round(random));
}
aleatorio(1, 6)



// COMPROBAR SI UN ELEMENTO EXISTE EN UN ARRAY
// FORMATO TEXTO

function  verificarElemento(array, elemento){
    return array.includes(elemento);
}
let arraycoches=["perritomotosiclon", "triciclo", "wawa"]
let elemento="perritomotosiclon";
let existeElemento= verificarElemento(arraycoches, elemento)
console.log(existeElemento)



//MOSTRAR EL MÍNIMO DE TRES NUMEROS DADOS
function numeroMenor(num1,num2,num3){
    return Math.min(num1,num2,num3);
}

var numeroMenor = numeroMenor(5,10,9);
console.log(numeroMenor);

//MOSTRAR EL MAXIMO DE 4 NUMEROS DADO
function numeroMayor(num1,num2,num3,num4){
    return Math.max(num1,num2,num3,num4);
}

var resultadoMayor = numeroMayor(5,10,9,23);
console.log(resultadoMayor);




//CONVERTIR HORA ESPAÑOLA A HORA DE CANARIAS

function horario(hora){
    return hora -1;
};

let resultadohorario = horario(8);
console.log(resultadohorario);


// CONVERTIR GRADOS FAHRENHEIT A CELSIUS

function fahrenheit(grados){
    return ((grados-32)*5/9);
};
let temperatura =fahrenheit(100);
console.log(temperatura);

// CONVERTIR GRADOS CELSIUS A FAHRENHEIT

function celsius(grado){
    return((grado*9/5)+32);
};

let temperatura1 = celsius(38);
console.log(temperatura1);


//CALCULAR EL PERIMETRO DE UN TRIAGULO DE LADOS A B C

function perimetro(a,b,c){
    return (a+b+c);
};

let lados = perimetro(5,5,10);

console.log(lados);


//CALCULAR AREA DE UN TRIANGULO DADAS LA BASE Y LA ALTURA

function areaTriangulo (base, altura){
    return (base*altura/2)
};

let resultadoArea = areaTriangulo(10,5);
console.log(resultadoArea);


// CALCULAR EL AREA DE UN CIRCULO
// DADO EL RADIO

function circulo(radio){
    return Math.PI*radio*radio;
}
let areaCirculo=circulo(5);
console.log(areaCirculo)


// CREAR UNA FUNCIÓN QUE ME CALCULE LA POTENCIA
// DADA DE UN NUMERO
function ej14(numero, potencia){
    return Math.pow(numero, potencia);
};

let resultadoej14 = ej14(10,5);
console.log(resultadoej14,"€")




// REDONDEAR UN NUMERO AL ENTERO SUPERIOR
// ARGUMENTO, UN DECIMAL

function redondeo(numero){
    return Math.ceil(numero)
};
let resultadoRedondeo = redondeo (4.1);
console.log("Resultado del ejercicio de redondeo:",resultadoRedondeo)


// ELIMINAR ESPACIOS EN BLANCO AL INICIO Y FINAL DE UN STRING

// let espacio1 = " hola ";
// console.log(espacio.trim());

function espacio(p1){
    return p1.trim();

}
let resultadoEspacio = espacio(" hola ");
console.log(resultadoEspacio);

// REEMPLAZAR UNA PALABRA DE UN STRING POR OTRA DADA
// 3 ARGUMENTOS DE ENTRADA, CADENA, PALABRA VIEJA, PALABRA NUEVA








function reemplazarPalabra(frase,palabrabusca,palabrareemplaza){
    return frase.replace(palabrabusca,palabrareemplaza);
};
// let frase="frase que contiene perro";
// let palabra1="perro";
// let palabra2="gato";
// console.log(frase);
// console.log(reemplazarPalabra(frase,palabra1,palabra2));
let resultadoReemplazar = reemplazarPalabra(
    "frase que contiene perro","perro","gato"
);
console.log(resultadoReemplazar);

// COMPROBAR SI UN usuario es ES MAYOR DE >= 18

function edad(usuario,limite){
    return usuario>=limite;
};

let resultado_x = edad(19,18);
console.log(resultado_x)









//  OBTENER LOS PRIMEROS N CARACTERES DE UN STRING
// 2 ARGUMENTOS, UN STRING Y EL NUMERO DE CARACTERES

function caracteres(a,n){
    return(a.slice(0,n));
};
let resultado17=caracteres("piedad necesito café",10);
console.log(resultado17);


//  OBTENER LOS ULTIMOS N CARACTERES DE UN STRING
// 2 ARGUMENTOS, UN STRING Y EL NUMERO DE CARACTERES


function caracteres1(a,n){
    return(a.slice(-n));
};
let resultado18=caracteres1("piedad necesito café",10);
console.log(resultado18);








// COMPROBAR SI UN NUMERO ES PAR. PISTA(N%2===0)

function par(numeropar){
    return numeropar%2===0
}
var comprobacion = par(7);
console.log("Es el número par:", comprobacion);

function impar(numeroimpar){
    return numeroimpar%2!==0
}
var comprobacion2 = impar(7);
console.log("Es el número impar:", comprobacion2);





// CONCATENAR 2 STRING Y PONERLOS TODO EN MAYUSCULAS
// 2 ARGUMENTOS, STRING1 Y STRING2

function palabras(palabra1,palabra2){
    return (palabra1 + palabra2).toUpperCase();
}
let nuevaPalabra= palabras("gato","perro");
console.log(nuevaPalabra);







// COMPROBAR SI UNA VARIABLE ES TIPO BOOLEAN. PISTA (TYPEOF)

function palabra9(palabra){
    return typeof palabra === "boolean"
}
let resultadoP8 = palabra9(true);
console.log(resultadoP8)









// FUNCION QUE ME PASE DE MINUTOS A SEGUNDOS

function cambioMS(numeros){
    return numeros *60;

}
let cambioResultado=cambioMS(10);
console.log(cambioResultado);








// AÑADIR ELEMENTO AL INICIO Y OTRO AL FINAL DE UN ARRAY
// ARGUMENTOS. ARRAY, ELEMENTO INICIO, ELEMENTO FINAL







