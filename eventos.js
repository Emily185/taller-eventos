
document.getElementById('miBoton').addEventListener('click', function(event) {
    event.stopPropagation();  // Detiene la propagación del evento al div contenedor
    alert('¡Hola!');
});


document.getElementById('miDiv').addEventListener('click', function() {
    alert('Hola! Soy el div');
});
