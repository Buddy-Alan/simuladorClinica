const urlParams = new URLSearchParams(window.location.search);
const usuario = urlParams.get("usuario");
const usuarios = [`Rodrigo`];
const irAlHomePacienteImg = document.querySelector("#irAlHomePacienteImg")
const irAlHomePacienteTexto = document.querySelector("#irAlHomePacienteTexto")
const indexUser = usuarios.findIndex((e) => e == usuario);
if (usuario == null || indexUser == -1) {
  let url = `index.html`;
  window.location.href = url;
}
const bienvenido = document.getElementById("bienvenidoPaciente");
bienvenido.innerHTML = `¡Bienvenido ${usuario}!`;

const eventoVolverHomePaciente = (evento) => {
  evento.addEventListener("click", (ev) => {
    ev.preventDefault()
    let url = `index.html?usuario=${usuario}`;
    window.location.href = url;
  })

}



eventoVolverHomePaciente(irAlHomePacienteImg)

eventoVolverHomePaciente(irAlHomePacienteTexto)

