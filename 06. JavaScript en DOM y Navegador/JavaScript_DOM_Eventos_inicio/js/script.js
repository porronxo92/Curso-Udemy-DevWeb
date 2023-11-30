//querySelector -> Retorna 1 elemento
//para obtener los elementos de una clase, dentro del querySelector seria .clase, y si queremos acceder a un elemento especifico <a, h2, h3, p...> '.clase h2'
//para obtener elemento a traves de su ID, dentro del querySelector seria #id
//para obtener el elemento de un selector directamente poner su etiqueta *h1, h2, a, p...
const heading = document.querySelector(".header__texto h2");
console.log(heading);
heading.textContent = "Nuevo heading";

//querySelectorAll -> retorna 0 o todos los elementos de la query que le pasamos al selector
const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "Inicio";
console.log(enlaces);

//Generar un nuevo enlace.
//Etiqueta en MAYUSCULAS
const nuevoEnlace = document.createElement("A");
//agregar enlace
nuevoEnlace.href = "nuevoenlace.html";
//agregar texto
nuevoEnlace.textContent = "Tienda Café";
//agregar clase
nuevoEnlace.classList.add("navegacion__enlace");

//agregarlo al documento (a la pagina)
const navegacion = document.querySelectorAll(".navegacion");

const nav = navegacion[0];
nav.appendChild(nuevoEnlace);
console.log(nav);

//Eventos DOM y windows

window.onload = function () {
  console.log("evento onload");
};
window.addEventListener("load", function () {
  // load espera que el JS y los archivos que dependen del HTML esten listos.
  console.log(
    "evento load EventListener (espera carga de todos los archivos (HTML, JS, CSS...)"
  );
});

document.addEventListener("DOMContentLoaded", function () {
  //espera que se descargue unicamente el HTML, no espera a mas recursos (img, css, js...)
  console.log("evento DOMContentLoaded (espera carga de HTML solo)");
});

//Añadir un elemento y asociar un evento
// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click', function(e){
//     console.log(e)
//     e.preventDefault()
//     console.log('enviando form...')
// })

//Eventos con teclado. Inputs y textarea. Formulario
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario ");

console.log(datos);

//añadir submit a formulario
formulario.addEventListener("submit", function (e) {
  //utilizar el evento submit siempre en los formularios. Se debe hacer el selector al form.
  e.preventDefault();
  console.log(e.target);
  //Validar form
  const { nombre, email, mensaje } = datos;
  console.log("Nombre form: " + nombre);
  console.log("Email form: " + email);
  console.log("Mensaje form: " + mensaje);
  if (isEmpty(nombre) || isEmpty(email)) {
    mostrarMensaje(
      "Revisa los campos del formulario, y rellena los campos obligatorios (*)",
      "error"
    );
    return;
  } else {
    mostrarMensaje("Formulario enviado", "correcto"); 
  }
});

function mostrarMensaje(mensajeForm, tipoMensaje) {
  const mensaje = document.createElement("P");
  console.log(mensaje)
  mensaje.textContent = mensajeForm;
  if (tipoMensaje == "error") {
    mensaje.classList.add("error");
  } else if (tipoMensaje === "correcto") {
    mensaje.classList.add("correcto");
  }
  formulario.appendChild(mensaje)
  setTimeout(() => {
    mensaje.remove();
  }, 5000);
}

function isEmpty(str) {
  return str === "";
}

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
}
/* Forma diferente de hacer las lineas de arriba

leerTextoInput(nombre);
leerTextoInput(email);
leerTextoInput(mensaje);

function leerTextoInput(elemento) {
  elemento.addEventListener("input", function (e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
  });
}*/

// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function (e) {
//   //console.log(e)
//   if (comprobardatos()) {
//     e.preventDefault();
//     alert(
//       "Revisa los campos del formulario, y rellena los campos obligatorios (*)"
//     );
//   } else {
//     console.log("enviando form...");
//   }
// });
