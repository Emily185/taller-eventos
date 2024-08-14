document.getElementById('contenedor').addEventListener('click', function() {
    alert('Hola! Soy el div');
});
document.getElementById('miBoton').addEventListener('click', function(event) {
    event.stopPropagation();  // Detiene la propagación del evento al div contenedor
    alert('¡Botón clicado!');
});
