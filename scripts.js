let conteo = [];


 const btn = document.querySelector("[data-btn-agregar]");
 const boton = document.querySelector("[data-btn-ingresar]");
 const btnSortear = document.querySelector("[data-sortear]");
 
 // crea leyenda para el ganador con el nombre del organizador
 const createGanador = (evento) => {
    evento.preventDefault();
    const inputDatos = document.querySelector("[data-organizador");
    const valueDatos = inputDatos.value;
    if (valueDatos == "") {
      alert("El nombre no puede estar vacío.")
      return false}
      else {
    inputDatos.disabled= true;
    const anuncio = document.querySelector("[data-caja-ganador]");
    const ganador = document.createElement("div");
    ganador.classList.add("creado");
    const contenidoDatos = `<span>
    <h1 class="animate__animated animate__backInLeft" >El ganador/a del sorteo de<span class="organizador"> ${valueDatos} </span>es...</h1>
    </span>
`;
ganador.innerHTML = contenidoDatos;
anuncio.appendChild(ganador);

};

 }
// crea participante en la lista
const createLi = (evento) => {

    
    evento.preventDefault();
    
    const input = document.querySelector("[data-input]");
    const value = input.value;
    const inputDatos = document.querySelector("[data-organizador");
    const valueDatos = inputDatos.value;
    if (valueDatos == "") {
      alert("Para ingresar un participante, primero debes indicar el nombre del organizador.")
      return false}
      else {
    if (value =="") {
      alert("Por favor, ingresa un nombre válido.")
      return false
    } 
    else {
    const list = document.querySelector("[data-lista]");
    const participante = document.createElement("li");
    participante.classList.add("nuevoParticpante");
      input.value = "";
    const content = `<div>
    <span class="caja-participante">${value}</span>
</div>
<i class="fa fa-trash"></i>`;
    participante.innerHTML = content;
    list.appendChild(participante);

    //contador de participantes
    const contador = conteo.push(value);

    };
  };
};

//crea nombre del ganador
const createNombre = (evento) => {
//evento.preventDefault();
const rand = Math.floor(Math.random()*conteo.length);
const nombre = conteo[rand];
const cajaGanador = document.querySelector("[data-nombre]");
const nombreGanador = document.createElement("div");
nombreGanador.classList.add("nombreGanador");
const contenidoGanador = `<span><h1 class="winner animate__animated animate__zoomIn">${nombre}</h1></span>`;
nombreGanador.innerHTML = contenidoGanador;
cajaGanador.appendChild(nombreGanador);


console.log(conteo.length);


}



 /*
const crearContador = function () {
    
const parraContador = document.createElement("div");
parraContador.classList.add("cajaContenido");
const nroParticipantes = conteo.length;
const contenidoContador = `<div><P class="cantidad" >Cantidad de participantes:<span class="contador">${nroParticipantes}</span> </P></div>`;
parraContador.innerHTML = contenidoContador;
cajaContador.appendChild(parraContador);
console.log(contenidoContador);
console.log(nroParticipantes);
};
*/

const nroParticipantes = conteo.length;
const contador = `<p class="parrafoCantidad">Cantidad de participantes: <span id="total"> ${conteo.length}
</span></p>`;
document.getElementById("contador").innerHTML = contador;


//Modal Info
    
const modalInfo = document.querySelector("[data-modal-info]");
const btnModalInfo = document.querySelector("[data-btn-info]");
const spanInfo = document.getElementsByClassName("close")[0];
btnModalInfo.onclick = function() { 
     modalInfo.style.display = "block";
     
}

spanInfo.onclick = function() {
    modalInfo.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modalInfo) {
      modalInfo.style.display = "none";
    }
}

//Modal Contacto

const modalContacto = document.querySelector("[data-modal-contacto]");
const btnModalContacto = document.querySelector("[data-btn-contacto]");
const spanContacto = document.getElementsByClassName("close_contacto")[0];
btnModalContacto.onclick = function() { 
     modalContacto.style.display = "block";
     
}

spanContacto.onclick = function() {
    modalContacto.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modalContacto) {
      modalContacto.style.display = "none";
    }
}


//eventos
 btn.addEventListener("click", createLi);
 boton.addEventListener("click", createGanador);
 btnSortear.addEventListener("click", function() {setTimeout(createNombre, 3000);});

 console.log(contador);