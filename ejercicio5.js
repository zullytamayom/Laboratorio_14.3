const prompt = require('prompt-sync')();


const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "Sofía", edad: 18 }
];


function filtrarUsuarios(usuarios, edadMinima) {
  return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

const edadMinima = parseInt(prompt("Ingrese la edad mínima: "));

const usuariosFiltrados = filtrarUsuarios(usuarios, edadMinima);


if (usuariosFiltrados.length === 0) {
  console.log("No hay usuarios que cumplan con la edad mínima.");
} else {
  console.log("Usuarios que cumplen con la edad mínima:");
  usuariosFiltrados.forEach(usuario => {
    console.log(usuario.nombre + " - " + usuario.edad + " años");
  });
}