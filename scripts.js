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
      if (conteo.some(conteo => conteo == value)) {
        alert("El participante ya fue ingresado.")
        
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
      }
    

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

const bloqueoSortear = (evento) => {
  if (nombre != ""){
    btnSortear.disable = true;
  };
};


console.log(conteo.length);


}





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

// Loader

const loader = document.querySelector("[data-loader]");


btnSortear.onclick = function loaderFun() {
  loader.style.display = "flex";
  
};








//eventos
 btn.addEventListener("click", createLi);
 boton.addEventListener("click", createGanador);
 btnSortear.addEventListener("click", function() {setTimeout(createNombre, 3000);});

 console.log(ocultarLoader);