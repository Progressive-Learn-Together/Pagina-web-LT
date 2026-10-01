const respuestas3 =
document.querySelectorAll(".respuesta3");

let intentos3 = 2;

document.getElementById("calificar3")
.addEventListener("click",()=>{

const respuestas3 =
document.querySelectorAll(".respuesta3");

let completas = true;

respuestas3.forEach(input=>{

    if(input.value.trim() === ""){
        completas = false;
    }

});

if(!completas){

    document.getElementById("resultado3")
    .innerHTML =
    "⚠️ Debes completar todas las respuestas antes de calificar.";

    return;

}
let aciertos = 0;

respuestas3.forEach(input=>{

input.classList.remove(
"correcta",
"incorrecta"
);

const correcta =
input.dataset.correcta;

const respuesta =
input.value.toUpperCase();

if(respuesta === correcta){

input.classList.add(
"correcta"
);

aciertos++;

}
else{

input.classList.add(
"incorrecta"
);

}

});

document.getElementById("resultado3")
.innerHTML =
`🎉 ${aciertos}/5 correctas`;

});

document.getElementById("reiniciar3")
.addEventListener("click",()=>{

intentos3--;

if(intentos3 <= 0){

document.getElementById("intentos3")
.innerHTML = "";

document.getElementById("resultado3")
.innerHTML =
"⚠️ Ya no tienes más intentos";

document.getElementById("calificar3")
.disabled = true;

document.getElementById("reiniciar3")
.disabled = true;

return;

}

document.getElementById("intentos3")
.innerHTML =
`Intentos restantes: ${intentos3}`;

respuestas3.forEach(input=>{

input.value = "";

input.classList.remove(
"correcta",
"incorrecta"
);

});

document.getElementById("resultado3")
.innerHTML = "";

});