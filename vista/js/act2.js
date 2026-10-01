const letras =
document.querySelectorAll(".letra");

const espacios =
document.querySelectorAll(".espacio");

let letraArrastrada = null;

let intentosImagenes = 2;

letras.forEach(letra=>{

    letra.addEventListener("dragstart",()=>{

        letraArrastrada =
        letra.textContent;

    });

});

espacios.forEach(espacio=>{

    espacio.addEventListener("dragover",(e)=>{

        e.preventDefault();

    });

    espacio.addEventListener("drop",(e)=>{

        e.preventDefault();

        const yaExiste =
[...espacios].some(e =>
e.textContent === letraArrastrada
);

if(!yaExiste){

    espacio.textContent =
    letraArrastrada;

}

    });

});

document.getElementById("calificar2")
.addEventListener("click",()=>{

    let completas = true;

espacios.forEach(espacio=>{

    if(espacio.textContent === ""){
        completas = false;
    }

});

if(!completas){

document.getElementById("resultado2")
.innerHTML =
"⚠️ Debes relacionar todas las imágenes.";

return;

}
let aciertos = 0;

espacios.forEach(espacio=>{

espacio.classList.remove(
"correcta",
"incorrecta"
);

if(
espacio.textContent
=== espacio.dataset.correcta
){

espacio.classList.add(
"correcta"
);

aciertos++;

}
else{

espacio.classList.add(
"incorrecta"
);

}

});

document.getElementById("resultado2")
.innerHTML =
`🎉 ${aciertos}/5 correctas`;

});

document.getElementById("reiniciar2")
.addEventListener("click",()=>{

intentosImagenes--;

if(intentosImagenes <= 0){

document.getElementById("intentos2")
.innerHTML = "";

document.getElementById("resultado2")
.innerHTML =
"⚠️ Ya no tienes más intentos";

document.getElementById("calificar2")
.disabled = true;

document.getElementById("reiniciar2")
.disabled = true;

return;

}

document.getElementById("intentos2")
.innerHTML =
`Intentos restantes: ${intentosImagenes}`;

espacios.forEach(espacio=>{

espacio.textContent = "";

espacio.classList.remove(
"correcta",
"incorrecta"
);

});

document.getElementById("resultado2")
.innerHTML = "";

});