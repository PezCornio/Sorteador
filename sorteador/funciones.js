let listaParticipantes = []

function ingresar() {  //funcion click
    var x = document.getElementById("ingreso").value; //valor ingresado
    document.getElementById("lista").innerHTML = x;
    document.getElementById("ingreso").value = "";
    listaParticipantes.push(x);
    
}

function cantParticipantes() {

}




