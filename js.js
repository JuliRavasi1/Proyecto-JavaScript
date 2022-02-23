let pregunta = true
let monto = 0
let cantidad


function numeroVal(numero) {
    while (numero <= 0 || isNaN(numero)) {
        numero = parseInt(prompt("Numero invalido, digite nuevamente un numero"))
    }
    return numero;
}

function operacion() {
    let opc
    let contador = 0
    do {
        if (contador != 0) {
            alert("Numero invalido")
        }
        opc = parseInt(prompt("OPERACIONES:\n1.Ingresar mas dinero \n2.Ingresar mas Gastos \n3.Finalizar \nDigite el numero de la operacion que desea hacer:"))

        contador++
    } while (isNaN(opc) || opc > 3 || opc < 1)
    return opc
}

function ingresarMonto(){
    let nuevo = parseInt(prompt("Digite el monto que va ingresar"))
    nuevo = numeroVal(nuevo)
    monto = monto + nuevo
}

function ingresargasto(){
    cantidad = parseInt(prompt("Digite la cantidad de gastos"))
    cantidad = numeroVal(cantidad)

    let totalGasto = 0
    let gasto
    for (let i = 1; i <= cantidad; i++) {
        gasto = parseInt(prompt("Digite gasto numero " + i))
        gasto = numeroVal(gasto)
        totalGasto = totalGasto + gasto
    }
    monto = monto - totalGasto
    
}


let inicio = true
do {
    if(inicio != false){
        ingresarMonto()
        ingresargasto()
        alert("El monto disponible ahora es: " + monto)
        inicio = false
    }
    switch (operacion()) {
        case 1:
            ingresarMonto()
            alert("El nuevo monto disponible es: " + monto)
            break;
        case 2:
            ingresargasto()
            alert("El nuevo monto disponible es: " + monto)
            break;
        default:
            alert("Gracias!!")
            pregunta = false
    }

} while (pregunta == true)




// ------------- otra manera de hacerlo ------------------


/*
AHORROS 

1. coloque monto total
2. indique cuantos gastos fijos tendra este mes
3. coloque monto de cada gasto fijo (gasto 1, 2, 3, etc)
4. esto te queda para ahorrar 
5. en caso que este, sea cero, quiere ingresar nuevamente un monto total? 
5.1 si (reinicia todo)
5.1 no (fin) 
*/

// let monto = parseInt(prompt("Ingrese monto total disponible"));
// let contador = parseInt(prompt("Ingrese cuántos gastos fijos tendrá este mes"));
// let gastoTotal = 0;

// if (!isNaN (monto) && !isNaN(contador) || contador >= 1){
//     for (let i=0; i<contador; i++){
//         let gastos = parseInt(prompt("Ingresa monto de gastos fijos"))
//         gastoTotal = gastoTotal+gastos;
//     }
//     monto = monto-gastoTotal;
//     alert ("Su monto disponible para ahorrar es de: " + monto + "$");
// } else{
//     alert ("Monto Invalido");
// } 

// while (monto === 0) {
//     let respuesta = prompt("Quiere ingresar nuevo monto total disponible?: \n SI \n NO");
//     if (respuesta === "SI"){
//         alert ("La respuesta fue: SI");
//         monto = parseInt(prompt("Ingrese monto total disponible"));
//         contador = parseInt(prompt("Ingrese cuántos gastos fijos tendrá este mes"));
//         if (!isNaN (monto) && !isNaN(contador) || contador >= 1){
//             for (let i=0; i<contador; i++){
//                 let gastos = parseInt(prompt("Ingresa monto de gastos fijos"))
//                 gastoTotal = gastoTotal+gastos;
//             }
//             monto = monto-gastoTotal;
//             alert ("Su monto disponible para ahorrar es de: " + monto + "$");
//         } else{
//             alert ("Monto Invalido");
//         } 
//     } else if (respuesta === "NO"){
//         alert ("gracias");
//         monto = 1; 
//     }
// }



