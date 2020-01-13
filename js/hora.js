const $Dia = document.getElementById('Dia')
const $Hora = document.getElementById('Hora')
const $Mes = document.getElementById('Mes')
// alert(`${dates.getHours()} : ${dates.getMinutes()} : ${dates.getSeconds()}`)
let dates = new Date();
let $mes =  dates.getMonth()
// alert($mes)
setInterval(() => {
    let hora = new Date()
    $Hora.textContent=`${hora.getHours()}:${hora.getMinutes()}`
}, 1000);

switch (dates.getDay()) {
    case 1:
        $Dia.textContent =`Lunes ${dates.getDate()}`
        break;
    case 2:
        $Dia.textContent=`Martes ${dates.getDate()}`
        break;
    case 3:
        $Dia.textContent=`Miercoles ${dates.getDate()}`
        break;
    case 4:
        $Dia.textContent=`Jueves ${dates.getDate()}`
        break;
    case 5:
        $Dia.textContent=`Viernes ${dates.getDate()}`
        break;
    case 6:
        $Dia.textContent=`Sabado ${dates.getDate()}`
        break;
    case 0:
        $Dia.textContent=`Domingo ${dates.getDate()}`
        break;
    default:
        break;
}

switch ($mes) {
    case 0:
        $Mes.textContent='de Enero'
        break;
    case 1:
        $Mes.textContent='de Febrero'
        break;
    case 2:
        $Mes.textContent='de Marzo'
        break;
    case 3:
        $Mes.textContent='de Abril'
        break;
    case 4:
        $Mes.textContent='de Mayo'
        break;
    case 5:
        $Mes.textContent='de Junio'
        break;
    case 6:
        $Mes.textContent='de Julio'
        break;
    case 7:
        $Mes.textContent='de Agosto'
        break;
    case 8:
        $Mes.textContent='de Septiembre'
        break;
    case 9:
        $Mes.textContent='de Octubre'
        break;
    case 10:
        $Mes.textContent='de Noviembre'
        break;
    case 11:
        $Mes.textContent='de Diciembre'
        break;

    default:
        break;
}