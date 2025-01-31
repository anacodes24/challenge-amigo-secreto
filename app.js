// Crear un array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    
    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Actualizar el array
        amigos.push(nombre);
        actualizarListaAmigos();
        // Limpiar el campo de entrada
        input.value = "";
    }
    return;
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        let li = document.createElement('li');
        li.textContent = amigos[i];

        // Agregar el elemento a la lista
        lista.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
     
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado} ha sido sorteado como el amigo secreto.</li>`;
    return;
}

// Añadir evento keyup al campo de entrada
document.getElementById('amigo').addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.querySelector('.button-add').click();        
    }
});