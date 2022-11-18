// Validad: Nombre
function validarNombre() {
    if (document.getElementById("nombre").value==0) {
        alert("Por favor, ingrese sus nombres y apellidos");
        return true
    } return false
}
// Validar: Email
function validarEmail() {
    if (document.getElementById("email").value==0) {
        alert("Por favor, ingrese su correo electrónico");
        return true
    } return false
}
// Validar: Mensaje
function validarMensaje() {
    if (document.getElementById("mensaje").value==0) {
        alert("Por favor, ingrese su mensaje");
        return true
    } return false
}

// Validar si se completaron los datos con éxito
function validar() {
    validarNombre();
    validarEmail();
    validarMensaje();
} 
// Confirmar envío de Datos
function enviar() {
    if (validarNombre()==false && validarEmail()==false && validarMensaje()==false) {
        alert ("Formulario y mensaje enviados con éxito. Revise su e-mail para ver la respuesta.")
    }
}

//*Validar Login

function crear() {
    if (validateUser()==false && validateEmail==false && validatePassword==false && validatePassword2==false) {
        alert ("Formulario y mensaje enviados con éxito. Revise su e-mail para ver la respuesta.")
    }
}
