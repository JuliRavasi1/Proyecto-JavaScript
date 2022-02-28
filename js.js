let pregunta = true
let monto = 0
let cantidad

function numeroVal(numero) {
    while (numero <= 0 || isNaN(numero)) {
        numero = parseInt(prompt("Numero invalido, digite nuevamente un numero"))
    }
    return numero;
}

const operaciones = [
    "1.Ingresar mas dinero\n",
    "2.Ingresar mas gastos\n",
    "3.Finalizar\n"
];

let operacionSeleccionada
let lista = " ";
operaciones.forEach((opcion)=>{
    lista+=opcion;
}
);

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
let inicio2 = true

do {
    if(inicio != false){
        ingresarMonto()
        ingresargasto()
        alert("El monto disponible ahora es: " + monto)
        inicio = false
        
    }else if(inicio2 != false){
    operacionSeleccionada = parseInt(prompt("Seleccione una opción:\n"+lista));
    operacionSeleccionada = numeroVal (operacionSeleccionada);
    switch (operacionSeleccionada) {
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
}
}while (pregunta == true)