function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

//La contraseña debe tener máximo 6 dígitos.
if (password1.lenght < 6) {
    showAlertError();
    return;
}

//Ambas contraseñas deben coincidir.
if (password1 !== password2){
    showAlertError();
    return;
}

