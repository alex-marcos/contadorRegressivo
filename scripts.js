import countdown from "./countdown.js";

const tempoParaOLançamento = new countdown("21 August 2022 23:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");


function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaOLançamento.total[index];
    });
    
}

mostrarTempo();
setInterval(mostrarTempo, 1000);
