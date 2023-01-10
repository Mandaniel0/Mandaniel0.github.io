let contacto = document.querySelector(".contacto");
let proyectos = document.querySelector(".proyectos");
let habilidades = document.querySelector(".habilidades");

//Eventos

window.addEventListener("online", actualizarEstado);
window.addEventListener("offline", actualizarEstado);

function actualizarEstado() {
  if (navigator.onLine) {
    console.log("Conectado");
  } else {
    let conex = document.createElement("h1");
    conex.textContent = "Sin Conexión...";
    conex.style.textAlign = "center";
    document.write(conex);
  }
}

eventListener();
function eventListener() {
  contacto.addEventListener("click", () => {
    Notification.requestPermission().then((resultado) =>
      console.log(resultado)
    );

    if (Notification.permission === "granted") {
      const notificacion = new Notification("annielfranciscoreyes@gmail.com", {
        icon: "img/icon-A.png",
        body: "@AFRJ",
      });

      notificacion.onclick = () => {
        window.open("mailto:annielfranciscoreyes@gmail.com");
      };
    }
  });

  proyectos.addEventListener("click", () => {
    window.alert("En proceso de desarrollo...");
  });

  habilidades.addEventListener("click", () => {
    window.alert("En proceso de desarrollo...");
  });
}
