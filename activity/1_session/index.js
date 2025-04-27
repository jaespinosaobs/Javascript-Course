// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2


// Se ejecuta primero el contenido del fichero aboutme.js ya que el c'odigo de los ficheros importados se ejecutan tan pronto como se importen.
// En este caso se ejecutan en la línea 2.


// Ejercicio 3

for (let index = 1; index < 101; index++) {
    if(index % 7 === 0) {
        console.log(index);
    }
};


// Ejercicio 4


// Al finalizar el bucle la variable i tendra el valor 101 y se puede imprimir fuera del for porque var tiene un scope global en este caso ya que no está dentro de una función.
// Para evitar el scope global es necesario usar let.


// Ejercicio 5

// La diferencia entre el uso de <script> y de <script type="module"> es la forma de importación. 

// En la primera importamos como script puro lo cuál tiene las siguientes consecuencias
//     -Se ejecuta el código de forma inmediata
//     -Se detiene el parseo del HTML hasta que termine la ejecución del script
//     -El script no puede usar "import" ni "export", ni sintaxis reservada a los modulos ES
//     -Todas las variables declaradas en el script serán automáticamente globales.

// En la importación de "module" importamos el código como un módulo ES con las siguientes consecuencias
//     -No se ejecuta de forma inmediata, se difiere el código (No se carga hasta haber terminado el parseo de todo el HTML)
//     -No detiene la ejecución del HTML
//     -Las variables y funciones declaradas en el módulo tienen scope del módulo
//     -El módulo debe ser ES por lo tanto usa 'use strict' y puede usar "import" y "export"


// Ejercicio 6
const formatter = {
    prefix: "Hello ",
    append(str) {
        console.log(formatter.prefix + str);
    }
};


formatter.append("World");

Object.prototype.toLowerString = (str) => str.toLowerCase();

console.log(formatter.toLowerString("I'm Jorge"))

// Vemos que al ejecutar este script arroja un error a final el navegador,
// quizás se deba a que estamos agregando el método toLowerString() al prototipo de todos los objetos.
// Esto es una mala práctica, no deberíamos agregar valores al prototipo general, ya que puede romper lógica de 
// objetos. Además ahora se recomienda hacer uso de clases para manejar todo lo relacionado con herencia