//! Ejercicio 2: Validar contraseña

// * Formulario de registro
// * 1. Crear una función validarContrasena(contrasena) que retorne true si:

//     a. Tiene al menos de 8 caracteres
//     b. Incluye un número
//     c. Incluye al menos una letra mayúscula

function validarContrasena(contrasena) {
    return contrasena.length >= 8 && /\d/.test(contrasena) && /[A-Z]/.test(contrasena);
} 

console.log(validarContrasena("M2345678"));
