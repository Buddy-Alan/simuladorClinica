selectEspecialidad = document.querySelector("#selectEspecialidad")
sacarTurno = document.querySelector("#sacarTurno")
fechaTurno = document.getElementById("date")
horaTurno = document.getElementById("dates")
selectMedico = document.getElementById("selectMedico")
observaciones = document.getElementById("observaciones")
emailPaciente = document.getElementById("emailPaciente")

sacarTurno.addEventListener("click", () => {
    if (isNaN(selectMedico.value) || isNaN(selectEspecialidad.value) ||
        fechaTurno.value == "" || horaTurno.value == "" || observaciones.value == "" || emailPaciente.value == "" || !validarEmail(emailPaciente.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Datos Incompletos',
            text: 'Porfavor, compelte los datos correctamente',
        })
    }
    else {
        Swal.fire({
            title: '¿Quiere Reservar el turno?',
            showDenyButton: true,
            confirmButtonText: 'Si',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Turno Reservado', '', 'success')
            }
        })
    }
}


)
