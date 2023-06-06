
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
for(let indice=0;indice<4;indice++){
    console.log(indice+1)
}


// OBTENER LA PROPIEDAD PRECIO DE CADA OBJETO DEL ARRAY, MEDIANTE

// FOR
console.log("Ej. con For",carrito)
for (let i=0; i<carrito.length;i++){
    console.log(carrito[i].precio);
}
 
// WHILE

console.log("ejercicio while");

let articulo=0;
while(articulo<carrito.length){
    console.log(`este es el precio ${carrito[articulo].precio}`);
    articulo++;
}



// DO WHILE

console.log("ejercicio do while");
let articuloDW = 0;

do{
    console.log(carrito[articuloDW].precio)
    articuloDW++
}
while(
    articuloDW < carrito.length
)    


// CREAR UNA FUNCIÓN QUE ME DIGA SI UN NUMERO ES

// POSITIVO
// NEGATIVO
// CERO

function repitemeEseNumerito(num){
    if (num<0){
        console.log("El numero es negativo")
    } else if (num>0){
        console.log("El numero es positivo")
    } else {
        console.log("El numerito es 0")
    }
}
repitemeEseNumerito(-0)


// CREAR UNA FUNCIÓN QUE YO LE PASE UN MES
// Y ME DIGA CUANTOS DÍAS TIENE ESE MES

function diaMes(mes){
    if (mes==="febrero"){
        console.log("Este mes tiene 28/29 días");
    }else
    if (mes==="abril"||mes==="junio"||mes==="septiembre"||mes==="noviembre"){
        console.log("Este mes tiene 30 días")
    }else
    if (mes==="enero"||mes==="marzo"||mes==="mayo"||mes==="julio"||mes==="agosto"||mes==="octubre"||mes==="diciembre"){
        console.log("Este mes tiene 31 días")
    }
    else{
        console.log("Esto no es un mes")
    }
}
diaMes ("diciembre")
diaMes("febrero")
diaMes("perro")


// FUNCION QUE ME CUENTE LAS VOCALES DE UN STRING DADO
let contador=0
function contarVocales(texto){
    for(i=0;i<texto.length;i++){
        if(texto.charAt(i)==="a"||texto.charAt(i)==="e"||
        texto.charAt(i)==="i"||texto.charAt(i)==="o"||
        texto.charAt(i)==="u"){
            contador++;
        }
    } 
    return contador;
}
console.log("Murcielago tiene",contarVocales("Murcielago"),"Vocales")




// FUNCION QUE DADA UNA CADENA DE CARACTERES ME DEVUELVA
// LA CADENA INVERSA


function invertirString(input22){
    // input22 = input22.toLowerCase();
    let resultado22 ="";
    for(let i=input22.length-1;i>=0;i--){
        resultado22 += input22[i];
    }
    return(resultado22);
}

let input22="aniraM al ne etatsílA"
console.log(`El texto invertido es: ${invertirString(input22)}`)







