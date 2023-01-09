let contacto = document.querySelector(".contacto");

contacto.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) => console.log(resultado));

  if (Notification.permission === "granted") {
    const notificacion = new Notification("annielfranciscoreyes@gmail.com");

    notificacion.onclick = () => {
      window.open("mailto:annielfranciscoreyes@gmail.com");
    };
  }
});
