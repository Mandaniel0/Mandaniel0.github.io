class Persona {
  constructor(id, nombre, apellido, sueldo) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.sueldo = sueldo;
  }

  crearHTML() {
    this.limpiarHTML();
    personas.forEach((persona) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `<td>${persona.id}</td>
                          <td>${persona.nombre}</td>
                          <td>${persona.apellido}</td>
                          <td>RD$ ${persona.sueldo}</td>
                          <td> <img src="img/editar.png" onclick = 'editarPersona(${persona.id})' class = "editar" id = "editar" alt="" /> 
                          <img src="img/borrar.png" onclick = 'eliminarPersona(${persona.id})' class = "borrar" alt=""/></td>`;
      tbody.appendChild(tr);
    });
    this.sincronizarStorage();
  }
  mensaje(tipo) {
    let div = document.createElement("div");
    if (tipo === "error") {
      div.textContent = `Debe llenar todos los campos!`;
      div.classList.add("mensajeError", "mensaje");
      formulario.appendChild(div);
      setTimeout(() => div.remove(), 3000);
    } else if (tipo === "advertencia") {
      div.textContent = `El sueldo de ser mayor a 0!`;
      div.classList.add("mensajeAdvertencia", "mensaje");
      formulario.appendChild(div);
      setTimeout(() => div.remove(), 3000);
    } else if (tipo === "exito") {
      div.textContent = `Los datos se han ingresado exitosamente!`;
      div.classList.add("mensajeExito", "mensaje");
      formulario.appendChild(div);
      setTimeout(() => div.remove(), 3000);
    }
  }

  limpiarHTML() {
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  eliminarPersona(id) {
    //personas = personas.filter((persona) => persona.id !== id);
    modalBorrar.showModal();
    let btnSiBorrar = document.querySelector("#siBorrar");
    let btnNoBorrar = document.querySelector("#noBorrar");
    let eliminarPersona = personas.findIndex((persona) => persona.id === id);

    btnSiBorrar.onclick = () => {
      modalBorrar.close();
      personas.splice(eliminarPersona, 1);
      this.crearHTML();
    };
    btnNoBorrar.onclick = () => {
      modalBorrar.close();
    };
  }

  editarPersona(id) {
    modal.showModal();

    personas.forEach((persona) => {
      if (persona.id === id) {
        nombreActualizado.value = persona.nombre;
        apellidoActualizado.value = persona.apellido;
        sueldoActualizado.value = persona.sueldo;
      }
    });

    let btnActualizar = document.querySelector("#actualizar");
    btnActualizar.onclick = () => {
      actualizarPersona(id);
    };

    let cerrarModal = document.querySelector("#cerrarModal");
    cerrarModal.onclick = () => {
      modal.close();
    };
  }

  actualizarPersona(id) {
    personas.forEach((persona) => {
      if (persona.id === id) {
        persona.nombre = nombreActualizado.value;
        persona.apellido = apellidoActualizado.value;
        persona.sueldo = +sueldoActualizado.value;
      }
    });

    modal.close();
    this.crearHTML();
  }

  sincronizarStorage() {
    localStorage.setItem("personas", JSON.stringify(personas));
  }
}
