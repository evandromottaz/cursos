import Countdown from "./countdown.js";
const diasParaCasamento = new Countdown('16 July 2021 23:59:59 GMT-0300')
const mostrarTela = document.querySelector('p')


setInterval(
     function(){
        mostrarTela.innerHTML = 
            'Faltam <br>' + 
            diasParaCasamento.total.days + ' dias - ' + 
            diasParaCasamento.total.hours + ' horas - ' + 
            diasParaCasamento.total.minutes + ' minutos - ' +
            diasParaCasamento.total.seconds + ' segundos<br> para o dia do casamento'
    }
,1000)