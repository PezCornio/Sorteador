let conteo = [];


 const btn = document.querySelector("[data-btn-agregar]");
 const boton = document.querySelector("[data-btn-ingresar]");
 const btnSortear = document.querySelector("[data-sortear]");
 
 // crea leyenda para el ganador con el nombre del organizador
 const createGanador = (evento) => {
    evento.preventDefault();
    const inputDatos = document.querySelector("[data-organizador");
    const valueDatos = inputDatos.value;
    inputDatos.value = "";
    const anuncio = document.querySelector("[data-caja-ganador]");
    const ganador = document.createElement("div");
    ganador.classList.add("creado");
    const contenidoDatos = `<span>
    <h1 class="animate__animated animate__backInLeft" >El ganador/a del sorteo de<span class="organizador"> ${valueDatos} </span>es...</h1>
    </span>
`;
ganador.innerHTML = contenidoDatos;
anuncio.appendChild(ganador);



 }
// crea participante en la lista
const createLi = (evento) => {
    
    evento.preventDefault();
    const input = document.querySelector("[data-input]");
    const value = input.value;
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

    
   
    /*const nroParticipantes = conteo.length;
    const contenidoContador = `<div><P class="cantidad" >Cantidad de participantes:<span class="contador">${nroParticipantes}</span> </P></div>`;
    console.log(contenidoContador);

    function crearContador() {
        const cajaContador = querySelector("[data-conteo]");
        const parraContador = document.createElement("div");
        parraContador.innerHTML = contenidoContador;
        cajaContador.appendChild(parraContador);
    }*/
};

//crea nombre del ganador
const createNombre = (evento) => {
evento.preventDefault();
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


//eventos
 btn.addEventListener("click", createLi);
 boton.addEventListener("click", createGanador);
 btnSortear.addEventListener("click", (createNombre));

 console.log(contador);