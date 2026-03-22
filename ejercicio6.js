//! Ejercicio 6: Contador de palabras

function contarPalabras(texto) {
  return texto.trim().split(/\s+/).length;
}

console.log(contarPalabras("este es mi ejercicio numero 3"))