let contacto = document.querySelector(".contacto");
let correo = document.querySelector(".correo");


contacto.onclick = () => {
  correo.style.visibility = "visible";
  setTimeout(() => (correo.style.visibility = "hidden"), 5000);
};
