"use strict"; // CORRER JS EN MODO ESTRICTO
/*

    *******************
    COMIENZO CLASE 
    *******************

    CREAR UN NUEVO ARCHIVO 03.js Y COMENTAR EL 02.js

    *************
    REPASO DÍA ANTERIOR


    MÉTODOS PARA LOS NUMBER CON EL OPERADOR MATH

    ORDEN DE LAS OPERACIONES COMO HABITUALMENTE

    INCREMENTOS

    CONCATENACIÓN DE STRINGS CON EL OPERADOR +

    USO TEMPLATE STRING
        console.log(`Nombre Cliente: ${nombreJM} Email: ${emailJM}`); //COMILLAS INVERTIDAS, DERECHA DE LA P

    TIPO DE DATOS BOOLEANOS (TRUE/FALSE)


    FIN DEL REPASO
    *************



OBJETOS EN JAVASCRIPT

    SON CONTENEDORES DE PROPIEDADES, DONDE UNA 
    PROPIEDAD TIENE 
    NOMBRE Y VALOR
    ES LO MÁS UTILIZADO, ES LA COLUMNA 
    VERTEBRAL 
    DE JAVASCRIPT

    !!!!!!!!!!!!!!!
    EJERCICIO
    CREAR 3 VARIABLES CON LET Y ASIGNAR 
    VALORES

    nombreProducto
    precio
    disponible

    UN OBJETO ES UNA VARIABLE QUE CONTENGA TODAS LAS PROPIEDADES ANTERIORES

    LA VARIABLE ES EL OBJETO
    LO QUE CONTIENE SON PROPIEDADES
    */

    const producto = {
        nombreProducto: "Reloj",
        precio: 65,
        disponible: true
    }

    console.log("MI PRIMER OBJETO producto: ",producto);
    // console.log(`MI PRIMER OBJETO CON TEMPLATE STRING ${producto}`, producto);

    /*

    ESTRUCTURA DE UN OBJETO

    let/var/const NombreDelObjeto = {
        propiedad o llave del objeto : valor,
        mas propiedades : valor,
        .
        .
        .
    }


    SINTAXIS DE PUNTO
    PARA ACCEDER A LAS PROPIEDADES DEL OBJETO

    */


    console.log(producto.precio, typeof producto.precio);
    console.log(`${producto.precio} ${typeof producto.precio}`);
    console.log(producto["precio"], typeof producto["precio"])
    //console.log("USO DE SINTAXIS DE PUNTO producto.precio:", producto.precio);

    //console.log(`USO DE SINTAXIS DE PUNTO CON TEMPLATE STRING: ${producto.precio}`);
    // console.log("USO DE SINTAXIS DE PUNTO, producto.precio: ",producto.precio);

    //OTRA FORMA DE ACCEDER A LAS PROPIEDADES DE UN OBJETO, SE USA MENOS

    //console.log("USO DE CORCHETES",producto["precio"]);

/* 
MODIFICAR OBJETOS

    UNA CARACTERISTICAS QUE TIENEN LOS OBJETOS ES QUE PODEMOS A
    AGREGAR, QUITAR Y MODIFICAR INFORMACIÓN DE ELLOS

    VAMOS AÑADIR UNA PROPIEDAD NUEVA AL OBJETO producto
    QUE YA TENEMOS CREADO
*/


// MODIFICAR
console.table(producto)

producto.precio = 500;
console.table(producto)

//AÑADIR
producto.categoria="Relojes";
console.table(producto)

//ELIMINAR
delete producto.disponible;
console.table(producto)











// producto.imagen = "imagen.jpg";

// console.log("AÑADIR IMAGEN a producto: ",producto);

// PARA ELIMINAR PROPIEDADES USAMOS delete
// VAMOS A BORRAR LA PROPIEDAD DISPONIBLE

// delete producto.disponible;

// console.log("BORRAMOS DISPONIBLE a producto: ",producto);

// MODIFICAR. LLAMAMOS A LA PROPIEDAD Y ASIGNAMOS NUEVO VALOR

// producto.precio=500;

// console.log("MODIFICAMOS PRECIO a producto: ",producto);




const precioProducto = producto.precio;

console.log("CREAMOS VARIABLE PRECIO partiendo de propiedad: ",precioProducto);

// ESTAMOS ACCEDIENDO A LA PROPIEDAD PRECIO DEL PRODUCTO Y ALMACENANDO EL VALOR
// EN UNA VARIABLE NUEVA precioProducto

/*
!!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
ALMACENAR EN UNA VARIABLE nombreProducto EL VALOR DE LA
PROPIEDAD nombreProducto DEL OBJETO producto

PUEDES LLAMAR IGUAL LA VARIABLE Y LA PROPIEDAD, NO PASA NADA
PUES SON DOS COSAS TOTALMENTE DISTINTAS



DESTRUCTURING DE OBJETOS
SACAR DE UNA ESTRUCTURA

CREAMOS LA VARIABLE Y EXTRAE EL VALOR
TODO EN UN SOLO PASO

    CREA LA VARIABLE
    EXTRAE EL VALOR
    LA VARIABLE LA LLAMA IGUAL QUE LA PROPIEDAD
*/

// DESTRUCTURING AL PRECIO


//const {disponible} = producto;
//COMENTAR PREVIAMENTE NOMBREPRODUCTO
const {disponible,precio,nombreProducto} = producto;//USO DE LLAVES, EN EL INTERIOR LA PROPIEDAD
// console.log("CREAMOS VARIABLE precio CON DESTRUCTURING:",precio);
console.log(`CREAMOS VARIABLE disponible CON DESTRUCTURING: ${disponible}`);





/*
    !!!!!!!!!!!!!!!!!!!!!
    EJERCICIO
    CREAR UN OBJETO QUE SE LLAME playa
    CON LAS SIGUIENTES PROPIEDADES:
    - nombre
    - ubicacion
    - recomendable (boolean)
    - temperaturaAgua (numero)
    HACER DESTRUCTURING A LAS PROPIEDADES Y MOSTRAR LA INFO POR CONSOLA


// UNA VARIABLE CON CONT NO SE PUEDE MODIFICAR

// PERO LAS PROPIEDADES DE UN OBJETO CREADO CON CONST SI PODEMOS MODIFICARLAS


MÉTODOS PARA LOS OBJETOS

    UN OBJETO A PESAR DE ESTAR CREADO CON CONST, SI QUE PODEMOS
    AÑADIR Y ELIMINAR PROPIEDADES. ES UNA CARACTERISTICA DE LOS OBJETOS

    SI QUEREMOS CONGELAR UN OBJETO PARA QUE NO SE PUEDAN MODIFICAR LAS 
    PROPIEDADES, HACEMOS USO DE Object.freeze(producto);
*/

Object.freeze(producto);

// INTENTAMOS AÑADIR UNA PROPIEDAD NUEVA. CONGELAR

//producto.congelado = "intentamos congelarlo";

console.log("INTENTO AÑADIR UNA PROPIEDAD TRAS EL FREEZE", producto);

// Object.freeze(producto); // NO ME PERMITIRÁ MODIFICAR EL OBJETO

/*

!!!!!!!!!!!!!!
EJERCICIO
AÑADIR UNA PROPIEDAD NUEVA LLAMADA categoria
Y MOSTRAR EL OBJETO POR CONSOLA





NO APARECE NINGUN ERROR, PUES JAVASCRIPT SE ESTÁ EJECUTANDO
EN UN MODO "RELAJADO", PARA QUE SEA MÁS ESTRICTO, AÑADIMOS...
EN LA PARTE SUPERIOR DEL ARCHIVO
"use strict";

COMO SABEMOS SI UN OBJETO ESTÁ CONGELADO?
HACEMOS USO DE UN MÉTODO PARA OBJETOS

*/
console.log("ESTA CONGELADO??",Object.isFrozen(producto)); //TRUE SI ESTÁ CONGELADO
/*
FREEZE NO ME PERMITE NI AÑADIR, NI QUITAR NI MODIFICAR PROPIEDADES
producto.disponible = false; //NO ME MODIFICARÁ EL VALOR DE LA PROPIEDAD,
PUES ESTÁ CONGELADO CON FREEZE

CON EL METODO Object.freeze
    NO PODEMOS AÑADIR PROPIEDADES
    NO PODEMOS BORRAR PROPIEDADES
    NO PODEMOS MODIFICAR PROPIEDADES

CON EL MÉTODO Object.Seal
    NO PODEMOS AÑADIR PROPIEDADES
    NO PODEMOS BORRAR PROPIEDADES
    SI PODEMOS MODIFICAR PROPIEDADES

!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJETO NUEVO QUE SE LLAME MEDIDAS
AÑADIR 4 PROPIEDADES  (peso, alto, ancho, profundidad)
APLICARLE EL MÉTODO SEAL
A CONTINUACIÓN MODIFICAR UNA DE ESAS PROPIEDADES

*/

let medidas = {
    peso:14,
    alto:16,
    ancho:123.3,
    profundidad:1/3
};

Object.seal(medidas);

medidas.profundidad = 1;


console.log("MOSTRAMOS COMO SE PUEDE MODIFICAR CON SEAL",medidas)

/*



COMO UNIR DOS OBJETOS CON EL SPREAD/REST OPERATOR

EL OBJETIVO ES NO MODIFICAR LOS OBJETOS ORIGINALES


*/
let nuevoProducto = {...producto,...medidas};
console.log ("NUEVO OBJETO CON SPREAD OPERATOR:",nuevoProducto);

/*
const nuevoProducto = {...producto, ...medidas}; //ME AÑADE 
// A UN NUEVO OBJETO LLAMADO nuevoProducto TODAS LAS PROPIEDADES DE
// LOS OBJETOS, productos y medidas
console.log ("NUEVO OBJETO CON SPREAD OPERATOR:",nuevoProducto);


CREAMOS EL 04.js Y COMENTAMOS EL 03.js
*/
