function sendwpp() {
    
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let interest = document.getElementById("interest").value;

    //Coloca o numero aqui na VAR
    let url = "https://wa.me/+5571993136686?text=" 
    + "Nome: " + name + "%0a"
    + "Telefone:" + phone + "%0a"
    + "curso de Interesse: " + interest;

    window.open(url, '_blank').focus();
}

// function returnsite() {
    
//     var url = "./index.html"

//     window.open(url, '_blank').focus();

// }