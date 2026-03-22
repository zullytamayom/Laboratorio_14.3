//! Ejercicio 7: Simulador de cajero automatico

function retirarDinero(saldo,monto){

    if (monto<=saldo){
        let nuevoSaldo = saldo - monto
        console.log("Retiro exitoso.Nuevo saldo : ",nuevoSaldo)
    }else{
        console.log("Saldo Insuficiente.")
    }
    
}

retirarDinero(1000, 200);
retirarDinero(500, 600);