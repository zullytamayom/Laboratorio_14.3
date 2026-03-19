//! Ejercicio 3: Buscar producto en inventario

// Sistema de gestión de inventario
// * 1. Crear una función buscarProducto(nombre,inventario) que 
// retorne el producto si existe, o null si no.
// El inventario debe estar predefinido.

const inventario = [
    {nombre: "Laptop", stock: 10},
    {nombre: "Mouse", stock: 20},
    {nombre: "Teclado", stock: 15},
]

function buscarProducto(nombre, inventario) {
    return inventario.find(producto => producto.nombre === nombre) || null
}

console.log(buscarProducto("Laptop", inventario));

console.log(buscarProducto("Monitor", inventario));