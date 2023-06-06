// FETCH API

// PONER DIAPOSITIVA 17

/*
CREAMOS UN NUEVO ARCHIVO empleados.json EN LA CARPETA GLOBAL

// VAMOS SIMULAR UNA PEQUEÑA BASE DE DATOS
// SON OBLIGATORIAS LAS COMILLAS DOBLES

*/



function obtenerEmpleados(){
    fetch("empleados.json") //fetch(url con la api)
        .then(resultado =>{
            return resultado.json() 
            // VOY A TENER UNA RESPUESTA TIPO JSON
        })
        .then(datos =>{
            const{empleados} = datos; 
            //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES
            console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado)
                console.log(empleado.id)
                console.log(empleado.nombre)
                console.log(empleado.puesto)
            });
        })
}
obtenerEmpleados();



//STATUS OK, ES QUE HA HECHO LA CONSULTA FETCH CORRECTAMENTE. STATUS 200

//OTRA FORMA DE HACERLO CON ASYNC/AWAIT


async function obtenerEmpleados2() {
    const resultado = await fetch("empleados.json");
    const datos = await resultado.json();
    console.log("RESULTADO CON ASYNC AWAIT DEBAJO")
    console.log(datos)
    console.log(resultado.status)
}

obtenerEmpleados2();


//AHORA VEREMOS COMO ACTUAL JAVASCRIPT EN EL DOM, COMO SELECCIONAR ELEMENTOS DEL HTML, COMO CREAR EVENTOS ETC

//ENTREGAR COMO PRÁCTICA MODULO 3. UNA CARPETA CON LOS ARCHIVOS JS QUE HEMOS HECHO HASTA HOY
















/*
*******************
    COMIENZO CLASE 2023/03/24
*******************

*******************
REPASO DÍA ANTERIOR

    
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

CREAMOS EL ARCHIVO interaccion.js Y COMENTAMOS EL 10



*/