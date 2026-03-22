//! Ejercicio 7: Cambio de Moneda

function convertirMoneda(monto,monedaDestino){
    let conversion;

    if (monedaDestino === "USD"){
            conversion = monto / 3750
    }else if(monedaDestino === "EUR"){
        conversion = monto / 4600
    }else{
        return "Moneda no valida."
    }
    return conversion.toFixed(2)

}

console.log(convertirMoneda(10000,"USD"))