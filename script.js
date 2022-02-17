let turnoLun = 4
let turnoMar = 7
let turnoMie = 6
let turnoJue = 0
let turnoVie = 2
//la idea para estas primeras variables es que conformen el objeto 'dias' cuando lo incorpore//
let respUno = "y"
let respDos = "n"
let turnoSacado 
const sacarTurno = function(a) {
    if (a > 0){
        a = a - 1
        alert("Quedan " + a + " turnos disponibles para este día.")
        return a
    }
    else {
        alert("No quedan turnos disponibles para ese día.")
        turnoSacado = false
    }
}

alert("Bienvenidx al sistema de turnos")
while(respUno == "y"){

    while(respDos == "n"){
        turnoSacado = true
        let nombre
        let apellido
        let correo
        let telefono
        let turno
        //la idea para este grupo de variables es que conformen el objeto 'turno' cuando lo incorpore//
        for (let i = 0; i < 5; i++){
            switch (i) {
                case 0:
                    nombre = prompt("Ingrese su nombre")
                    break
                case 1:
                    apellido = prompt("Ingrese su apellido")
                    break
                case 2: 
                    correo = prompt("Ingrese su correo")
                    break
                case 3:
                    telefono = prompt("Ingrese su número de teléfono")
                    break
                case 4: 
                    turno = prompt("Ingrese el día que desea su turno (lunes a viernes)")

                    switch (turno) {
                        case "lunes":
                            turnoLun = sacarTurno(turnoLun)
                            break
                        case "martes":
                            turnoMar = sacarTurno(turnoMar)
                            break
                        case "miercoles":
                            turnoMie = sacarTurno(turnoMie)
                            break
                        case "jueves":
                            turnoJue = sacarTurno(turnoJue)
                            break
                        case "viernes":
                            turnoVie = sacarTurno(turnoVie)
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
            respDos = prompt("Usted solicitó un turno a nombre de " + nombre + " " + apellido + " teléfono " + telefono + " correo " + correo + " para el día " + turno + ". Ingrese 'y' para confirmar sus datos o 'n' para volver a comenzar.")  
        }
        else {
            respDos = "n"
        }
    }
    respDos = "n"
    respUno = prompt("¿Desea solicitar otro turno? Ingrese 'y' para confirmar o 'n' para finalizar.")   
}
alert("Gracias por utilizar nuestro sistema :)")