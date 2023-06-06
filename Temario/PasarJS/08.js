/*
PROGRAMACIÓN ORIENTADA A OBJETOS, POO

JAVASCRIPTS HACE USO DE PROTOTYPES

*/

//OBJECT LITERAL, MANUAL
const producto = {
    nombre : "tablet",
    precio : 500
}




//OBJECT CONSTRUCTOR, DINÁMICO
//SINTAXIS MUY SIMILAR A UNA FUNCION
//CREAMOS UNA CLASE, QUE ES UN CONTENEDOR DE DATOS
//OBJETIVO, CREAR OBJETOS DE MANERA MÁS DINAMICA


//LE PONEMOS EL NOMBRE DE LA CLASE SIEMPREINICIO EN MAYUS
function ProductoClase(nombre,precio,disponibilidad=false,categoria="play"){
    this.nombreObjeto = nombre;
    this.precioObjeto = precio;
    this.categoria = categoria;
    this. disponibilidad = disponibilidad;
}
//CREAMOS UNA INSTANCIA
// const producto2 = new ProductoClase("Monitor curvo",800,true,"tech");
// const producto3 = new ProductoClase("PC",1800);
// const producto4 = new ProductoClase("Reloj",800);
// console.log(producto2);
// console.log(producto3);
// console.log(producto4);

/*
!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJETO CON OBJECT CONSTRUCTOR 
LLAMADO FECHA
CON PROPIEDADES, AÑO, MES, DÍA
DAR 4 VALORES DISTINTOS
*/










/*

PROTOTYPES
ME PERMITE CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN OBJETO
ESPECIFICO

*/
ProductoClase.prototype.formatearProducto = function() {
    console.log(`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto} €`);
};

const producto2 = new ProductoClase("Monitor curvo",800);
// const producto3 = new ProductoClase("PC",1800);
// const producto4 = new ProductoClase("Reloj",800);
console.log(producto2.formatearProducto());
// console.log(producto3);
// console.log(producto4);

// console.log(producto2);
// console.log(producto2.formatearProducto());



//CLASES EN JAVASCRIPT
/*



*/
class ProductoClase2{
    constructor(nombre, precio) { //ES UNA FUNCIÓN YA EN SI
        this.nombreObjeto2=nombre;
        this.precioObjeto2=precio;
    }

    formatearProducto2(){
        console.log(`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} €`);
    }
}

//INSTANCIAS
const producto5 = new ProductoClase2("TV nueva",678);

console.log(producto5)
console.log(producto5.formatearProducto2())

/*
!!!!!!!!!!!!!!!!!!!
EJERCICIO
AÑADIR UN NUEVO METODO QUE ME CALCULE EL PRECIO CON UN 20% DESCUENTO
 */
























/*
*******************
    COMIENZO CLASE 2023/03/22
*******************

*******************
REPASO DÍA ANTERIOR


    FOREACH Y MAP

        METODOS DE UN ARRAY
        SOLO SE PUEDEN EJECUTAR EN ARREGLOS, UNA VEZ POR CADA ELEMENTO
        DEL ARRAY
        carrito.forEach(function (producto) {
            console.log(producto, producto.nombre);
        })
        MAP
        ES IGUAL QUE EL FOREACH, LA DIFERENCIA ES QUE
        MAP SE USA PARA CREAR NUEVOS ARRAY Y EL FOREACH
        PARA MOSTRAR POR PANTALLA
        const arrayMap = carrito.map(producto => producto.nombre);

        console.log(arrayMap);


    THIS

        PODEMOS TENER FUNCIONES DENTRO DE OBJETOS

        reserva.informacion=function(){console.log(`El cliente ${this.nombrenombre} reservó y su cantidad a pagar es de ${this.total}`)};

        console.log(reserva.informacion());

        THIS HACE REFERENCIA A LAS PROPIEDADES DENTRO DE UN OBJETO


    POO

        //OBJECT LITERAL, MANUAL
        const producto = {
            nombre : "tablet",
            precio : 500
        }


        //OBJECT CONSTRUCTOR, DINÁMICO
        //SINTAXIS MUY SIMILAR A UNA FUNCION
        //CREAMOS UNA CLASE, QUE ES UN CONTENEDOR DE DATOS
        //OBJETIVO, CREAR OBJETOS DE MANERA MÁS DINAMICA


        //LE PONEMOS EL NOMBRE DE LA CLASE SIEMPREINICIO EN MAYUS
        function ProductoClase(nombre,precio,disponibilidad=false,categoria="play"){
            this.nombreObjeto = nombre;
            this.precioObjeto = precio;
            this.categoria = categoria;
            this. disponibilidad = disponibilidad;
        }

        class ProductoClase2{
        constructor(nombre, precio) { //ES UNA FUNCIÓN YA EN SI
            this.nombreObjeto2=nombre;
            this.precioObjeto2=precio;
        }
        }

        //INSTANCIAS
        const producto5 = new ProductoClase2("TV nueva",678);



FIN DEL REPASO
*******************


POO HERENCIA

        LA HERENCIA NOS PERMITE CREAR CLASES PARTIENDO DE CLASES YA CREADAS
        





!!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJECT CONSTRUCTOR Libro CON PROPIEDADES nombre, precio, isbn
HACIENDO USO DEL CONSTRUCTOR
Y GENERAR UNA INSTANCIA AL MENOS
*/




class Libro {
    constructor(nombre,precio,isbn){

        this.nombre=nombre;
        this.precio=precio;
        this.isbn=isbn;
    }
}

const libroObjeto = new Libro("Curso Fullstack",120,912229);
console.log(libroObjeto);

// const libroObjeto3 ={
//     nombre: "Curso Fullstack",
//     precio: 120,
//     isbn: 912229,
//     color: "azul",
//     tapa: "dura",
//     papel: true
// }

// const libroObjeto4 ={
//     nombre: "Curso Fullstack",
//     precio: 120,
//     isbn: 912229,
//     color: "azul",
//     tapa: "dura",
//     papel: true
// }
// PARA QUE USAMOS LA HERENCIA, PARA COPIAR PROPIEDADES DE UNA CLASE A OTRA

class Categoria extends Libro{
    constructor(nombre,precio,isbn,categoria){

        super(nombre,precio,isbn);
        this.categoria=categoria;

    }
    formatearProducto3(){
        console.log(`El producto ${this.nombre} pertenece a la categoria ${this.categoria}`)
    }
}
//RESOLVER PROBLEMA DE HERENCIA


//INSTANCIA
const libroObjeto2 = new Categoria("Curso Fullstack",120,912229,"Programación");
console.log(libroObjeto2);
console.log(libroObjeto2.formatearProducto3())

// class Categoria extends Libro{
//     constructor(nombre,precio,isbn,categoria){
//         super(nombre,precio,isbn);// LE ESTOY DICIENDO QUE ME HEREDE EL CONSTRUCTOR
//         this.categoria=categoria;
//     }
//     formatearProducto3(){
//         console.log(`El producto ${super.nombre} pertenece a la categoria ${this.categoria}`);
//     }
// }

// const libroObjeto2 = new Categoria("Curso Fullstack",120,912229,"Pogramación");
// console.log(libroObjeto2);




/*
!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJECT CONSTRUCTOR COCHE
CON PROPIEDADES MARCA, AÑOCOMPRA, MOTOR, MATRICULA
UNA FUNCIÓN QUE ME DIGA EL NÚMERO DE AÑOS QUE TIENE EL COCHE
CREAR UNA INSTANCIA


PASAMOS AL 09.JS
*/

class Coche {
    constructor(marca,año,motor,matricula){
        this.marca=marca;
        this.año=año;
        this.motor=motor;
        this.matricula=matricula;
    }
    calculaEdad(){
        console.log(`La edad de tu coche ${this.marca} es de ${2023-this.año}`)
    }
}

const miCoche = new Coche("Renault Twingo",1900,"39cv","0022abc");
console.log(miCoche);
console.log(miCoche.calculaEdad());

const cochePapa = new Coche("mini morris",1200,null,"2322pd");
console.log(cochePapa);
