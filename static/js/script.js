function loginUsr(){
    let usuario = document.getElementById("Userlogin").value
    let pass =document.getElementById("passwordLogin").value
    if (usuario== "" || usuario.length<8){
        alert("El usuario no puede tener menos de 8 caracteres")
    } else if (pass.length <8){
        alert("La contraseña no puede tener menos de 8 caracteres")
    } else {
        window.location.href="index.html"
    }
    console.log(usuario, pass)
}

function crearuser(){

    let user = document.getElementById("userId").value
    let correo = document.getElementById("correo").value
    let pass1 = document.getElementById("password1").value
    let pass2 = document.getElementById("password2").value

    if (user== "" ||  pass1=="" || correo== "" || pass2=="" ){
        alert("Los campos no pueden estar vacios")
    }else if (pass1 != pass2){
        alert("Las contraseñas no coinciden")
    } else if (pass1.length <8){
        alert("La contraseña no puede tener menos de 8 caracteres")
    } else if (correo.length<8){
        alert("El nombre no puede tener menos de 8 caracteres")
    } else {
    
        window.location.href="index.html"
    }

}

