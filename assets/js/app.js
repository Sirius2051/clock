var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');



function actualizarTiempo() {
    var tiempo = new Date();
    horas.innerText = tiempo.getHours();
    minutos.innerText = tiempo.getMinutes();
    segundos.innerText = tiempo.getSeconds();
}

setInterval(actualizarTiempo, 1000);