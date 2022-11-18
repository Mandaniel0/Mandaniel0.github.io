let personas = [];
let tbody = document.querySelector(".tbody");

const formulario = document.querySelector("#formulario");
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let sueldo = document.querySelector("#sueldo");
let siBtn = document.querySelector("#si");
let noBtn = document.querySelector("#no");
let btnAñadir = document.querySelector("#botonAñadir");
let modalBorrar = document.querySelector("#dialogBorrar");
//Formulario para editar
const formaEditar = document.querySelector("#formaEditar");
let nombreActualizado = document.querySelector("#nombreActualizado");
let apellidoActualizado = document.querySelector("#apellidoActualizado");
let sueldoActualizado = document.querySelector("#sueldoActualizado");

//Modal
let modal = document.querySelector("#dialogEditar");
let dialogConfirmacion = document.querySelector("#dialogConfirmacion");

//Eventos
document.addEventListener("DOMContentLoaded", () => {
  personas = JSON.parse(localStorage.getItem("personas")) || [];
  persona.crearHTML();
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

formaEditar.addEventListener("submit", (e) => {
  e.preventDefault();
});

//Funciones
const persona = new Persona();

function añadirPersona() {
  if (nombre.value === "" || apellido.value === "" || sueldo.value === "") {
    persona.mensaje("error");
    formulario.reset();
    return;
  } else {
    dialogConfirmacion.showModal();
    siBtn.onclick = () => {
      dialogConfirmacion.close();

      if (nombre.value !== "" && apellido.value !== "" && sueldo.value !== "") {
        if (sueldo.value > 0) {
          personas.push(
            new Persona(Date.now(), nombre.value, apellido.value, +sueldo.value)
          );
          persona.crearHTML();
          persona.mensaje("exito");
          formulario.reset();

          return;
        } else {
          persona.mensaje("advertencia");
          formulario.reset();
        }
      }
    };

    noBtn.onclick = () => {
      dialogConfirmacion.close();
    };
  }
}

function eliminarPersona(id) {
  persona.eliminarPersona(id);
}

function editarPersona(id) {
  persona.editarPersona(id);
}

function actualizarPersona(id) {
  persona.actualizarPersona(id);
}
