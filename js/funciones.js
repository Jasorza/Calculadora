//** Objetos para definir las propiedades de la calculadora */
var proCal = {
    teclado: document.querySelectorAll('#calculadora ul li'),
    accion: null
}
//** Objetos para definir todos los metodos que vamos a definiren la calculadora */
var metCal = {
    inicio: function () {
        console.log(proCal.teclado);
        proCal.teclado.forEach(element => {
            element.addEventListener('click', metCal.oprimirTecla);
        })
    },
    oprimirTecla: function (tecla) {
        console.log(tecla);
        proCal.accion = tecla.target.getAttribute('class');
        console.log(proCal.accion);
    },
    calculadora: function (accion) {
        switch (accion) {
            case 'numero':
                console.log(accion);
                break;
            case 'signo':
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
    }
}
metCal.inicio();