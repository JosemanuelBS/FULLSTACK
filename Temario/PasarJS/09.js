
/*

TRY CATCH
        */
        const numero1=20;
        const numero3=40;

        // console.log(numero1); // SE MUESTRA POR CONSOLA, OK
        // console.log(numero2); // NO SE MUESTRA POR CONSOLA, DA FALLO
        // console.log(numero3); // NO LA MUESTRA, ESTABA PARALIZADO EL CODIGO

        // PARA HACER QUE INTENTE HACER LO SIGUIENTE, HACEMOS EL TRY CATCH

        console.log(numero1);

        try {
            console.log(numero2)
        } catch (error) {
            console.log("tienes un error en console log 2")
        }

        console.log(numero3)

        // try{

        //     console.log(numero2);

        // } catch(error){

        //     console.log(error)

        // }

        // console.log(numero3);

        // SOLO SE UTILIZA EN SITUACIONES CRÍTICAS, POR EJEMEPLO CONEXIONES 
        // CRÍTICAS A BASE DE DATOS. NO ES UNA BUENA PRÁCTICA ABUSAR DEL TRY CATCH

/*

PROMISES
        REFLEJA UN VALOR QUE ESTARÁ DISPONIBLE AHORA, EN UN FUTURO O NUNCA

        */


 
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

        RESULTADOS TIPICOS DE CONSULTA A UNA API

        */
        usuarioAutenticado
            .then(function(resultado){ // SE EJECUTA CUANDO EL PROMISE SE CUMPLE
                console.log(resultado)
            })
            .catch(function(resultado){ // SE EJECUTA CUANDO EL PROMISE NO SE CUMPLE
                console.log(resultado)
            })


/*


NOTIFICACIONES API CON JAVASCRIPT
        
        CREAMOS UN BUTTON EN EL HTML
*/

const boton = document.querySelector("#boton");

// DOCUMENT PARA HACER REFERENCIA AL HTML
// EVENTOS EN JAVASCRIPT, CON ADDEVENTLISTENER
// AGREGA UN EVENTO A LA VARIABLE BOTON
// DOS VALORES, PRIMERO EL EVENTO

boton.addEventListener("click",function(){
    console.log("DISTE CLICK");
    Notification.requestPermission() // YA ES UNA PROMISA
    .then(resultado => console.log(`El resultado es ${resultado}`)); // SOLICITAR PERMISO DE NOTIFICACIONES
})






// if(Notification.permission == "granted"){
//     new Notification("Esta es una notificacion", {
//         icon: "../img/Tu-carrera-digital-general.png",
//         body: "Notificación Tu Carrera Digital"
//     })
// }

// PRESENTAR EL TEST MÓDULO 2
























/*
*******************
    COMIENZO CLASE 2023/03/23
*******************

*******************
REPASO DÍA ANTERIOR

HERENCIA
        PARA QUE USAMOS LA HERENCIA, PARA COPIAR PROPIEDADES DE UNA CLASE A OTRA

        class Categoria extends Libro{
            constructor(nombre,precio,isbn,categoria){

                super(nombre,precio,isbn);
                this.categoria=categoria;

            }
        }

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


FIN DEL REPASO
******************


ASYNC/AWAIT

        SI ENTRAN DOS PERSONAS A UN RESTAURANTE. UNA PIDE UN VASO DE AGUA, OTRA UN MENÚ
        NO ESPERAMOS A QUE ESTÉ LISTO EL MENU PARA SERVIRLE A LA OTRA PERSONA EL VASO DE AGUA

        LO MISMO PASA EN JAVASCRIPT, SI HAGO UNA CONSULTA A LA BASE DE DATOS
        LISTADO ULTIMOS 10000 CLIENTES ME VA A LLEVAR UN TIEMPO, PERO ME IRA MOSTRANDO
        EL RESTO DEL SITIO WEB


*/



//VAMOS A CREAR FUNCIONES QUE SIMULEN LA CONSULTA A LA BASE DE DATOS, PARA OBTENER
//UNA RESPUESTA

setTimeout(function(){ //UNA VEZ PASADO 3 SEGUNDOS ME EJECUTA EL CUERPO DE LA FUNCION
    console.log("Set time out actuando")
},3000) //MILISEGUNDOS

// setInterval(function(){ //ME EJECUTA EL CUERPO DE LA FUNCION CADA CIERTO INTERVALO
//     console.log("Set interval actuando")
// },4000)









function descargarNuevosClientes(){ //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO, PARA FACILITAR EL EJEMPLO
    return new Promise(resolve =>{
        console.log("Descargando clientes... espere...")

        setTimeout(()=>{
            resolve("Los Clientes fueron descargados")
        },5000)
    });
}

//HEMOS CREADO UN PROMISE, COMO HACEMOS USO DEL ASYN/AWAIT?

async function app(){
    const resultadoAsync = await descargarNuevosClientes(); //ESPERAMOS A QUE descargarNuevosClienets HAYA FINALIZADO
    console.log(resultadoAsync) 

} //ESTE CODIGO SE EJECUTA EN SEGUNDO PLANO Y NO PARALIZA AL RESTO
// PUESTO QUE ESTA ES UNA CONSULTA CRITICA, SERÍA RECOMENDABLE INCLUIRLO
//DENTRO DE UN TRY CATCH

app();




//!!!!!!!!!!!!!!!!!!!!!!
//EJERCICIO
//CREAR UNA FUNCION QUE ME DESCARGUE LOS PEDIDOS, Y ME DE UNA RESPUESTA A LOS 3 SEGUNDOS


function descargarPedidos(){ //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO, PARA FACILITAR EL EJEMPLO
    return new Promise(() =>{
        console.log("Descargando pedidos...")

        setTimeout(()=>{
            console.log("Los pedidos fueron descargados")
        },3000)
    });
}

descargarPedidos();




// function descargarPedidos(){ //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO, PARA FACILITAR EL EJEMPLO
//     return new Promise(resolve =>{
//         console.log("Descargando pedidos...")

//         setTimeout(()=>{
//             resolve("Los Pedidos fueron descargados")
//         },3000)
//     });
// }

//PASAMOS AL 10.JS