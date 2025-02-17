/* "use strict";

let amigos = [];
let numeroAmigos = 0;
let lista = 

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

// función que recorre amigos y crea una lista con los nombres en el dom

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

*/

let listaAmigos = [];
console.log(listaAmigos);
let lista = document.getElementById("listaAmigos");

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        
    } else {
        listaAmigos.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        actualizarLista()
    };

    console.log(listaAmigos);

    return;
};

function actualizarLista() {
    lista.innerHTML = ""; 

    let inicioLista = 0;
    let finalLista = listaAmigos.length -1;

    while (inicioLista <= finalLista) {
        let listaNombre = document.createElement("li");
        listaNombre.textContent = listaAmigos[inicioLista];
        lista.appendChild(listaNombre);
        inicioLista++;
    };

    return;
};

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay ningún nombre disponible.")
    } else {
        let indiceSorteado = Math.floor(Math.random() * (listaAmigos.length));
        let nombreSorteado = listaAmigos[indiceSorteado];
        let nombreMostrado = document.getElementById("resultado");
        nombreMostrado.innerHTML = nombreSorteado;

        lista.innerHTML = ""; 
    };

    return;
};

