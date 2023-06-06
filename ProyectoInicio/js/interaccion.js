/*
CREAMOS EL ARCHIVO interaccion.js Y COMENTAMOS EL 10



/*
*******************
    COMIENZO CLASE
*******************

*******************
REPASO DÍA ANTERIOR



TRY CATCH

        // try{

        //     console.log(numero2);

        // } catch(error){

        //     console.log(error)

        // } SOLO SE USA EN SITUACIONES CRÍTICAS




PROMISE

        const usuarioAutenticado = new Promise((resolve,reject)=>{ //RESOLVE Y REJECT SE PASAN AUTOMATICAMENTE CON EL PROMISE
            // RESOLVE FUNCION QUE SE EJECUTA CUANDO EL PROMISE SE CUMPLE
            // REJECT NO SE CUMPLE
            const auth = true;

            if(auth){
                resolve("usuario Autenticado");
            }else{
                reject("No se puedo iniciar sesion")
            }
        });

        console.log(usuarioAutenticado);

        /* EN LOS PROMISES EXISTEN 3 VALORES

        PENDING: EL PROMISE NO SE HA CUMPLIDO PERO TAMPOCO SE HA RECHAZADO, ESTÁ EN ESPERA
        FULFILLER: EL PROMISE SE HA CUMPLIDO
        REJECT: SE HA RECHAZADO O NO SE PUDO CUMPLIR

NOTIFICACIONES

        VIMOS COMO SELECCIONAR UN ELEMENTO DE HTML
        COMO APLICAR UN EVENTO A ESA SELECCIÓN
        ESE EVENTO ERA UNA NOTIFICACION


    
    ASYNC/AWAIT 

        async function app(){
        const resultadoAsync = await descargarNuevosClientes(); 
        //ESPERAMOS A QUE descargarNuevosClienets HAYA FINALIZADO
        console.log(resultadoAsync) 
        }
        LA FUNCIÓN APP ESPERABA A QUE SE TERMINASE DE EJECUTAR LA FUNCION DESCARGARNUEVOSCLIENTES
        PARA EJECUTAR EL CUERPO DE LA FUNCIÓN


    FETCH API

        CREAMOS UN NUEVO ARCHIVO empleados.json UN ARCHIVO LOCAL QUE SIMULA UNA BASE DE DATOS

        VIMOS DOS FORMAS DE HACERLO, LA MÁS SENCILLA CON ASYNC/AWAIT

        async function obtenerEmpleados2() {
        const resultado = await fetch("empleados.json"); ALMACENAMOS EN UNA VARIABLE EL FETCH
        const datos = await resultado.json();
        console.log(datos)
        }

        obtenerEmpleados2();
        





FIN DE REPASO
******************


AHORA VEREMOS COMO ACTUAR JAVASCRIPT EN EL DOM, 
COMO SELECCIONAR ELEMENTOS DEL HTML, 
COMO CREAR EVENTOS, MODIFICAR HTML ETC

LA INTERACCIÓN

COMO SELECCIONAR CODIGO HTML, 3 FORMAS

    QUERYSELECTOR
    QUERYSELECTORALL
    GETELEMENTBYID

    TODOS INICIAN CON DOCUMENT



QUERYSELECTOR ******************************

    RETORNA UNO O NINGUN ELEMENTO
    MUY SIMILARES A LOS QUE TENEMOS EN CSS 
        CLASES CON .
        ID CON #

    DOCUMENT HACE REFERENCIA A TODO EL DOCUMENTO HTML

    */


    const selectorH1 = document.querySelector(".Titulo");
    console.log(selectorH1);



    // const heading = document.querySelector(".TextosZonaCentro h1");//RETORNA 0 O 1 ELEMENTO
    // console.log(heading); // NOS MUESTRA POR PANTALLA NUESTRA SELECCION

    /*
    !!!!!!!!!!!!
    EJERCICIO
    SELECCIONAR EL ID DEL BOTON QUE CREAMOS AYER

*/

let selectorBoton = document.querySelector("#boton");
console.log (selectorBoton);

/*

    SI ABRIMOS CON MOZILLA ME MUESTRA MUCHA MÁS INFORMACIÓN DE LA SELEECION
    TODAS LAS PROPIEDADES QUE SE MUESTRAN SE PUEDEN AÑADIR/MODIFICAR/ELIMINAR

    PARA MODIFICAR EL CONTENIDO HACEMOS USO DE LA PROPIEDAD .textContent
    */


    selectorBoton.textContent="Nuevo Boton desde JS";


    /*
    PARA AÑADIR Y ELIMINAR CLASES HACEMOS USO DE .classlist
    */

    //CUANDO HACEMOS USO DE CLASSLIST NO TENEMOS QUE PONER EL 
    //. EN LA CLASE,
    //PUES YA LE ESTAMOS DICIENDO QUE ES UNA CLASE
    selectorBoton.classList.add("info"); //AÑADIR

    selectorBoton.classList.remove("info"); //ELIMINAR

    // SI INTENTAMOS SELECCIONAR LOS ENLACES



    const enlacesJS = document.querySelector("a");
    console.log(enlacesJS);//SOLO ME MUESTRA EL PRIMERO
    // ES UNA PROPIEDAD DE QUERYSELECTOR, O ME MUESTRA UN ELEMENTO O NINGUNO
    // PARA SOLUCIONAR ESO SURGE EL QUERYSELECTORALL

/*




QUERYSELECTORALL **************************
*/

const enlacesJS2 = document.querySelectorAll("a");
console.log(enlacesJS2);
//ME MUESTRA TODOS LOS ENLACES QUE CONCUERDAN CON LA SELECCIÓN
//ME LO MUESTRA EN UN NODELIST, PARA ACCEDER A CADA ELEMENTO, LO HACEMOS
//AL IGUAL QUE LOS ARRAYS

console.log(enlacesJS2[0]);

//OTRA PROPIEDAD QUE PODEMOS MODIFICAR ES .href
enlacesJS2[0].href="https://google.com"

/*
!!!!!!!!!!!!!!
EJERCICIO
MODIFICAR EL CONTENIDO Y EL HREF DEL SEGUNDO 
ENLACE UNICAMENTE CON QUERYSELECTORALL
MODIFICAR CONTENIDO CON QUERYSELECTORALL. 
Y LLEVAR A OTRO ENLACE EXTERNO





GETELEMENTBYID ****************************

YA SE USA MENOS, SE SUELEN UTILIZAR LOS ANTERIORES

*/
const SelectorPidelo = document.getElementById("Pidelo");
console.log(SelectorPidelo);

//TODO LO VISTO ANTERIORMENTE PARA AÑADIR/MODIFICAR/ELIMINAR PROPIEDADES ES APLICABLE EN GETELEMENTBYID

/*






**********************************************
VEREMOS COMO GENERAR CODIGO EN HTML DESDE JAVASCRIPT
UN ESTADO NUEVO DE FACEBOOK SE GENERA POR JAVASCRIPT

*/

const nuevoEnlace = document.createElement("A");

//NOS PERMITE CREAR CODIGO HTML
//JAVASCRIPT RECOMIENDA USAR MAYUSCULAS CUANDO USAMOS CREATE
// DIV, A , P, IMG

//AGREGAR HREF
nuevoEnlace.href = "#";

//AGREGAR TEXTO
nuevoEnlace.textContent = "Nuevo Enlace";

//AGREGAR CLASE
nuevoEnlace.classList.add("info");
//LE AÑADO LA CLASE DE INFORMATE

console.log(nuevoEnlace)

//AGREGAMOS AL DOCUMENTO
//LO QUEREMOS AGREGAR A LA DERECHA DEL BOTON INFORMATE

const enlacesJS3 =document.querySelector(".MenuEnlaces");
//PARA ELLO SELECCIONAMOS EL ELEMENTO PADRE
enlacesJS3.appendChild(nuevoEnlace)
//APPENCHILD ME PERMITE AGREGAR ELEMENTOS HIJOS





/*
!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN ENLACE CON EL MISMO FORMATO QUE EL DE LAS CIUDADES
QUE SE LLAME, ISLAS CIES Y CON EL MISMO ESTILO.
HACERLO TODO CON JS
*/




const cies = document.createElement("A");//NOS PERMITE CREAR CODIGO HTML
//JAVASCRIPT RECOMIENDA USAR MAYUSCULAS CUANDO USAMOS CREATE
//AGREGAR HREF
cies.href = "#";
//AGREGAR TEXTO
cies.textContent = "Islas Cies";
//AGREGAR CLASE
cies.classList.add("CursosHijos");//LE AÑADO LA CLASE DE INFORMATE
//AGREGAMOS AL DOCUMENTO
//LO QUEREMOS AGREGAR A LA DERECHA DEL BOTON INFORMATE

//const NodoReferencia = document.querySelector(".cursoPrimero")


const CiesSelector =document.querySelector(".BotonesCursos");//PARA ELLO SELECCIONAMOS EL ELEMENTO PADRE
CiesSelector.appendChild(cies)//APPENCHILD ME PERMITE AGREGAR ELEMENTOS HIJOS
















/*
*******************
    COMIENZO CLASE
*******************

*******************
REPASO DÍA ANTERIOR

    COMO SELECCIONAR ELEMENTOS DEL HTML. 3 FORMAS

        QUERYSELECTOR
        QUERYSELECTORALL
        GETELEMENTBYID


    QUERYSELECTOR ******************************

    RETORNA UNO O NINGUN ELEMENTO
    MUY SIMILARES A LOS QUE TENEMOS EN CSS 
        CLASES CON .
        ID CON #

    DOCUMENT HACE REFERENCIA A TODO EL DOCUMENTO HTML
    const heading = document.querySelector(".Rojo");
    //RETORNA 0 O 1 ELEMENTO
    console.log(heading); // NOS MUESTRA POR PANTALLA NUESTRA SELECCION


    QUERYSELECTORALL **************************

    const enlacesJS2 = document.querySelectorAll("A");
    console.log(enlacesJS2);
    //ME MUESTRA TODOS LOS ENLACES QUE CONCUERDAN CON LA SELECCIÓN
    //ME LO MUESTRA EN UN NODELIST, PARA ACCEDER A CADA ELEMENTO, LO HACEMOS
    //AL IGUAL QUE LOS ARRAYS


    GETELEMENTBYID ****************************

    YA SE USA MENOS, SE SUELEN UTILIZAR LOS ANTERIORES

    const heading2 = document.getElementById("boton");
    console.log(heading2);

    //TODO LO VISTO ANTERIORMENTE PARA AÑADIR/MODIFICAR/ELEIMINAR PROPIEDADES ES APLICABLE EN GETELEMENTBYID


    COMO CREAR ELEMENTOS EN HTML DESDE JAVASCRIPT

    **********************************************
    VEREMOS COMO GENERAR CODIGO EN HTML DESDE JAVASCRIPT
    UN ESTADO NUEVO DE FACEBOOK SE GENERA POR JAVASCRIPT

    const nuevoEnlace = document.createElement("A");//NOS PERMITE CREAR CODIGO HTML
    //JAVASCRIPT RECOMIENDA USAR MAYUSCULAS CUANDO USAMOS CREATE

    AÑADIMOS PROPIEDADES
    //AGREGAR HREF
    nuevoenlace.href = "#";
    //AGREGAR TEXTO
    nuevoenlace.textContent = "nuevoenlace";
    //AGREGAR CLASE
    nuevoenlace.classList.add("CursosHijos");//LE AÑADO LA CLASE DE INFORMATE
    //AGREGAMOS AL DOCUMENTO
    //LO QUEREMOS AGREGAR A LA DERECHA DEL BOTON INFORMATE

    //const NodoReferencia = document.querySelector(".cursoPrimero")

    const PozueloSelector =document.querySelector(".BotonesCursos");//PARA ELLO SELECCIONAMOS EL ELEMENTO PADRE
    PozueloSelector.appendChild(pozuelo)//APPENCHILD ME PERMITE AGREGAR ELEMENTOS HIJOS






EJERCICIO: CREAR DESDE JS UN BOTON AL LADO DE VER CURSOS
DEL BANNER PRINCIPAL CON EL TEXTO CIUDADES Y MISMO ESTILO
QUE EL ANTERIOR











**************************************************
EVENTOS EN JAVASCRIPT

ME PERMITEN TENER UNA WEB MÁS DINÁMICA

CUANDO ALGUIEN VISITA UNA WEB, SURGEN MUCHOS EVENTOS
SCROLL, BOTON ENVIAR FORMULARIO, CLICKS

HAY EVENTOS QUE LOS GENERA EL USUARIO Y HAY OTROS QUE SE GENERAN AUTOMATICAMENTE

*/
console.log(1);

window.addEventListener("load",function(){ // AÑADIMOS EVENTOS CON ADDEVENTLISTENER
    //PRIMERO LE DECIMOS QUE TIPO DE EVENTO VAMOS A TENER, LOAD, CLICK, SCROLL...
    //DESPUES LLAMAMOS AL CALLBACK, TAMBIEN PUEDEN SER FUNCIONES A PARTE
    //LOAD ESPERA A QUE EL HTML, CSS, JS Y LOS ARCHIVOS QUE DEPENDEN DEL HTML ESTEN LISTOS
    console.log("se ha cargafado html, css, js");

})

//WINDOW ES TODO EL DOCUMENTO, MÁS GLOBAL AUN QUE EL HTML
//ES UN NIVEL MÁS ALTO

document.addEventListener("DOMContentLoaded",function(){
    //DOMCONTENTLOADED ESPERA QUE SE CARGUE UNICAMENTE EL HTML, EL RESTO NO LE IMPORTA
    console.log("Se ha cargado el HTML");
})


console.log(4);

//EVENTO DE SCROLL
window.addEventListener("scroll",function(){
    console.log("Scrolling...")
})


//VAMOS A VER COMO APLICAR LOS EVENTOS A MIS ELEMENTOS DEL HTML
//HASTA AHORA LO HEMOS HECHO EL WINDOW Y DOCUMENT

const botonNotificacion = document.querySelector("#boton"); //HEMOS SELECCIONADO YA EL ELEMENTO

botonNotificacion.addEventListener("click",function(evento){ 
    console.log(evento);//ME MUESTRA INFORMACIÓN DEL EVENTO
    evento.preventDefault();// PARA EVITAR QUE EN LOS FORMULARIOS ME RECARGUE LA PÁGINA SOLA
    //SUELE USAR EN FORMULARIOS

    console.log("Mostrando Notificación...");
})


//EJERCICIO. CREAR UN FORMULARIO DE CONTACTO EN HTML CON
//NOMBRE
//CORREO
//MENSAJE

//BOTON ENVIAR

/*

    <form>

        <fieldset> 
            <!-- AGRUPAR TODOS LOS ELEMENTOS DEL FORMULARIO -->

            <legend> Contáctanos rellenando todos los campos </legend> 
            <!-- DESCRIBIR EL FORMULARIO -->

            <div> 
                <!-- PARA AGRUPAR LOS DIFERENTES INPUTS -->
                <div>
                    <label> Nombre </label>    
                    <!-- ETIQUETA -->
                    <input id="Nombre" type="Text" placeholder="Tu Nombre"> 
                    <!-- CAMPO DONDE SE ESCRIBEM PLACEHOLDER, LA INDICACIÓN -->
                </div>
                <div>
                    <label> Correo </label>
                    <input type="email" placeholder="Tu Email">
                </div>
                <div>
                    <label> Mensaje </label>
                    <textarea></textarea>
                </div>
            </div>
            <div>
                <input class="botonFormulario" type="submit" value="Enviar">
            </div>
        </fieldset>
    </form>


*/


//EVENTOS CON EL TECLADO
//EVENTOS EN LOS INPUTS Y TEXTAREA

const nombre = document.querySelector("#Nombre");

nombre.addEventListener("change", function(){ // ESTE EVENTO SE EJECUTA CUANDO SALIMOS
    console.log("Escribiendo nombre...");
})

nombre.addEventListener("input", function(evento){ // ESTE EVENTO ES A TIEMPO REAL
    console.log("Escribiendo nombre con input...");
    console.log(evento)
    console.log(evento.target.value); //ME MUESTRA POR PANTALLA EN EL DATA LA INFORMACIÓN
    // EN UN INPUT LA INFORMACIÓN SE ALMACENA EN EL VALUE
})

// EJERCICIO
// CREAR EL EVENTO DE INPUT EN CORREO Y MENSAJE


// EJERCICIO
// CREAR UN OBJETO DATOS, CON PROPIEDADES
// NOMBRE
// EMAIL
// MENSAJE

// E IR ALMACENANDO LOS RESULTADOS DEL FORMULARIO

/*
function leertexto(evento){
    datos[evento.target.id] = evento.target.value; 
    //IMPORTANTE QUE SE LLAME EL ID COMO LA PROPIEDAD DEL OBJETO
    console.log(datos); 
}

*/



//EVENTOS DE SUBMIT

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    console.log("Enviando Formulario...")
})

//SUBMIT PARA FORMULARIOS, ESTÁ ASOCIADO AL FORMULARIO EN GENERAL
//CLICK PARA OTROS BOTONES



/*

COMO ORGANIZAR EL CODIGO DE JAVASCRIPT

PRIMERO VARIABLES

DESPUES EVENTOS

POR ULTIMO FUNCIONES



*/


