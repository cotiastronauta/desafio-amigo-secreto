let amigos = [];
let numeroAmigos = 0;

//capturar el valor del campo de entrada

function agregarAmigo() {
    let amigosIngresados = document.getElementById("amigo").value;
    if (amigosIngresados == '') {
        alert('Por favor, ingresa un nombre para el sorteo')
    } else {
        amigos.push(amigosIngresados);
    }
    actualizarLista();
    limpiarCampoDeEntrada();
}

// función que rrecorre amigos y crea una lista con los nombres en el dom

function actualizarLista() {
   let listaNombres = document.getElementById('listaAmigos');
   listaNombres.innerHTML = ''; // borra lista antigua

   for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');    
        li.textContent = amigos[i]; 
        listaNombres.appendChild(li);
   }
}

function sortearAmigo() {
        if(amigos.length === 0) {
        return alert('No has ingresado amigos para el sorteo')
    } else {
        let j = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[j];
        asignarTextoElemento('resultado', `Tu amigo secreto es ${amigoSeleccionado}`);
    }  
}

function limpiarCampoDeEntrada() {
    document.querySelector('#amigo').value = '';
}

function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return;
}

