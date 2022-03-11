let datosTurno

class turno{
    constructor(nombre, telefono, usuario, servicio, fecha, horario){
    this.nombre = nombre
    this.telefono = telefono
    this.usuario = usuario
    this.servicio = servicio
    this.fecha = fecha
    this.horario = horario
    }
}

const nombreIngresado = divNombre.childNodes[3]
nombreIngresado.addEventListener('change', ()=>{
    console.log(nombreIngresado.value)
})

const telefonoIngresado = divTelefono.childNodes[3]
telefonoIngresado.addEventListener('change', ()=>{
    console.log(telefonoIngresado.value)
})

const usuarioIngresado = divUsuario.childNodes[3]
usuarioIngresado.addEventListener('change', ()=>{
    console.log(usuarioIngresado.value)
})

const servicioIngresado = document.getElementById("selectorServicio")
servicioIngresado.addEventListener('change', ()=>{ 
    console.log(servicioIngresado.value)
})

const fechaIngresada = document.getElementById("selectorDia")
fechaIngresada.addEventListener('change', ()=>{
    console.log(fechaIngresada.value)
})

const horaIngresada = document.getElementById("selectorHorario")
fechaIngresada.addEventListener('change', ()=>{
    console.log(horaIngresada.value)
})

const formularioCompleto = document.getElementById("formulario")
formularioCompleto.addEventListener('submit', (event)=>{
event.preventDefault()
datosTurno = new turno(nombreIngresado.value, telefonoIngresado.value, usuarioIngresado.value, servicioIngresado.value, fechaIngresada.valueAsDate, horaIngresada.value)
let pantallaForm = document.getElementById("mainTurnos")
pantallaForm.classList.add("ocultarElementos")
let turnoSacado = document.createElement("p")
turnoSacado.innerText = "Gracias por solicitarnos tu turno. Recibirás una confirmación dentro de las próximas 48hs."
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
