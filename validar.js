function validarFormulario() {
    var nome = document.forms["formulario"]["nome"].value;
    var email = document.forms["formulario"]["email"].value;
    var senha = document.forms["formulario"]["senha"].value;
    
    if (nome === "") {
        alert("O nome deve ser preenchido.");
        return false;
    }
    
    if (email === "") {
        alert("O e-mail deve ser preenchido.");
        return false;
    }
    
    if (senha === "") {
        alert("A senha deve ser preenchida.");
        return false;
    }
}