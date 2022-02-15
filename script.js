let nombre;
let apellido;
let telefono;
let correo;
let turno;
let turnoLun = 4;
let turnoMar = 7;
let turnoMie = 6;
let turnoJue = 0;
let turnoVie = 2;
let turnoSacado;
let respUno = "y";
let respDos = "n";

alert("Bienvenidx al sistema de turnos")

while(respUno == "y"){

    while(respDos == "n"){
        turnoSacado = true
        for (let i = 0; i < 5; i++){
            switch (i) {
                case 0:
                    nombre = prompt("Ingrese su nombre");
                    break;
                case 1:
                    apellido = prompt("Ingrese su apellido");
                    break;
                case 2: 
                    correo = prompt("Ingrese su correo");
                    break;
                case 3:
                    telefono = prompt("Ingrese su número de teléfono");
                    break;
                case 4: 
                    turno = prompt("Ingrese el día que desea su turno (lunes a viernes)");

                    switch (turno) {
                        case "lunes":
                            if (turnoLun > 0){
                                turnoLun = turnoLun - 1;
                                alert("Quedan " + turnoLun + " turnos disponibles para este día.")
                            }
                            else {
                                alert("No quedan turnos disponibles para ese día")
                                turnoSacado = false
                            }
                            break;
                        case "martes":
                            if (turnoMar > 0){
                                turnoMar = turnoMar - 1;
                                alert("Quedan " + turnoMar + " turnos disponibles para este día.")
                            }
                            else {
                                alert("No quedan turnos disponibles para ese día")
                                turnoSacado = false
                            }
                            break;
                        case "miercoles":
                            if (turnoMie > 0){
                                turnoMie = turnoMie - 1;
                                alert("Quedan " + turnoMie + " turnos disponibles para este día.")
                            }
                            else {
                                alert("No quedan turnos disponibles para ese día")
                                turnoSacado = false
                            }
                            break;
                        case "jueves":
                            if (turnoJue > 0){
                                turnoJue = turnoJue - 1;
                                alert("Quedan " + turnoJue + " turnos disponibles para este día.")
                            }
                            else {
                                alert("No quedan turnos disponibles para ese día")
                                turnoSacado = false
                            }
                            break;
                        case "viernes":
                            if (turnoVie > 0){
                                turnoVie = turnoVie - 1;
                                alert("Quedan " + turnoVie + " turnos disponibles para este día.")
                            }
                            else {
                                alert("No quedan turnos disponibles para ese día")
                                turnoSacado = false
                            }
                            break;
                        default:
                            alert("No es un día de la semana.")
                            turnoSacado = false
                            break;
                    }
                   
                    break;
            }

        }
        
        if (turnoSacado == true) {
        respDos = prompt("Usted solicitó un turno a nombre de " + nombre + " " + apellido + " teléfono " + telefono + " correo " + correo + " para el día " + turno + ". Ingrese 'y' para confirmar sus datos o 'n' para volver a comenzar.");
    
        }
        else {
            
            respDos = "n"
        }

    }
    respDos = "n"
    respUno = prompt("¿Desea solicitar otro turno? Ingrese 'y' para confirmar o 'n' para finalizar.")
    
}

alert("Gracias por utilizar nuestro sistema :)")