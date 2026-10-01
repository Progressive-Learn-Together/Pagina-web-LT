const ejerciciosAudio = [

{
audio:"audios/a.mp3",
respuesta:"a"
},

{
audio:"audios/e.mp3",
respuesta:"e"
},

{
audio:"audios/i.mp3",
respuesta:"i"
},

{
audio:"audios/o.mp3",
respuesta:"o"
},

{
audio:"audios/u.mp3",
respuesta:"u"
}

];

const contenedorAudio =
document.getElementById("actividad1");

const respuestasAudio = [];

ejerciciosAudio.forEach((ejercicio,index)=>{

const fila = document.createElement("div");

fila.classList.add("fila");

fila.innerHTML = `

<button class="audio-btn">
<i class="fa-solid fa-play"></i>
</button>

<div class="opciones">

<button class="opcion">a</button>
<button class="opcion">e</button>
<button class="opcion">i</button>
<button class="opcion">o</button>
<button class="opcion">u</button>

</div>

`;

contenedorAudio.appendChild(fila);

fila.querySelector(".audio-btn")
.addEventListener("click",()=>{

new Audio(ejercicio.audio).play();

});

const opciones =
fila.querySelectorAll(".opcion");

opciones.forEach(opcion=>{

opcion.addEventListener("click",()=>{

opciones.forEach(o=>
o.classList.remove("seleccionada"));

opcion.classList.add("seleccionada");

respuestasAudio[index] =
opcion.textContent;

});

});

});

let intentosAudio = 2;

document.getElementById("calificar1")
.addEventListener("click",()=>{

    if(respuestasAudio.length < 5){

document.getElementById("resultado1")
.innerHTML =
"⚠️ Debes responder todos los audios.";

return;

}
let aciertos = 0;

document.querySelectorAll("#actividad1 .fila")
.forEach((fila,index)=>{

const correcta =
ejerciciosAudio[index].respuesta;

const opciones =
fila.querySelectorAll(".opcion");

opciones.forEach(opcion=>{

opcion.classList.remove(
"correcta",
"incorrecta"
);

if(opcion.textContent === correcta){

opcion.classList.add("correcta");

}

if(
opcion.textContent === respuestasAudio[index]
&& opcion.textContent !== correcta
){

opcion.classList.add("incorrecta");

}

});

if(respuestasAudio[index] === correcta){

aciertos++;

}

});

document.getElementById("resultado1")
.innerHTML =
`🎉 ${aciertos}/5 correctas`;

});

document.getElementById("reiniciar1")
.addEventListener("click",()=>{

intentosAudio--;

if(intentosAudio <= 0){

document.getElementById("intentos1")
.innerHTML = "";

document.getElementById("resultado1")
.innerHTML =
"⚠️ Ya no tienes más intentos";

document.getElementById("calificar1")
.disabled = true;

document.getElementById("reiniciar1")
.disabled = true;

return;

}

document.getElementById("intentos1")
.innerHTML =
`Intentos restantes: ${intentosAudio}`;

document.querySelectorAll(
"#actividad1 .opcion"
).forEach(opcion=>{

opcion.classList.remove(
"seleccionada",
"correcta",
"incorrecta"
);

});

respuestasAudio.length = 0;

document.getElementById("resultado1")
.innerHTML = "";

});