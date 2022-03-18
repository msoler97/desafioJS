let datosTurno

let arrayTurnos = []

if(localStorage.getItem("turnos") != null){
    let jsonParseado = JSON.parse(localStorage.getItem("turnos"))
    arrayTurnos = jsonParseado
}

class Turno{
    constructor(nombre, telefono, usuario, servicio, fecha, horario){
    this.nombre = nombre
    this.telefono = telefono
    this.usuario = usuario
    this.servicio = servicio
    this.fecha = fecha
    this.horario = horario
    }
}

let divNombre = document.getElementById("divNombre")
const nombreIngresado = divNombre.childNodes[3]

let divTelefono = document.getElementById("divTelefono")
const telefonoIngresado = divTelefono.childNodes[3]

let divUsuario = document.getElementById("divUsuario")
const usuarioIngresado = divUsuario.childNodes[3]

const servicioIngresado = document.getElementById("selectorServicio")

const fechaIngresada = document.getElementById("selectorDia")

const horaIngresada = document.getElementById("selectorHorario")

const formularioCompleto = document.getElementById("formulario")
formularioCompleto.addEventListener('submit', (event)=>{
    event.preventDefault()
    let formatoDia = fechaIngresada.valueAsDate
    formatoDia.setMinutes(formatoDia.getMinutes() + formatoDia.getTimezoneOffset())
    let pantallaForm = document.getElementById("mainTurnos")
    pantallaForm.classList.add("ocultarElementos")
    let turnoSacado = document.createElement("p")
    let confirmacionTurno = `Usted solicitó un turno a nombre de ${nombreIngresado.value}, teléfono ${telefonoIngresado.value}, usuario @${usuarioIngresado.value} para el servicio ${servicioIngresado.value} el día ${formatoDia.getDate()}/${formatoDia.getMonth() + 1} a las ${horaIngresada.value} hs. 
    Dentro de las próximas 48 horas recibirá una confirmación. Muchas gracias.
    `
    turnoSacado.innerText = confirmacionTurno
    turnoSacado.classList.add("parrafos", "parrafoVisible")
    document.getElementById("texto").append(turnoSacado)
    let confirmar = document.createElement("button")
    confirmar.innerText = "Cerrar"
    confirmar.classList.add("botonEnviar", "parrafoVisible", "btn-secondary", "btn-lg")
    turnoSacado.append(confirmar)
    confirmar.addEventListener('click', ()=>{
        datosTurno = new Turno(nombreIngresado.value, telefonoIngresado.value, usuarioIngresado.value, servicioIngresado.value, formatoDia, horaIngresada.value)
        arrayTurnos.push(datosTurno)
        console.log(arrayTurnos)
        let arrayJson = JSON.stringify(arrayTurnos)
        localStorage.setItem("turnos", arrayJson)
        formularioCompleto.submit()
    })
}) 