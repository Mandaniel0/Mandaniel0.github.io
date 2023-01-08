let contacto = document.querySelector(".contacto");
let correo = document.querySelector(".correo");

contacto.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) => console.log(resultado));

  if (Notification.permission === "granted") {
    new Notification("annielfranciscoreyes@gmail.com");
  }
});

// contacto.onclick = () => {
//   correo.style.visibility = "visible";
//   setTimeout(() => (correo.style.visibility = "hidden"), 5000);
// };
