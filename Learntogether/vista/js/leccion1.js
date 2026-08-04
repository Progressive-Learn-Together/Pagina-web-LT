document
.getElementById("calificar")
.addEventListener("click",()=>{

const aciertosAudio =
calificarAudio();

const aciertosImagenes =
calificarImagenes();

const totalAciertos =
aciertosAudio + aciertosImagenes;

const totalPreguntas =
ejerciciosAudio.length +
ejerciciosImagenes.length;

const porcentaje =
Math.round(
(totalAciertos/totalPreguntas)*100
);

document.getElementById("resultado")
.innerHTML = `
🏆 Obtuviste ${totalAciertos}
de ${totalPreguntas}
(${porcentaje}%)
`;

});

document
.getElementById("reiniciar")
.addEventListener("click",()=>{

reiniciarAudio();
reiniciarImagenes();

document.getElementById("resultado")
.innerHTML = "";

});