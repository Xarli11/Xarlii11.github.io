function Login() {
    var done = 0;
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    if (usuario == "Xarli11" && password == "Carlosgt2001") {
        window.location = "index.html";
    }
    else{
        alert("Error de usuario o contraseña")
    }
    // if (usuario == "" && password == "") {
       
    // }
} 