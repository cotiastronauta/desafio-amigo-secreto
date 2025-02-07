let amigos = [];

//capturar el valor del campo de entrada

function agregarAmigo() {
    let amigosIngresados = document.getElementById("amigo").value;
    if (amigosIngresados == '') {
        alert('Por favor, ingresa un nombre para el sorteo')
    } else {
        amigos.push(amigosIngresados);
    }
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

}

function limpiarCampoDeEntrada() {
    document.querySelector('#amigo').value = '';
}

