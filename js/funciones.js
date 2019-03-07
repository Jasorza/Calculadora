//** Objetos para definir las propiedades de la calculadora */
var proCal = {
    teclado: document.querySelectorAll('#calculadora ul li'),
    accion: null,
    operaciones: document.querySelector('#calculadora'),
    digito: 0,
    cantSigno: 0
}
//** Objetos para definir todos los metodos que vamos a definiren la calculadora */
var metCal = {
    inicio: function () {
        /*console.log(proCal.teclado);*/
        proCal.teclado.forEach(element => {
            element.addEventListener('click', metCal.oprimirTecla);
        })
    },
    oprimirTecla: function (tecla) {
        /*console.log(tecla);*/
        proCal.accion = tecla.target.getAttribute('class');
        /*console.log(proCal.accion);*/
        proCal.digito = tecla.target.innerHTML;
        console.log(proCal.digito);
        metCal.calculadora(proCal.accion, proCal.digito);
    },
    calculadora: function (accion, digito) {
        switch (accion) {
            case 'numero':
                proCal.cantSigno=0;
                console.log(proCal.cantSigno);
                if (proCal.operaciones.innerHTML == 0) {
                    proCal.operaciones.innerHTML = digito;
                } else {
                    proCal.operaciones.innerHTML += digito;
                }
                proCal.operaciones.innerHTML += digito;
                break;
            case 'signo':
                proCal.cantSigno++;
                console.log(proCal.cantSigno);
                if (proCal.cantSigno == 1) {
                    proCal.operaciones.innerHTML += digito;
                }
                proCal.operaciones.innerHTML = digito;
                console.log(accion);
                break;
            case 'decimal':
                console.log(accion);
                break;
            case 'igual':
                console.log(accion);
                break;
            case 'igual':
                console.log(accion);
                break;
            default:
                break;
        }
    },
    borrar: function () {
        proCal.operaciones.innerHTML = 0;
    }
}
metCal.inicio();