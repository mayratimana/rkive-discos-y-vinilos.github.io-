$(document).ready(function(){

    // Mostrar el botón como escondido
    $("#btn").hide();

    // Usar keyup event en campo de user
    $("#user").keyup(function() {
        if(validateUser()) {
            // Si el e-mail es válido, se mostrará un borde verde
            $("#user").css("border","2px solid green");
            // Mensaje
            $("#userMsg").html("<p class='text-success'>Usuario accesible</p>");
        } else {
            // Si el email no es válido, se mostrará un borde rojo
            $("#user").css("border","2px solid red");
            //Mensaje
            $("#userMsg").html("<p class='text-danger'>El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>");
        }
        buttonState();  
    })

    // Usar keyup event en campo de e-mail
    $("#email").keyup(function(){
        if(validateEmail()){
            // Si el e-mail es válido, se mostrará un borde verde
            $("#email").css("border","2px solid green");
            // Mensaje
            $("#emailMsg").html("<p class='text-success'>Correo electróncio válido</p>");
        }else{
            // Si el email no es válido, se mostrará un borde rojo
            $("#email").css("border","2px solid red");
            //Mensaje
            $("#emailMsg").html("<p class='text-danger'>El correo electrónico ingresado es inválido.</p>");
        }
        buttonState(); 
    });

    // Usar keyup event en campo contraseña
    $("#pass").keyup(function(){
        // Validamos si:
        if(validatePassword()){
            // Contraseña correcta: borde verde
            $("#pass").css("border","2px solid green");
            // Mensaje
            $("#passMsg").html("<p class='text-success'>Contraseña válida</p>");
        }else{
            // Contraseña incorrecta: borde rojo
            $("#pass").css("border","2px solid red");
            // Mensaje
            $("#passMsg").html("<p class='text-danger'>La contraseña debe de tener como mínimo 8 carácteres</p>");
        }
        buttonState();
    });

    // Usar keyup event en campo confirmar contraseña
    $("#pass2").keyup(function(){
        if(validatePassword2()==validatePassword()) {
            // Contraseña correcta: borde verde
            $("#pass2").css("border","2px solid green");
            // Mensaje
            $("#passMsg2").html("<p class='text-success'>Las contraseñas coinciden</p>");
        } else {
            // Contraseña incorrecta: borde rojo
            $("#pass2").css("border","2px solid red");
            // Mensaje
            $("#passMsg2").html("<p class='text-danger'>Las contraseñas no coinciden</p>");
        }
        buttonState();
});

function buttonState(){
    if(validateUser() && validateEmail() && validatePassword() && validatePassword2()){
        // Si el user, e-mail, contraseña y confirmar contraseña son válidos, 
        // el botón crear cuenta será visible
        $("#btn").show();
    }else{
        // Si el user, e-mail, contraseña y confirmar contraseña son inválidos, el botón crear cuenta 
        // seguirá sin mostrarse
        $("#btn").hide();
    } 
} 

$(document).ready(function() {
    $('#btn').click(function() {
      alert('Usted se ha registrado correctamente.');
    });
  });

function validateUser() {
    // Valor de user
    var user=$("#user").val();
    // Expresiones válidas en user
    var reg2 = /^[a-zA-Z0-9\_]{4,16}$/
    if(reg2.test(user)) {
        return true
    } else{
        return false
    }
}
function validateEmail(){
    // Valor de e-mail
    var email=$("#email").val();
    // Expresiones válidas en e-mail
     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
     if(reg.test(email)){
         return true;
     }else{
         return false;
     }

}
function validatePassword(){
    // Valor de contraseña
    var pass=$("#pass").val();
    // Validar cantidad de carácteres
    if(pass.length > 7){
        return true;
    }else{
        return false;
    }

}

function validatePassword2(){
    // Valor de contraseña
    var pass2=$("#pass2").val();
    // Validar cantidad de carácteres
    if(pass=$("#pass").val()== pass2) {
        return true;
    } else {
        false;
    }

}})
