//Arreglos

const numeros = [1, 2, 3, 4, 5];
const palabras = ["Hola", "Mundo", "JavaScript", "OpenAI"];
const objetos = [{ nombre: "Luis", edad: 20 }, { nombre: "Ana", edad: 25 }, { nombre: "Juan", edad: 30 }];
const booleanos = [true, false, true, false];
//------------------------------------------------------------------------------------------------------------------
//REDUCE -----------------------------------
// 1. Reduce en 'numeros'
const sumaTotal = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log("Suma total de 'numeros':", sumaTotal);

// 2. Reduce en 'palabras'
const frase = palabras.reduce((acumulador, palabra) => `${acumulador} ${palabra}`);
console.log("Frase construida con 'palabras':", frase);

// 3. Reduce en 'objetos' (sumar edades)
const sumaEdades = objetos.reduce((acumulador, obj) => acumulador + obj.edad, 0);
console.log("Suma de edades en 'objetos':", sumaEdades);

// 4. Reduce en 'booleanos' (contar true)
const contarTrue = booleanos.reduce((acumulador, valor) => acumulador + (valor ? 1 : 0), 0);
console.log("Cantidad de true en 'booleanos':", contarTrue);

//FILTER----------------------------------------------------------
// 1. Filter en 'numeros' (filtrar números mayores a 3)
const mayoresA3 = numeros.filter(numero => numero > 3);
console.log("Numeros mayores a 3:", mayoresA3);

// 2. Filter en 'palabras' (filtrar palabras con más de 4 letras)
const palabrasLargas = palabras.filter(palabra => palabra.length > 4);
console.log("Palabras con más de 4 letras:", palabrasLargas);

// 3. Filter en 'objetos' (filtrar objetos con edad mayor a 20)
const mayoresA20 = objetos.filter(obj => obj.edad > 20);
console.log("Personas con edad mayor a 20:", mayoresA20);

// 4. Filter en 'booleanos' (filtrar valores verdaderos)
const soloVerdaderos = booleanos.filter(valor => valor === true);
console.log("Solo valores true:", soloVerdaderos);

//MAP --------------------------------------------------------------------
// 1. Map en 'numeros' (multiplicar por 2)
const duplicados = numeros.map(numero => numero * 2);
console.log("Numeros duplicados:", duplicados);

// 2. Map en 'palabras' (convertir a mayúsculas)
const enMayusculas = palabras.map(palabra => palabra.toUpperCase());
console.log("Palabras en mayúsculas:", enMayusculas);

// 3. Map en 'objetos' (obtener solo los nombres)
const nombres = objetos.map(obj => obj.nombre);
console.log("Nombres de las personas:", nombres);

// 4. Map en 'booleanos' (invertir valores)
const invertidos = booleanos.map(valor => !valor);
console.log("Booleanos invertidos:", invertidos);

// FOREACH ----------------------------------------------------------------------
// 1. ForEach en 'numeros' (mostrar cada número)
console.log("Números en el array:");
numeros.forEach(numero => console.log(numero));

// 2. ForEach en 'palabras' (mostrar cada palabra)
console.log("Palabras en el array:");
palabras.forEach(palabra => console.log(palabra));

// 3. ForEach en 'objetos' (mostrar cada persona con su edad)
console.log("Personas y sus edades:");
objetos.forEach(obj => console.log(`${obj.nombre} tiene ${obj.edad} años`));

// 4. ForEach en 'booleanos' (mostrar si es true o false)
console.log("Valores booleanos:");
booleanos.forEach(valor => console.log(valor ? "Verdadero" : "Falso"));
//---------------------------------------------------------------------------------------------------------------

// Funciones tipo flecha

// a. Función con cero parámetros
const saludar = () => console.log("¡Hola, mundo!");
saludar();

// b. Función con un parámetro
const cuadrado = (numero) => numero * numero;
console.log("Cuadrado de 4:", cuadrado(4));

// c. Función con dos parámetros
const sumar = (a, b) => a + b;
console.log("Suma de 5 y 7:", sumar(5, 7));

// d. Función con tres parámetros
const calcularPromedio = (a, b, c) => (a + b + c) / 3;
console.log("Promedio de 3, 6 y 9:", calcularPromedio(3, 6, 9));

// e. Función que devuelve un objeto
const crearPersona = (nombre, edad) => ({ nombre, edad });
console.log("Persona creada:", crearPersona("Carlos", 40));
