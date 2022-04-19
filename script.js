let datosTurno

let arrayFechas = []

let arrayHoras = []

let arrayTurnos = []

let turnoDisponible 

fetch('turnos.json')
        .then(resp => resp.json())
        .then(data => arrayTurnos = data)

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

function disponibilidad(fecha, hora){

        if(fecha.toString().length > 0 && hora.toString().length > 0) {
        fetch('turnos.json')
        .then(resp => resp.json())
        .then(data => {

            arrayFechas = data.filter(turno => turno.fecha.includes(fechaIngresada.value))
            arrayHoras = arrayFechas.filter(turno => turno.horario.includes(horaIngresada.value))
            
            if(arrayHoras.length > 0){
                turnoDisponible = false
                swal({
                    title: "Lo sentimos",
                    text: "El turno seleccionado no está disponible",
                    button:{
                    text: "Aceptar",
                    className:"botonEnviar"                
                    }
                })
        }
            else(turnoDisponible = true)
    })
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

fechaIngresada.addEventListener('change', (event)=> {
    event.preventDefault()
    disponibilidad(fechaIngresada.value, horaIngresada.value)})

const horaIngresada = document.getElementById("selectorHorario")

horaIngresada.addEventListener('change', (event)=> {
    event.preventDefault()
    disponibilidad(fechaIngresada.value, horaIngresada.value)})

const formularioCompleto = document.getElementById("formulario")

formularioCompleto.addEventListener('submit', (event)=>{

    event.preventDefault()

    let formatoDia = fechaIngresada.valueAsDate

    formatoDia.setMinutes(formatoDia.getMinutes() + formatoDia.getTimezoneOffset())

    datosTurno = new Turno(nombreIngresado.value, telefonoIngresado.value, usuarioIngresado.value, servicioIngresado.value, formatoDia, horaIngresada.value)
     
    if(turnoDisponible){
    arrayTurnos.push(datosTurno)

    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(arrayTurnos)
    })

    .then((resp) =>{ 
        console.log(arrayTurnos)})

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
       
        formularioCompleto.submit()
    }) }
}) 