const urlParams = new URLSearchParams(window.location.search);
const usuario = urlParams.get("usuario");
const usuarios = [`Juan`];
const irAlHomeMedicoImg = document.querySelector(".irAlHomeMedicoImg")
const irAlHomeMedicoTexto = document.querySelector(".irAlHomeMedicoTexto")
const indexUser = usuarios.findIndex((e) => e == usuario);
if (usuario == null || indexUser == -1) {
  let url = `index.html`;
  window.location.href = url;
}
const bienvenido = document.getElementById("bienvenidoMedico");
bienvenido.innerHTML = `¡Bienvenido Dr.${usuario}!`;

eventoVolverHome = (evento) => {
  evento.addEventListener("click", (ev) => {
    ev.preventDefault()
    let url = `index.html?usuario=${usuario}`;
    window.location.href = url;
  })
}

eventoVolverHome(irAlHomeMedicoImg)

eventoVolverHome(irAlHomeMedicoTexto)