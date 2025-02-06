let amigos = [];

function agregarAmigo() {
    let amigosIngresados = document.getElementById("amigo");
    if (amigosIngresados === '') {
        alert('Por favor, ingresa un nombre para el sorteo')
    } else {
        amigos.push(amigosIngresados);
    }
}



function sortearAmigo() {

}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);