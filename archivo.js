const fs = require('fs');
//Escribir un archivo
fs.writeFileSync('saludo.txt', 'Hola Jere desde un archivo Node.js!')

//Leer el contenido del archivo
const contenido = fs.readFileSync('saludo.txt', 'utf8');
console.log(contenido);