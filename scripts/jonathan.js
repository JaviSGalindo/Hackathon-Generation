// Obtener elementos
const carIcon = document.querySelector('.navbar .nav-item .material-icons');
const popupContainer = document.getElementById('car-popup');
const closePopupButton = document.getElementById('close-popup');

// Abrir el popup cuando se hace clic en el carrito
carIcon.addEventListener('click', function (e) {
    e.preventDefault(); // Prevenir la acción por defecto del enlace
    popupContainer.style.display = 'flex'; // Mostrar el popup
});

// Cerrar el popup cuando se hace clic en el botón de cierre
closePopupButton.addEventListener('click', function () {
    popupContainer.style.display = 'none'; // Ocultar el popup
});

// Cerrar el popup si se hace clic fuera del contenido del popup
window.addEventListener('click', function (e) {
    if (e.target === popupContainer) {
        popupContainer.style.display = 'none'; // Ocultar el popup
    }
});

// Descripciones para cada tarjeta
const descriptions = [
    "Jonathan Garzón: Desarrollador frontend con experiencia en React y diseño UI.",
    "Jisela Castillo: Especialista en diseño gráfico y branding creativo.",
    "Natalia Berrio: Ingeniera de software con pasión por la inteligencia artificial.",
    "Javier Galindo: Desarrollador backend experto en Node.js y bases de datos."
];
// Selecciona todas las tarjetas
const boxes = document.querySelectorAll('.box');
// Recorre cada tarjeta y asigna la descripción correspondiente
boxes.forEach((box, index) => {
    // Crea un elemento para la descripción
    const description = document.createElement('div');
    description.classList.add('description');
    description.innerText = descriptions[index]; // Asigna la descripción según el índice
    // Añade la descripción a la tarjeta
    box.appendChild(description);
    // Evento para mostrar la descripción al pasar el mouse
    box.addEventListener('mouseover', () => {
        description.style.opacity = '1';
        description.style.transform = 'translateY(0)';
    });
    // Evento para ocultar la descripción al quitar el mouse
    box.addEventListener('mouseout', () => {
        description.style.opacity = '0';
        description.style.transform = 'translateY(20px)';
    });
});