// Inicializar el carrusel Splide
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#splide', {
        type       : 'fade',         // Modo de transición
        heightRatio: 0.5,            // Ajusta la altura según tu necesidad
        pagination: false,           // Desactiva la paginación si no la necesitas
        arrows    : false,           // Desactiva las flechas de navegación
        autoplay : true,             // Hacer que las imágenes pasen automáticamente
        interval : 3000,             // Intervalo de cambio de imagen (3 segundos)
    }).mount();

    // Función para seleccionar aleatoriamente una imagen
    function seleccionarAleatorio() {
        const slides = document.querySelectorAll('.splide__slide');
        const indiceAleatorio = Math.floor(Math.random() * slides.length);
        splide.go(indiceAleatorio);  // Cambia al índice aleatorio seleccionado
    }

    // Llamada inicial para mostrar una imagen aleatoria
    seleccionarAleatorio();

    // Si quieres cambiar la imagen aleatoriamente cada cierto tiempo:
    setInterval(seleccionarAleatorio, 5000);  // Cambia cada 5 segundos (ajustable)
});
