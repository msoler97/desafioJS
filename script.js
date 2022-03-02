let respUno = "y"
let respDos = "n"
let turnoSacado
const arrayTurnos = []

const sacarTurno = function(cantidadTurnos) {
    if (cantidadTurnos > 0){
        cantidadTurnos = cantidadTurnos - 1
        alert("Quedan " + cantidadTurnos + " turnos disponibles para este día.")
        return cantidadTurnos
    }
    else {
        alert("No quedan turnos disponibles para ese día.")
        turnoSacado = false
    }
}

const diasDisponibles = [4,7,6,0,2]

/*class turnoDos{
    constructor(){}
}*/

class turno{
    constructor(nombre, apellido, correo, telefono, dia){
    this.nombre = nombre
    this.apellido = apellido
    this.correo = correo
    this.telefono = telefono
    this.dia = dia
    }
}


alert("Bienvenidx al sistema de turnos")
do{

    do{
        turnoSacado = true
        //datosTurno = new turnoDos()
        datosTurno = new turno()
        for (let i = 0; i < 5; i++){
            switch (i) {
                case 0:
                    datosTurno.nombre = prompt("Ingrese su nombre")
                    break
                case 1:
                    datosTurno.apellido = prompt("Ingrese su apellido")
                    break
                case 2: 
                    datosTurno.correo = prompt("Ingrese su correo")
                    break
                case 3:
                    datosTurno.telefono = prompt("Ingrese su número de teléfono")
                    break
                case 4: 
                    datosTurno.dia = prompt("Ingrese el día que desea su turno (lunes a viernes)")

                    switch (datosTurno.dia) {
                        case "lunes":
                            diasDisponibles[0] = sacarTurno(diasDisponibles[0])
                            break
                        case "martes":
                            diasDisponibles[1] = sacarTurno(diasDisponibles[1])
                            break
                        case "miercoles":
                            diasDisponibles[2] = sacarTurno(diasDisponibles[2])
                            break
                        case "jueves":
                            diasDisponibles[3] = sacarTurno(diasDisponibles[3])
                            break
                        case "viernes":
                            diasDisponibles[4] = sacarTurno(diasDisponibles[4])
                            break
                        default:
                            alert("No es un día de la semana.")
                            turnoSacado = false
                            break
                    }      
                    break
            }
        }  
        if (turnoSacado == true) {
            respDos = prompt("Usted solicitó un turno a nombre de " + datosTurno.nombre + " " + datosTurno.apellido + " teléfono " + datosTurno.telefono + " correo " + datosTurno.correo + " para el día " + datosTurno.dia + ". Ingrese 'y' para confirmar sus datos o 'n' para volver a comenzar.")
            if (respDos == "y") {
            arrayTurnos.push(datosTurno)
            }
        }
        else {
            respDos = "n"
        }
    } while(respDos == "n")
    
    respDos = "n"
    respUno = prompt("¿Desea solicitar otro turno? Ingrese 'y' para confirmar o 'n' para finalizar.")   
} while(respUno == "y")
alert("Se sacaron " + arrayTurnos.length + " turnos.")
alert("Gracias por utilizar nuestro sistema :)")