let datosTurno

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
datosTurno = new Turno(nombreIngresado.value, telefonoIngresado.value, usuarioIngresado.value, servicioIngresado.value, fechaIngresada.valueAsDate, horaIngresada.value)
let pantallaForm = document.getElementById("mainTurnos")
pantallaForm.classList.add("ocultarElementos")
let turnoSacado = document.createElement("p")
let confirmacionTurno = `Usted solicitó un turno a nombre de ${datosTurno.nombre}, teléfono ${datosTurno.telefono}, usuario @${datosTurno.usuario} para el servicio ${datosTurno.servicio} el día ${datosTurno.fecha.getDate()} a las ${datosTurno.horario} hs. 
Dentro de las próximas 48 horas recibirá una confirmación. Muchas gracias.
`
turnoSacado.innerText = confirmacionTurno
turnoSacado.className = "parrafos"
turnoSacado.classList.add("parrafoVisible")
document.getElementById("texto").append(turnoSacado)
let confirmar = document.createElement("button")
confirmar.innerText = "Cerrar"
confirmar.className = "botonEnviar"
confirmar.classList.add("parrafoVisible")
confirmar.classList.add("btn-secondary")
confirmar.classList.add("btn-lg")
turnoSacado.append(confirmar)
confirmar.addEventListener('click', ()=>{
    formularioCompleto.submit()
})
    }) 
