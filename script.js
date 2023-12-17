const hora = document.getElementById('horas');
const minuto = document.getElementById('minutos');
const segundo = document.getElementById('segundos');
const mostrarData = document.getElementById('mostra-data');

const resultado = setInterval(() =>{
    const relogio = new Date();
    const h = relogio.getHours();
    const m = relogio.getMinutes();
    const s = relogio.getSeconds();


    hora.textContent = h;
    minuto.textContent = m;
    segundo.textContent = s;

  
     if (h < 10){
        hora.textContent = '0' + h;
     }
     if (m < 10){
        minuto.textContent = '0' + m;
     } 
     if (s < 10){
        segundo.textContent = '0' + s;
     }
     

});


const resultadodata = new Date();
const data = resultadodata.toLocaleDateString();
mostrarData.textContent = data;


