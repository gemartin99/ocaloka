let vidas = 3; // Inicializamos con 3 vidas

// Función para perder vida
function perderVida() {
    if (vidas > 0) {
        vidas--;
        actualizarVidas();
    }
}

// Función para actualizar las imágenes de los corazones
function actualizarVidas() {
    for (let i = 1; i <= 3; i++) {
        const corazon = document.getElementById(`vida${i}`);
        if (i <= vidas) {
            corazon.src = 'corazon_rojo.png'; // Corazón rojo (vida activa)
        } else {
            corazon.src = 'corazon_vacio.png'; // Corazón vacío (vida perdida)
        }
    }
}

// Detectar click derecho para perder vida
document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Prevenir el menú contextual
    perderVida(); // Perder vida al hacer click derecho
});
