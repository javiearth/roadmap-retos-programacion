/*****************
Student: javiearth
Programing language: Javascript
Contact: 
******************/

/****************************************************************************
                                DOCUMENTATION
                                *************
You can find documantation to learn about Javascrip in https://developer.mozilla.org/es/docs/Web/JavaScript


                                COMENTARIOS
                                ***********/

// This is a one line comment
/* This is a comment
of multiple lines */

/*                              VARIABLES
                                *********                           

Note: every instruction in JS ends with a colon (;)

To declare a variable we use var o let. As we have not asign a value yet, those variables are undefined but exist: 

    let myVariable;


To initialize a variable we use the symbol =:

    myVariable = "Hola Mundo"


We can declare and initialize a variable at the same time:

    let VARIABLE_NAME = VALUE;
    let my_variable = "Hello World!";


The name of a variable can be any word using a-z, A-Z, 0-9 and the symbol _. 
Some words are reserved and no variable can start with a number.
Most programers do not start a variable's name with _ and to name a variable they use a capital letter at the first letter of each word excluding the first one (myNiceVarible).

There are different types of variables but we do not need to specify it.
- Numbers:
  Integer (entero)
  Number (coma flotante)
- Strings (cadena de caracteres)
- Boolean (true or false)
- Arrays: they are variables which store multiple values of the same type
  let myArray = ["Alice", "Bob", "Chloe"];

                                CONSTANTS
                                *********
This values can't be changed.

    const theBestNumber = 73;

*****************************************************************************
                                  RETO 0 (1/2/2024)
****************************************************************************/

// crea una variable y una constante
let holaMundo = "¡Hola, Javascript!";
const bestNumber = 73;

// crea variables representando todos los tipos de datos primitivos
let myYear = 1987;
let gravedad = 9.8;
let autodidact = true;

/* Para imprimir por consola he creado una funcion y la he llamado desde un html cuyo codigo es simplemente esto:
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <script src="javiearth.js"></script>
    </head>
    <body onload="helloWorld()">
    </body>
</html>
 */
function helloWorld(){
    console.log(holaMundo);
}
