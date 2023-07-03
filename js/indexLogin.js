const enviar = document.getElementById("enviar");
const userName = document.getElementById("userName");
const pass = document.getElementById("password");
const error = document.getElementById("errorLogin");
const modal = document.getElementById("modalLogin")
const urlParams = new URLSearchParams(window.location.search);
const usuario = urlParams.get("usuario");
const visualUsuario = document.querySelector("#visualUsuario")
const sesion = document.querySelector("#sesion")
//En los usuarios el tipe hace referencia a si es paciente o medico
// El 1 representa paciente, el 2 medicos
//La idea es tener los usuarios en una base de datos,
// con el fin de no estar pasando los usuarios en un array en cada archivo requerido
const usuarios = [{
  usuarioDB: "Rodrigo",
  passswordDB: "123",
  type: 1
},
{
  usuarioDB: "Juan",
  passswordDB: "123",
  type: 2
},
{
  usuarioDB: "Lucas",
  passswordDB: "123",
  type: 2
}]



enviar.addEventListener("click", (ev) => {
  ev.preventDefault();
  const usuario = userName.value;
  const passwordUser = pass.value;
  const user = usuarios.find((e) => e.usuarioDB == usuario && e.passswordDB == passwordUser);
  if (user != undefined && user.type == 1) {
    let url = `paciente.html?usuario=${usuario}`;
    window.location.href = url;
  } else
    if (user != undefined && user.type == 2) {
      let url = `medico.html?usuario=${usuario}`;
      window.location.href = url;
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Usuario o Contraseña Incorrecto'
      })
    }
});


modal.addEventListener("Submit", (ev) => {
  ev.preventDefault();
  const usuario = userName.value;
  const passwordUser = pass.value;
  const user = usuarios.find((e) => e.usuarioDB == usuario && e.passswordDB == passwordUser);
  if (user != undefined && user.type == 1) {
    let url = `paciente.html?usuario=${usuario}`;
    window.location.href = url;
  } else
    if (user != undefined && user.type == 2) {
      let url = `medico.html?usuario=${usuario}`;
      window.location.href = url;
    }
    else {
      alert("Nombre de usuario o contraseña incorreto");
    }
}
);

//Se toma si por parametros paso algun usuario en el index, con el fin de dejarles la visual
// de medicos o de pacientes y que puedan volver al home sin problema
//El if es para corroborar si el parametro que llego  es de un paciente o de un medico
const userParams = usuarios.find((e) => e.usuarioDB == usuario);
if (userParams != undefined && userParams.type == 1) {
  visualUsuario.innerHTML = `<a class="nav-link active" aria-current="page" href="">Paciente</a>`
  sesion.innerHTML = `<a class="nav-link active cerrarSesion"  aria-current="page" href="./index.html">Cerrar Sesion</a>`
}

if (userParams != undefined && userParams.type == 2) {
  visualUsuario.innerHTML = `<a class="nav-link active" aria-current="page" href="">Medico</a>`
  sesion.innerHTML = `<a class="nav-link active cerrarSesion"  aria-current="page" href="./index.html">Cerrar Sesion</a>`
}

//Este evento hace que re diriga al usuario a su seccion sin problema, ya sea medico o paciente
visualUsuario.addEventListener(`click`, (ev) => {
  ev.preventDefault()
  if (userParams != undefined && userParams.type == 1) {
    let url = `paciente.html?usuario=${usuario}`;
    window.location.href = url;
  }
  else {
    let url = `medico.html?usuario=${usuario}`;
    window.location.href = url;
  }
})


