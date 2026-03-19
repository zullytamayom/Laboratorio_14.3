//! Ejercicio 1: Calculadora de propinas

//Una app para calcular propinas en restaurantes
// * 1. Crear una funcion calcularPropina(total, porcentaje) que reciba el total de la cuenta
//  y el porcentaje de propina, y retorne el monto  final a pagar(total + propina).

function calcularPropina(total, porcentaje) {
    return total * (porcentaje / 100);
}

console.log(calcularPropina(85000, 10));