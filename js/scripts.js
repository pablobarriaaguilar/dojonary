function cambiarLogin(element) {
    // podemos incluir más código aquí si queremos

    var estado = element.innerText;
    if(estado == "Login"){
        element.innerText = "Logout";
    }else{
        element.innerText = "Login";
    }
    
}

function esconderElemento(element){
    element.remove();
}


function likes(element){
    
}