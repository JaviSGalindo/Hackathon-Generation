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
