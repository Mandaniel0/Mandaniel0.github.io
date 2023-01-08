let contacto = document.querySelector(".contacto");

contacto.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) => console.log(resultado));

  if (Notification.permission === "granted") {
    new Notification("annielfranciscoreyes@gmail.com");
  }
});
