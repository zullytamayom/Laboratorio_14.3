//! Ejercicio 4: Calcular promedio de notas
// Plataforma educativa

// * 1. Crear una función calcularPromedio(notas) que reciba un array de notas 
// dado por el usuuario(separado por comas) y retorne el promedio(redondeado a 2 decimales).

const prompt = require('prompt-sync')();
function calcularPromedio(notas) {
  const notasArray = notas
    .split(',')
    .map(n => parseFloat(n.trim()))
    .filter(n => !isNaN(n));

  if (notasArray.length === 0) return null;

  const promedio = notasArray.reduce((total, nota) => total + nota, 0) / notasArray.length;
  return parseFloat(promedio.toFixed(2));
}

const notas = prompt("Ingrese las notas separadas por comas: ");
const promedio = calcularPromedio(notas);

if (promedio === null) {
  console.log("No ingresaste notas válidas.");
} else {
  console.log("El promedio es:", promedio);
}