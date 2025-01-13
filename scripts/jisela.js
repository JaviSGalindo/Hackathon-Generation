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
