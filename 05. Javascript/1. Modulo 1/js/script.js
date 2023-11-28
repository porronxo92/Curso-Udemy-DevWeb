// Variables
//Estilos variables
var nombre_variable = "underscore";
var nombreVarialbe = "camelcase"; //Mas usada
var NombreVariable = "PascalCase";

//Let y const
let variable;
const variable1 = true;
//const no se puede inicializar una variable sin valor, en let si
//en const no se puede reasignar un valor con el que le has iniciado, en let si

//Tipos de dato
//String
const cadena = "Hola";
console.log(cadena.length); //conocer el numero de caracteres que tiene la cadena
console.log(cadena.indexOf("hola")); //encontrar un elemento en un string. (-1 no ha encontrado nada. retorna la posicion en caso de encontrarlo)
console.log(cadena.includes("hola")); //retorna true/false

//Numeros
const numero1 = 100;
const numero2 = "200";
// + - * / %
console.log(numero1);
console.log(numero2);

//Math clase
console.log(Math.random);
/*
round --> redondea segun numero decimal 
ceil --> redondea siempre hacia arriba
floor --> redondea siempre hacia abajo
sqrt --> raiz cuadrada del numero que le indicas
abs --> valor absoluto del numero
min --> de una matriz o serie de nuemeros te da el numero pequeño
min --> de una matriz o serie de nuemeros te da el numero pequeño
max --> de una matriz o serie de nuemeros te da el numero mayor
random --> et da un numero aleatorio
PI --> numero PI
*/

// Orden de operaciones
let puntuacion = 10;

//incremento en un 1 valor
puntuacion++;
++puntuacion;

//decremento en un 1 valor
puntuacion--;
--puntuacion;
puntuacion += 12;
puntuacion -= 2;

//Concatenar
console.log("juan" + "correo");

//Template String
console.log(`Nombre: ${cadena} Email: ${NombreVariable}`);

//Objetos
const productoPrueba = {
  nombreProducto: "Monitor",
  precio: 230,
  disponible: true,
};
productoPrueba.precio += 100;
console.log(productoPrueba.precio);

//agregar nuevas propiedades al objeto
productoPrueba.imagen = "imagen.jpg";
//eliminar propiedades del objeto
delete productoPrueba.disponible;

console.warn("-- Destructurando objetos --");
/*el nombre de la constante entre {} es el nombre de la variable que puedes usar en el codigo, 
y hace referencia a la variable y al valor dentro del objeto el cual indicas, por lo que puedes usar las propiedades del objeto como variables con su valor
el nombre de la variable de destructuring debe ser el mismo que dentro del objeto, si no, no se podria vincular al objeto.
*/
const { precio, nombreProducto } = productoPrueba;
console.log(precio + " " + nombreProducto);

//"use strict"; //Corre JS en modo estricto, muestra mas mensajes de error y para el codigo en el error.
console.warn("-- Metodos de objeto --");
//freeze --> hace que al obejto no se le puedan agregar ni eliminar propiedades ni cambiar valores de los actuales, "congela" la estructura del objeto
//seal --> hace que al obejto no se le puedan agregar ni eliminar propiedades pero si cambiar valores de los actuales
const objetoCongelado = {
  nombreProducto: "Monitor",
  precio: 230,
  disponible: true,
};
// Object.freeze(objetoCongelado);
console.log(Object.isFrozen(objetoCongelado));
console.log(objetoCongelado);

Object.seal(objetoCongelado);
objetoCongelado.imagen = "imagen.jpg";
objetoCongelado.precio = 1330;
console.log(objetoCongelado);

//Unir objetos
console.warn("-- Unir objetos. Sprid Operator--");
const obj1 = {
  nombreProducto: "Monitor",
  precio: 230,
  disponible: true,
};
const obj2 = {
  peso: "1kg",
  medida: "1m",
};
// los 3 puntos (...) en el nuevo objeto sirve para unir, fusionar, dos o mas objetos en uno solo, en este caso en el nuevoObj, el resultado sera un objeto
//con las propiedades de los dos objetos, en este caso 5 propiedades, 3 de obj1 y 2 de obj2
const nuevoObj = { ...obj1, ...obj2 };

console.log(obj1);
console.log(nuevoObj);

//Arrays
console.warn("-- Arrays --");

const numerosArray = [10, 20, 30];
console.log(numerosArray);
//te muestra una tabla el array con indice/valor mucho mas visual
console.table(numerosArray);

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio");
console.table(meses);

//Acceder a los valores del array
console.log("Valor indice 0 " + numerosArray[0]);
numerosArray.forEach(function (numero) {
  console.log("Valor indice foreach " + numero);
});
console.log(meses.length);

//agregar al final del array
numerosArray.push(50, 90, 99);
//agregar al inicio del array
numerosArray.unshift(1, 2, 3);
console.table(numerosArray);
//elimina el ultimo elemento del array
meses.pop();
//elimina el primer elemento del array
meses.shift();
console.table(meses);
//eliminar un valor en especifico del array, indicando la posicion y los elementos a eliminar desde esa posicion.
meses.splice(2, 1); //elimina dedse la posicion 2, solo 1 elemento
console.table(meses);

//Como no "tocar" el array original y hacer las operaciones en otro array tmp
const meses1 = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio");
const nuevoMeses = [...meses1, "Julio"];
console.table(nuevoMeses);

//nuevas operaciones con Array
console.warn("-- Arrays Methods--");

const carrito = [
  { nombre: "Monitor 10 pulg", precio: 120 },
  { nombre: "Monitor 20 pulg", precio: 30 },
  { nombre: "Monitor 30 pulg", precio: 520 },
  { nombre: "Monitor 40 pulg", precio: 160 },
  { nombre: "Monitor 50 pulg", precio: 320 },
  { nombre: "Monitor 60 pulg", precio: 190 },
  { nombre: "Monitor 70 pulg", precio: 70 },
];

//includes es ideal para arrays que no son objetos, y saber si existe un valor dentro del array
meses.forEach(function (mes) {
  if (mes.includes("Marzo")) {
    console.log("Marzo existe");
  }
});
let check = meses.includes("Diciembre");
console.log(check);

//para arrays de objetos y saber si existe un valor/objeto dentro del array se usa "some"
check = carrito.some(function (prod) {
  return prod.nombre === "Monitor 10 pulg";
});
console.log(check);

//forma simplificada de hacer un array function
check = carrito.some((prod) => prod.nombre === "Monitor 10 pulg");
console.log(check);

//Reduce, te hace la suma, concatenacion de todos los elementos del array, asignandole un valor inicial en la function.
//total => es la variable que suma todos los valores y se va guardando el valor final
// se suman los prod.precios (+) y se guardan en total, del array carrito
//el 0 indica el valor inicial de la variable total, en este caso es 0, y te devuelve la suma total
check = carrito.reduce((total, prod) => total + prod.precio, 0);
console.log(check);
check = carrito.reduce(function (total, prod) {
  return total + prod.precio;
}, 10);
console.log(check);

//Filter, obtener cualquier elemento en base a una condicion
check = carrito.filter((prod) => prod.precio > 200);
console.table(check);
check = carrito.filter((prod) => prod.precio < 200);
console.table(check);
check = carrito.filter((prod) => !prod.nombre.includes("20"));
console.table(check);

//Funciones en JS
console.warn("-- Funciones en JS --");
/*
El "hoisting" en JavaScript es un comportamiento donde las declaraciones de variables y funciones son elevadas (movidas) 
al inicio de su contexto de ejecución antes de que se ejecute el código. Esto significa que puedes usar una variable o función
antes de declararla en tu código, pero ten en cuenta que solo la declaración se mueve, no la asignación (en el caso de variables).
*/

//Declaracion de la function --> se permite llamarla antes de ser declarada, por el hoisting de JS, que eleva la declaracion de la function al inicio.

function sumar() {
  console.log(10 * 10);
}
sumar();

//Expresion de la function --> en esta expresion de function no aplica el hoisting, por que lo detecta como una variable.
const sumar2 = function () {
  console.log(20 * 20);
};
sumar2();

//IIFE --> son funciones que se invocan a ellas mismas, en el mismo archivo JS que es declarado, sirve para uqe no se mezclen variables de otros archivos
(function () {
  console.log("esto es una funcion");
})();

//Diferencias entre method y function
console.warn("-- Diferencias entre method y function --");

const num1 = 20;
const num2 = "20";

console.log(parseInt(num2)); //parseInt() es una function
console.log(num1.toString()); //toString es un method

//Funciones con parametros
console.warn("-- Funciones con parametros y retornos --");

//En este caso el valor por defecto de los dos parametros es 0, en caso de que no se pase ningun valor al invocar la function, tomara el valor por defecto.
function sumarParametro(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}
sumarParametro(3, 8);
sumarParametro(3);

const multiplicar = function (n1, n2) {
  console.log(n1 * n2);
};
multiplicar(2, 2);

function restar(n1, n2) {
  return n1 - n2;
}

const result = restar(23, 11);
console.log(result);

let totalcarrito = 0;
function agregarCarrito(precio) {
  return (totalcarrito += precio);
}
function calcularImpuesto(total) {
  return 1.2 * totalcarrito;
}

console.log(agregarCarrito(100));
console.log(agregarCarrito(200));
console.log(agregarCarrito(300));
console.log("Con impuestos: " + calcularImpuesto(totalcarrito));

//Metodos de propiedad
console.warn("-- Metodos de propiedad --");

const reproductor = {
  reproducir: function (id) {
    console.log("reproduciendo ID: " + id);
  },
  pause: function () {
    console.log("pausando...");
  },
};

reproductor.borrarCancion = function (id) {
  console.log("cancion borrada con ID: " + id);
};
reproductor.crearPlaylist = function (nombre) {
  console.log("Creando playlist: " + nombre);
};
reproductor.reproducirPlaylist = function (nombre) {
  console.log("Reproduciendo playlist: " + nombre);
};
reproductor.reproducir(1231);
reproductor.pause();
reproductor.borrarCancion(1234);
reproductor.crearPlaylist("CancionesPlaylist");
reproductor.reproducirPlaylist("CancionesPlaylist");

//Funciones flecha
console.warn("-- Funciones flecha // Arrow function --");
//con una function de una sola linea los { } pueden eliminarse. Siempre deben estar declaradas en variables const o let
const dividir = (n1, n2) =>
  console.log("Dividir: " + n1 + "/" + n2 + " --> " + n1 / n2);
dividir(100, 5);

//con un unico parametro podemos eliminar el parentesis de los parametros y los {} al ser tener solo una linea la function
const aprendiendo = (tecnologia) => console.log(`Aprendiendo: ${tecnologia}`);
aprendiendo("JavaScript");

//convertir en un arrow function
meses.forEach((mes) => {
  console.log(mes);
  if (mes.includes("Marzo")) {
    console.log("Marzo existe");
  }
});
//function de forma arrow function
check = carrito.some((prod) => prod.nombre === "Monitor 10 pulg");
console.log(check);
check = carrito.reduce((total, prod) => total + prod.precio, 0);
console.log(check);

//Estructuras de control
console.warn("-- Estructuras de control --");
//IF - ELSE IF - ELSE
//escribir codigo para revisar que una condicion se cumpla o no. Condiciones con if, else, elseif
// === es una condicion estricta de igual (compara valor y tipo de dato typeof), == compara solo valor, = asigna valor no sirve para condicion
if ("100" == 100) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}

if ("100" === 100) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}

//SWITCH
const metodoPago = "tarjeta";
switch (metodoPago) {
  case "tarjeta":
    console.log("Pagaste con: " + metodoPago);
    break;
  case "efectivo":
    console.log("Pagaste con: " + metodoPago);
    break;
  case "tranfer":
    console.log("Pagaste con: " + metodoPago);
    break;
  case "crypto":
    console.log("Pagaste con: " + metodoPago);
    break;
  default:
    console.log("decide con que pagar");
    break;
}

//LOOP
//debe ser let la variable con la que iniciamos el for
// for(let i= 0; i<10; i++){
//     console.log(i)
// }
// //El numero par/impar de 1 a 100
//  for(let i= 1; i<=100; i++){
//     if(i%2 === 0){console.log(i + "-> par")}
//     else{console.log(i + "-> impar")}
// }

// for (let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i].nombre)
// }

//WHILE
// let i= 0
// while(i<10){
//     console.log(i)
//     i++;
// }

//DO WHILE
// let i= 0
// console.log("doWhile")
// do{
//     i++;
//     console.log(i)
// }while(i<10)

//FOR EACH --> cuando se quiera listar sobre un array. Es genial para iterar y mostrar en pantalla los elementos de un array
console.log("FOR-EACH");
carrito.forEach((producto) => console.log(producto.nombre));
const arrayFOREACH = carrito.forEach((producto) => producto.nombre);
console.log(arrayFOREACH); //-> undefined

//MAP --> si hay que actualizar o modificar el array. Puedes crear un array a partir de lo que devuelve el MAP, por lo que en este caso con MAP puedes hacer
//modificaciones sobre el array resultante.
console.log("MAP");
const arrayMAP = carrito.map((producto) => producto.nombre);
console.log(arrayMAP); //-> array de nombres del producto del array carrito

//This en JS
console.warn("-- THIS en JavaScript --");
//Hace referencia a los valores del mismo objeto desde donde se esta llamando

//Si utilizamos arrow function => haremos referencia a variables globales, por lo que el this hara referencia a una variable global, y si la variable no esta definida
//globalmente sera un undefined. Para que haga referencia a variables dentro del objeto debe ser function() {}
const reserva = {
  nombre: "Ruben",
  apellido: "de la cruz",
  total: 400,
  pagado: true,
  informacion: function () {
    console.log(
      `Cliente: ${this.nombre} reservo una habitacion y pago ${this.total}€`
    );
  },
};

window.nombre = "PEPITO";
window.total = "123";
const reserva2 = {
  nombre: "Juan",
  apellido: "Perez",
  total: 4100,
  pagado: true,
  informacion: () => {
    console.log(
      `Cliente: ${this.nombre} reservo una habitacion y pago ${this.total}€`
    );
  },
};
reserva.informacion();
reserva2.informacion();

//Objetos - POO
console.warn("-- Objetos --");

//Objeto literal, usado normalmente
const cesta = { nombre: "Monitor 10 pulg", precio: 120 };

//Constructor de objeto. Clase para la creacion de objetos. Definimos los atributos y las tipologias de dato de esos atributos y componentes de esa clase/objeto
function Animal(especie, cantidad) {
  this.especie = especie;
  this.cantidad = cantidad;
}

const animal1 = new Animal("Vaca", 3);
const animal2 = new Animal("Oveja", 4);
const animal3 = new Animal("Cerdo", 7);
console.log(animal1, animal2, animal3);

function imprimirAnimal(animal) {
  return `Hay ${animal.cantidad} ${animal.especie} en la granja`;
}
console.log(imprimirAnimal(animal1));
console.log(imprimirAnimal(animal2));

function Usuario(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const usuario1 = new Usuario("Ruben", 31);
const usuario2 = new Usuario("Gema", 28);
console.log(usuario1, usuario2);

//PROTOTYPES
console.warn("-- Prototypes --");
//Creacion de funciones que se utilizan de manera especifica para un unico Objeto
Animal.prototype.imprimir = function () {
  return `Hay ${this.cantidad} ${this.especie} en la granja`;
};

//prototype para la clase Usuario
Usuario.prototype.imprimir = function () {
  return `El usuario ${this.nombre} tiene ${this.edad} años`;
};

console.log(animal1.imprimir());
console.log(animal2.imprimir());
console.log(usuario1.imprimir());
console.log(usuario2.imprimir());

//POO - Clases JS
console.warn("-- Clases en JavaScript --");
class Empleado {
  constructor(nombre, apellidos, empresa, anyos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.empresa = empresa;
    this.anyos = anyos;
  }
  //podemos escribir todas las function dentro de la clase que queramos que sean unicas para el tipo de objeto de esta clase, como si fuesen prototypes
  imprimir() {
    return `El empleado ${this.nombre} ${this.apellidos} trabaja para ${this.empresa}`;
  }
  trienios() {
    const trienio = Math.floor(this.anyos / 3);
    return `El empleado lleva en ${this.empresa} un total de ${trienio} trienios`;
  }
  obtenerAnyosTrabajados() {
    return this.anyos;
  }
}
const cliente1 = new Empleado("Ruben", "De la Cruz", "Indra", 14);
console.log(cliente1);
console.log(cliente1.imprimir());
console.log(cliente1.trienios());
console.log(
  cliente1.imprimir() +
    " y lleva " +
    cliente1.obtenerAnyosTrabajados() +
    " años en la empresa."
);

//HERENCIA
console.warn("-- Herencia en JavaScript --");

class Subcontratado extends Empleado {
  constructor(nombre, apellidos, empresa, anyos, mercado) {
    super(nombre, apellidos, empresa, anyos);
    this.mercado = mercado;
  }
  imprimir() {
    return `${super.imprimir()} es subcontrado en el sector de ${this.mercado}`;
  }
  obtenerAnyosTrabajados() {
    return `${this.nombre} ${
      this.apellidos
    } lleva ${super.obtenerAnyosTrabajados()} años trabajados en ${
      this.empresa
    }`;
  }
}
const subcontratado = new Subcontratado(
  "Pedro",
  "Garcia",
  "Deloitte",
  12,
  "Energia"
);
console.log(subcontratado.imprimir());
console.log(subcontratado.obtenerAnyosTrabajados());

//Try-Catch
console.warn("-- Try-Catch --");

//Promises
console.warn("-- Promesas --");
//cuando se ejecuta un promise se pasan 2 valores automaticamente, resolve y reject, resolve se ejecuta cuando la promesa se cumple, reject se ejecuta cuando no se cumple
const usuarioAutenticado = new Promise((resolve, reject) => {
  const auth = true;
  if (auth) {
    resolve("Usuario autenticado"); //=> el promise se cumple. Lo que va dentro del resolve es lo que devuelve la promesa cuando se cumple, es lo que se recoge en el .then()
  } else {
    reject("Usuario no autenticado"); //=> el promise no se cumple. Lo que tiene recoge el rejecto, cuando no se cumple, se recoge en el .catch()
  }
});
console.log(usuarioAutenticado);
/*En los promises existen 3 valores posibles 
    Pending: No se ha cumplido pero tampoco se ha rechazado
    Fullfilled: ya se cumplio la promesa
    Rejected: se ha rechazado o no se pudo cumplir la promesa
*/
//.then() es la forma de acceder a la function del resolve, y recoger su informacion. En caso de reject, se recoge la info con el catch().
usuarioAutenticado
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

//Promises con API
const botonId = document.getElementById("boton");
const botonSelector = document.querySelector("#boton");

botonId.addEventListener("click", () => {
  Notification.requestPermission()
    .then((resultado) => console.log(`Then: ${resultado}`))
    .catch((error) => console.log(`Catch: ${error}`));
});

// if (Notification.permission == "granted") {
//   new Notification("Notificacion prueba", {
//     icon: "img/icon.png",
//     body: "Notificacion usuario",
//   });
//   console.log("Notificacion enviada");
// }

//Async  await
console.warn("-- Async await --");
//Sirve para lanzar tareas que tardan mucho pero mientras se muestran otras que se van cargando.
const boton2 = document.querySelector("#boton2");

boton2.addEventListener("click", () => {
  appLista();
});

function descargarClientes() {
  return new Promise((resolve) => {
    console.log("descargando clientes...");
    setTimeout(() => {
      if (Notification.permission == "granted") {
        resolve(
          new Notification("Los clientes fueron descargados", {
            icon: "img/icon.png",
            body: "Finaliza el await de clientes",
          }),
          console.log("Segundos: " + new Date().getSeconds())
        );
      }
    }, 5000);
  });
}
function descargarPedidos() {
  return new Promise((resolve) => {
    console.log("descargando pedidos...");
    setTimeout(() => {
      if (Notification.permission == "granted") {
        resolve(
          new Notification("Los pedidos fueron descargados", {
            icon: "img/icon.png",
            body: "Finaliza el await de pedidos",
          }),
          console.log("Segundos: " + new Date().getSeconds())
        );
      }
    }, 3000);
  });
}

async function appLista() {
  try {
    console.log("-- Comienza el metodo async-await --");
    // await descargarClientes();
    // await descargarPedidos();
    // const promesasAll =
    await Promise.all([descargarClientes(), descargarPedidos()]); //se ejecutan de esta forma, todas las funciones al mismo tiempo, y de esta forma no depende la segunda de la primera como en la linea 636 y 637
    mostraralgo();
  } catch (error) {
    console.log(error);
  }
}
function mostraralgo() {
  console.log("Este console si depende del await y se ejecuta cuando termina.");
}
console.log("Este console no depende del await.");

//Trabajar con dos asyn-await a la vez --> Promise.all([]) recoge todos los metodos que necesitan estar en un await al mismo tiempo y que deben estar en una function asyn

//Fetch API
console.warn("-- Fetch API --");
///Es el nuevo AJAX, te permite enviar u obtener informacion de un servidor, sin necesidad de recargar la pagina.
//puedes obtener un archivo local o una respuesta de un servidor JSON. Utiliza Promises o Async/await
//Fetch API consume archivos JSON lo que mas.

function obtenerEmpleados() {
  // fetch('aqui iria la URL')
  const archivo = "empleados.json";
  fetch(archivo)
    .then((resultado) => resultado.json())
    //aqui indicamos que el resultado va a ser un JSON, y lo retorna al siguiente then, como si fuera una promesa de una promesa.
    //.json() devuelve otra promesa que contiene el objeto JS con los datos JSON
    .then((datos) => console.log(datos)); //Recogemos la informacion que obtuvimos de la 1º promesa del .json(). <datos = Promise que devuelve el .json()>
} //La razón de tener dos then es que la primera Promesa resuelve a la respuesta HTTP y la segunda resuelve a los datos JSON de esa respuesta

obtenerEmpleados();

//Hacer un FETCH con un async-await de forma mas rapida
async function obtenerJSONempleado() {
  const archivo = "empleados.json";
  const resultado = await fetch(archivo);
  const datos = await resultado.json();
  console.log("Fetch con asyn-await: ")
  console.log(datos);
}
obtenerJSONempleado();




//PRUEBA PARA CONSULTAR UNA API Y RELLENAR HTML
// Obtener el contenedor del grid
const userGrid = document.getElementById("userGrid");
function obtenerUsuarioPlatzi() {
  // fetch('aqui iria la URL')
  const archivo = "https://api.escuelajs.co/api/v1/users";
  fetch(archivo)
    .then((resultado) => {
      //aqui indicamos que el resultado va a ser un JSON, y lo retorna al siguiente then, como si fuera una promesa de una promesa.
      return resultado.json();
    })
    .then((datos) => {
      console.log(datos);
      datos.forEach((user) => {
        // console.log(user.id + " " + user.email);
        const fichaUsuario = crearFichaUsuario(user);
        userGrid.appendChild(fichaUsuario);
      });
    });
}

obtenerUsuarioPlatzi();

// Función para crear y llenar una ficha de usuario
function crearFichaUsuario(usuario) {
  const card = document.createElement("div");
  card.className = "card";

  const imagen = document.createElement("img");
  imagen.src = usuario.avatar;
  imagen.alt = `Usuario ${usuario.id}`;
  imagen.className = "profile-picture";

  const id = document.createElement("p");
  id.textContent = `ID: ${usuario.id}`;

  const email = document.createElement("p");
  email.textContent = `Email: ${usuario.email}`;

  const nombre = document.createElement("p");
  nombre.textContent = `Nombre: ${usuario.name}`;

  card.appendChild(imagen);
  card.appendChild(id);
  card.appendChild(email);
  card.appendChild(nombre);

  return card;
}
