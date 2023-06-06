/*
FUNCIONES EN JAVASCRIPT

SERIE DE PROCEDIMIENTO O INSTRUCCIONES QUE REALIZAN UNA ACCION

SON REUTILIZABLES

DECLARACION DE LA FUNCION
EXPRESION DE LA FUNCION
IIFE


******************
DECLARACIÓN DE LA FUNCIÓN
*/

//PRIMERO CREAMOS LA FUNCIÓN

function sumar(pepe,juan){ // ARGUMENTO DE LA FUNCIÓN
//CUERPO DE LA FUNCION
console.log(pepe+juan);
};

sumar(10,20); // SEGUNDO LLAMAMOS A LA FUNCIÓN

/*




*******************
EXPRESION DE LA FUNCION
*/
const sumar2 = function(n3,n4) {
    console.log(n3+n4);
}


sumar2(3,9);

// LA REALIDAD ES QUE LO ASIMILA MÁS A UNA VARIABLE QUE
// A UNA FUNCIÓN



/*
*********************
IIFE
SINTAXIS UN POCO DIFERENTE
*/
(function(){
    console.log("Esto es una funcion")
})();
// ESTAS FUNCIONES TIENEN LAS CARACTERISTISTA
// DE QUE NO HACE FALTA LLAMARLAS, SE LLAMAN ELLAS MISMAS 
// NO LAS UTILIZAREMOS MUCHO
// EL FIN ES PROTEGER QUE NO SE MEZCLEN LAS VARIABLES Y
// FUNCIONES CON LAS DE OTROS ARCHIVOS


/* FUNCIONES, PASO

PRIMERO----- CREAMOS
SEGUNDO----- LLAMAMOS

javascript SE EJECUTA EN DOS VUELTAS
PRIMERA ETAPA, LEE LA CREACION DE FUNCIONES
SEGUNDA ETAPA, LEE LA LLAMADA


DIFERENCIA ENTRE METODO Y FUNCION

ES MAS EL CONTEXTO EN EL QUE SE UTILIZAN
*/
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); // parseInt() ES UNA FUNCION
console.log(numero1.toString()); // .toString() ES UN MÉTODO

// NOMBRE DE FUNCION SEGUIDO DE PARENTESIS === FUNCIONES
// . SEGUIDO DEL NOMBRE DE LA FUNCION === METODOS










/*

*******************
    COMIENZO CLASE 2023/03/14
*******************

    ************
    REPASO DÍA ANTERIOR

    METODOS PARA LOS ARRAYS
        numeros.push(70); // AÑADE 70 AL FINAL DEL ARRAY
        numeros.unshift(-10, 129020, -30); // AÑADE ELEMENTOS AL INICIO
        numeros.pop(); // ME ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
        numeros.shift(); // ELIMINA EL PRIMER ELEMENTO
        numeros.splice(2, 3); //ELIMINA 3 ELEMENTOS A PARTIR DEL INDICE 2

    FOREACH

        meses.forEach(function (X){
            console.log(X); // CUERPO DE LA FUNCION
        })

    FUNCIONES
        PRIMERO: CREAMOS
        DESPUES: LLAMAMOS

        *********************
        DECLARACION DE LA FUNCION

            function sumar(pepe,juan){ // ARGUMENTO DE LA FUNCIÓN
                //CUERPO DE LA FUNCION
                console.log(pepe+juan);
            };

            sumar(10,20); // SEGUNDO LLAMAMOS A LA FUNCIÓN


        *******************
        EXPRESION DE LA FUNCION

            const sumar2 = function(n3,n4) {
                console.log(n3+n4);
            }
            sumar2(3,9);


        *********************
        IIFE

            (function(){
                console.log("Esto es una funcion")
            })();



    FIN DEL REPASO
    *************





!!!!!!!!!!!!
EJERCICIO

CREAR UNA FUNCIÓN QUE SOLUCIONES LAS ECUACIONES DE SEGUNDO GRADO
X=(-B +-SQRT(B*B -4*A*C))/2*A

A, B, C
ecuacionSegundo
*/

function ecuacionSegundo(A=0,B=0,C=0){
    console.log("Resultado operacion segundo Grado +:",(-B + Math.sqrt(B*B - 4*A*C))/(2*A));
    console.log("Resultado operacion segundo Grado -:",(-B - Math.sqrt(B*B - 4*A*C))/(2*A));
};

ecuacionSegundo(2,10,1);
ecuacionSegundo(2,10);


/*



!!!!!!!!!!!!
EJERCICIO

CREAR UNA FUNCIÓN QUE CUENTE LOS CARACTERES DE UN TWEET E INDICAR
SI ES MUY LARGO, O ES OK. 280 COMO ANTES

*/

function tweet(textoTweet){
    console.log("La longitud del tweet es:",textoTweet.length);
};

tweet("Este es un texto de prueba para contar el numero de caracteres");



function buscar(texto,palabra){
    console.log("Buscamos la palabra en el texto, está?:",texto.includes(palabra))
};

buscar("Este texto vamos a buscar","buscar");
buscar("Texto donde voy a buscar","rojo");


// function añadir(palabra, array){
//     console.log(array.push(palabra))
// }

// añadir(3,[1,2]);

/*



!!!!!!!!!!!!
EJERCICIO

CREAR UNA FUNCIÓN QUE ME MUESTRE LOS NÚMEROS PARES ENTRE
DOS NÚMEROS DADOS




*/

function restar (n1,n2){
    console.log(`Resultado de restar ${n1}-${n2}: ${n1-n2}`)
}

restar(10,2);
restar(7,3);
restar(2); // ESTÁ ESPERANDO 2 VALORES, Y SOLO RECIBE UNO,
//PARA ELLO EXISTEN LOS PARÁMETROS POR DEFECTO, QUE NO SON
//MÁS QUE INICIALIZAR LOS PARAMETROS A UNA VALORES PREDETERMINADOS

function restar2 (n1=0,n2=0){
    console.log(`Resultado de restar n1-n2 con parametros por default: ${n1-n2}`)
}

restar2(2);
restar2();


// FUNCIONEN QUE RETORNAN VALORES

function multiplicar(n1,n2){
    return n1*n2; // ME RETORNA UN VALOR
}

let valorRetornado = multiplicar(2,5);
console.log("EL VALOR RETORNADO ES:",valorRetornado);


//OTRA FUNCIÓN UN POCO MAS COMPLEJA

let total=0;

function agregarCarrito(precio){
    return total+=precio;
}

total = agregarCarrito(200);
total = agregarCarrito(500);
total = agregarCarrito(600);

console.log("EL TOTAL A PAGAR ES DE:",total)



let totalImpuesto=0;

function sumarImpuestos(precio,impuesto){
    return totalImpuesto+=precio*(impuesto/100)
}

sumarImpuestos(200,10);
sumarImpuestos(300,21);
sumarImpuestos(500,5);

console.log("EL TOTAL DE IMPUESTOS ES DE:",totalImpuesto)



/*
let total=0;

function agregarCarrito(precio){
    return total +=precio;
}

total = agregarCarrito(200);
total = agregarCarrito(500);
total = agregarCarrito(600);

console.log("EL TOTAL A PAGAR ES DE:",total)
*/
/*
!!!!!!!!!!!!
EJERCICIO
REALIZAR UNA FUNCIÓN QUE CALCULES EL IVA QUE SE INDIQUE DE LOS
PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME
*/


// let impuesto=0;

// function calcularImpuesto(precio=0,IVA=0){
//     return impuesto+=(precio*IVA/100)
// }

// impuesto = agregarCarrito(200);
// impuesto = agregarCarrito(500);
// impuesto = agregarCarrito(600);

// console.log("EL TOTAL DE IMPUESTOS A PAGAR ES DE:",impuesto)



// MÉTODOS DE PROPIEDAD
// SON FUNCIONES CON LA SINTAXIS DE MÉTODO
// VAMOS A CREAR UN REPRODUCTOR MUSICAL

const reproductor ={ // ES UN OBJETO DE FUNCIONES
    reproducir : function(nc){ 
        console.log(`Reproduciendo Canción con ID: ${nc}`)
    },
    
    pausar : function(){
        console.log("PAUSANDO CANCIÓN...")
    },

    crearPlaylist : function(nombre){
        console.log(`Creando Playlist: ${nombre}`)
    }
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlaylist("Metal");







reproductor.borrarCancion2 = function(nc){
    console.log(`Borrando la canción ${nc}`)
};

reproductor.borrarCancion2(34);






// AÑADIMOS UNA PROPIEDAD MÁS
reproductor.borrarCancion = function(id){
    console.log(`Borrando Canción con ID: ${id}`)
}

reproductor.borrarCancion(34);

// VEREMOS EL DOM Y LOS EVENTOS MÁS ADELANTE


function nombreCompleto(nombre,ap1,ap2){
    console.log("Nombre Completo:",nombre+" "+ap1+" "+ap2),
    console.log(nombre,ap1,ap2)
    console.log(`${nombre} ${ap1} ${ap2}`)
}

nombreCompleto("Federico","García","Lorca");

















/*
*******************
    COMIENZO CLASE 2023/03/15
*******************


!!!!!!!!!!!!!!!!!
REPASO DÍA ANTERIOR

    INICIALIZAR LOS PARÁMETROS CON VALORES POR DEFECTO

    FUNCIONES QUE RETORNAN UN VALOR
    function multiplicar(n1=0,n2=10){
    return n1*n2; // ME RETORNA UN VALOR
    }
    let resultados = multiplicar(2,5);

    MÉTODOS DE PROPIEDAD
        // SON FUNCIONES CON LA SINTAXIS DE MÉTODO
        // VAMOS A CREAR UN REPRODUCTOR MUSICAL

        const reproductor ={ // ES UN OBJETO DE FUNCIONES
            reproducir : function(nc){ 
                console.log(`Reproduciendo Canción con ID: ${nc}`)
            },
            
            pausar : function(){
                console.log("PAUSANDO CANCIÓN...")
            },

            crearPlaylist : function(nombre){
                console.log(`Creando Playlist: ${nombre}`)
            }
        }

        reproductor.reproducir(3840);
        reproductor.pausar();
        reproductor.crearPlaylist("Metal");




FIN DEL REPASO
!!!!!!!!!!!!!!!!!


FUNCIONES DE FLECHA / ARROW FUNCTION

        SINTAXIS MÁS CORTA

        PARTIREMOS DE LA EXPRESIÓN DE LA FUNCIÓN 
*/

//EXPRESIÓN DE LA FUNCIÓN
let triplicar = function(numero=1){
    console.log("VALOR DE TRIPLICAR CON EXPRESION DE LA FUNCIÓN",numero*numero*numero);
}

triplicar(12);

//ARROW FUNCTION
    //PASOS
    /*
        ELIMINAR EL FUNCTION
        AÑADIR => FLECHA ANTES DE LA LLAVE DE APERTURA
        CUANDO SOLO SE TIENE UNA LINEA EN EL CUERPO DE LA FUNCIÓN PODEMOS ELIMINAR LAS LLAVES
            SI HAY MÁS DE UNA HYA QUE PONERLA {}
        CUANDO SOLO SE TIENE UN PARÁMETRO SE PUEDE ELIMINAR LOS PARÉNTESIS
            SI HAY MAS DE UN PARAMETRO, VACIO, O INICICIALIZADO HAY QUE PONERLO()
        EL RETURN VA IMPLICITO EN EL CUERPO DE LA FUNCIÓN, SE PUEDE OMITIR SU VA SOLO
            SI HAY MÁS DE UNA LINEA EN EL CUERPO DE LA FUNCIÓN HAY QUE PONERLO
    */

let triplicarFlecha = (numero=1) => console.log("VALOR DE TRIPLICAR CON ARROW FUNCTION",numero*numero*numero);

triplicarFlecha(12);  

/* !!!!!!!!!!!!!!!!!
EJERCICIO

CREAMOS NUEVO ARROW FUNCTION, aprendiendo, QUE  DEVUELVA UN VALOR +7 Y LO 
ALMACENE EN UNA VARIABLE resultadoAprendiendo




let aprendiendo = (numero=1)=> numero + 7; //PODEMOS ELIMINAR EL RETURN

let resultadoAprendiendo=aprendiendo(12);  
console.log("USO DE ARROW FUNCTION",resultadoAprendiendo)


*/




/*

!!!!!!!!!!!!!!!
EJERCICIO

CONVERTIR CADA UNA DE LAS SIGUIENTES FUNCIONES EN ARROW FUNCTION
COPIAR EL RRAY CARRITO DEL FINAL DEL ARCHIVO 04.JS


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

//console.table(carrito);



// SOME IDEAL PARA ARREGLO DE OBJETOS. ME BUSCA ESE VALOR DENTRO DEL ARRAY
let resultado;

resultado = carrito.some(function (producto) {
    return producto.nombre === "Tablet"
});

console.log("RESULTADO DE FUNCION SOME IDEAL", resultado);

// PONER CON ARROW FUNCTION

resultado = carrito.some(producto=>producto.nombre==="Tablet");
console.log("RESULTADO DE FUNCION SOME IDEAL CON FUNCION DE FLECHA", resultado);






// COMO SABER EL TOTAL DEL CARRITO

resultado = carrito.reduce(function (total, producto) { // PARA ITERAR
    // TOTAL, PRODUCTO: PARAMETROS DE LA FUNCION
    return total + producto.precio
},0); //SUMA UN VALOR AL RESULTADO SIMPLEMENTE
console.log("USO DE REDUCE", resultado);

//PONER CON ARROW FUNCTION

resultado = carrito.reduce((total, producto)=> total + producto.precio, 0); // EL VALOR DEL INDICE DONDE INICIA
console.log("USO DE REDUCE CON ARROW FUNCTION", resultado);



// FILTER, PARA FILTRAR

resultado = carrito.filter(function (producto) {
    return producto.precio > 400
});
console.log("USO DE FILTER", resultado);

// === ESTRICTAMENTE IGUALES, INCLUIDO TIPO DATO
// !== DIFERENTES EXTRICTAMENTE, INCLUIDOS TIPO DATO
// == IGUALES, SIN DIFERENCIAR TIPO DATO
// != DIFERENTES, PERO NO INCLUYE EL TIPO DE DATO
// < MENOR QUE
// <= MENOR IGUAL
// > MAYOR QUE
// >= MAYOR IGUAL

// PONER CON ARROW FUNCTION

resultado = carrito.filter( producto=>producto.precio > 400);
console.log("USO DE FILTER CON ARROW FUNCTION", resultado);


// PASAMOS AL ARCHIVO 06.js




