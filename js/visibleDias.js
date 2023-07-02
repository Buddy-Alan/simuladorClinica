diaLunes = document.querySelector("#diaLunes")
checkboxLunes = document.getElementById("checkboxLunes")
diaMartes = document.querySelector("#diaMartes")
checkboxMartes = document.getElementById("checkboxMartes")

diaMiercoles = document.querySelector("#diaMiercoles")
checkboxMiercoles = document.getElementById("checkboxMiercoles")

diaJueves = document.querySelector("#diaJueves")
checkboxJueves = document.getElementById("checkboxJueves")

diaViernes = document.querySelector("#diaViernes")
checkboxViernes = document.getElementById("checkboxViernes")

const agregarOSacarClase = (checkbox, dia) => {
    checkbox.addEventListener("click", () => {
        if (dia.classList.contains('noVisible')) {
            dia.classList.remove('noVisible')
        }
        else {
            dia.classList.add('noVisible')
        }
    })
}

agregarOSacarClase(checkboxLunes, diaLunes)
agregarOSacarClase(checkboxMartes, diaMartes)
agregarOSacarClase(checkboxMiercoles, diaMiercoles)
agregarOSacarClase(checkboxJueves, diaJueves)
agregarOSacarClase(checkboxViernes, diaViernes)