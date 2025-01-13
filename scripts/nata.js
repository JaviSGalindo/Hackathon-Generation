//& Array de productos

const productos = [
    

// Categoría: Ropa
    { nombre: "Camiseta Deportiva", descripcion: "Camiseta ligera y transpirable.", precio: 25000, talla: "M", marca: "Nike", existencia: 50, fecha: "2024-01-10", imagen: "https://phantom-expansion.unidadeditorial.es/312e96ed283a87c0dfc82942f58f38c6/crop/14x0/1068x1198/f/jpg/assets/multimedia/imagenes/2023/03/30/16801678310246.jpg" },
    { nombre: "Pantalones Cortos", descripcion: "Pantalones cortos ideales para correr.", precio: 30000, talla: "L", marca: "Adidas", existencia: 40, fecha: "2024-01-09", imagen: "https://contents.mediadecathlon.com/p1705674/k$5227ebc24d5ca9bc5b0a44708911a9bc/sq/Pantal+n+corto+Short+deportivo+Cardio+Fitness+Domyos+100+loose+mujer+negro.jpg" },
    { nombre: "Leggings de Compresión", descripcion: "Leggings que ofrecen soporte y comodidad.", precio: 35000, talla: "XL", marca: "Under Armour", existencia: 30, fecha: "2024-01-07", imagen: "https://equiporocket.com/wp/wp-content/uploads/2023/02/Sin-titulo-1_Mesa-de-trabajo-1.jpg" },

    // Categoría: Tenis
    { nombre: "Zapatillas de Correr", descripcion: "Zapatillas ligeras y cómodas.", precio: 120000, talla: "42", marca: "Asics", existencia: 15, fecha: "2024-01-05", imagen: "https://www.aboutespanol.com/thmb/qebAeDXQzr9cAttJvm6JGPtFGzI=/2000x1500/filters:fill(auto,1)/Nike-Flyknit-4-597c17713df78cbb7a272c66.jpg" },
    { nombre: "Tenis de Entrenamiento", descripcion: "Perfectas para el gimnasio.", precio: 110000, talla: "40", marca: "New Balance", existencia: 10, fecha: "2024-01-04", imagen: "https://images-na.ssl-images-amazon.com/images/I/71eV8tynCSL._AC_UL1500_.jpg" },
    { nombre: "Zapatillas de Baloncesto", descripcion: "Diseñadas para el rendimiento en la cancha.", precio: 150000, talla: "44", marca: "Jordan", existencia: 8, fecha: "2024-01-03", imagen:"https://images-na.ssl-images-amazon.com/images/I/611tARg8xQL._AC_UY575_.jpg" },

    // Categoría : Accesorios
    { nombre : 'Gorra Deportiva', descripcion : 'Protección del sol y estilo.', precio : 15000 , talla : 'Única', marca : 'Nike', existencia : 100 , fecha : '2024-01-10', imagen : 'https://http2.mlstatic.com/D_NQ_NP_2X_772791-MLM41956040746_052020-F.jpg' },
    { nombre : 'Muñequera', descripcion : 'Soporte adicional durante el entrenamiento.', precio : 10000 , talla : 'Única', marca : 'Under Armour', existencia : 80 , fecha : '2024-01-09', imagen : 'https://http2.mlstatic.com/D_NQ_NP_2X_985245-MCO42060923647_062020-F.jpg' },
    { nombre : 'Botella de Agua', descripcion : 'Mantente hidratado durante tus actividades.', precio : 8000 , talla : 'Única', marca : 'CamelBak', existencia : 150 , fecha : '2024-01-08', imagen :'https://images-na.ssl-images-amazon.com/images/I/81L8FARjpvL._SL1500_.jpg' },

    // Categoría : Equipo (para entrenar)
    { nombre:'Mancuernas Ajustables' , descripcion:'Ideales para entrenamiento en casa.' , precio:'80000' , talla:'Única' , marca:'ProForm' , existencia:'25' , fecha:'2024-01-10' , imagen:'https://img.mrvcdn.com/g/fb/kf/E850fa4ec7bc04a56b0efbdaf8ad4d3c3n.png_2200x2200q80.jpg' },
    { nombre:'Colchoneta de Yoga' , descripcion:'Comodidad y soporte durante tus ejercicios.' , precio:'45000' , talla:'Única' , marca:'Liforme' , existencia:'30' , fecha:'2024-01-09' , imagen:'https://images-na.ssl-images-amazon.com/images/I/71jT0SPNmkL._AC_SL1500_.jpg' },
    { nombre:'Banda de Resistencia' , descripcion:'Para mejorar tu fuerza y flexibilidad.' , precio:'20000' , talla:'Única' , marca:'TheraBand' , existencia:'100' , fecha:'2024-01-08' , imagen:'https://www.entrenamiento.com/wp-content/uploads/2020/01/ejercicios-hacerlo-mejores-banda-resistencia.jpg' },
    
    // Categoría : Chaquetas
    { nombre :'Chaqueta Impermeable', descripcion :'Protección contra la lluvia.', precio :'70000', talla :'M', marca :'North Face', existencia :'20', fecha :'2024-01-10', imagen :'https://contents.mediadecathlon.com/p1859863/k$df7de8973a58a14fb1b0d900e63f16a5/sq/Chaqueta+c+lida+impermeable+senderismo+nieve+SH100+WARM+hombre.jpg'},
    { nombre :'Chaqueta Térmica', descripcion :'Ideal para climas fríos.', precio :'90000', talla :'L', marca :'Columbia', existencia :'15', fecha :'2024-01-09', imagen :'https://skollsports.com/728-large_default_2x/chaqueta-termica-mujer-negro-rosa.jpg'},
    { nombre :'Chaqueta Deportiva Ligera', descripcion :'Perfecta para actividades al aire libre.', precio :'65000', talla :'S', marca :'Adidas', existencia :'25', fecha :'2024-01-08', imagen :'https://assets.adidas.com/images/w_940,f_auto,q_auto/aeeb8e5e8b6744999176ae600132d7a8_9366/HD8887_21_model.jpg'},
];
console.log(productos)

//& Funcion para generar cards
function crearCard (productos){
    const card = document.createElement("div");
    card.className = "card-product";

    const img = document.createElement("img");
    img.src = productos.imagen;
    img.alt = productos.nombre;
    

    const btnHeart = document.createElement("button");
    btnHeart.className = 'btn-heart';
    btnHeart.innerHTML = '❤️'; 
    btnHeart.onclick = () => alert(`Te gusta ${productos.nombre}`); 

    const cardBody = document.createElement("div");
    cardBody.className = 'card-body';

    const titulo = document.createElement("h6");
    titulo.className = "titulo-prod";
    titulo.textContent = productos.nombre;

    const descripcion = document.createElement("p");
    descripcion.className = "description";
    descripcion.textContent = productos.descripcion;

    const precio = document.createElement('h6');
    precio.className = 'precio';
    precio.textContent = ` Precio: $ ${ + productos.precio}`;

    const btnComprar = document.createElement("button");
    btnComprar.className = 'btn-product';
    btnComprar.innerHTML = 'Ver producto'; 
    btnComprar.onclick = () => alert(` Comprar : ${productos.nombre}`); 


    card.appendChild(img);
    card.appendChild(btnHeart);
    cardBody.appendChild(titulo);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(precio);
    card.appendChild(cardBody);
    card.appendChild(btnComprar)

   return card; 
}


function mostrarCards() {
    const container = document.getElementById('card-container');
    productos.forEach(productos => {
        const card = crearCard(productos);
        container.appendChild(card);
    });
 }
 document.addEventListener('DOMContentLoaded', mostrarCards);


 //Termina funcion para cards 


 // Funcionalidad para carousel
 const slide = document.querySelector('.carousel-slide');
const img = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let imgActual = 0;
const totalImg = img.length;

function carouselPosition() {
    const desplazamiento = -imgActual * 100; 
    slide.style.transform = `translateX(${desplazamiento}%)`;
}

function siguienteImg() {
    imgActual = (imgActual + 1) % totalImg;
    carouselPosition();
}
nextBtn.addEventListener('click', () => {
    siguienteImg(); 
    reiniciarCarousel();
});

prevBtn.addEventListener('click', () => {
    imgActual = (imgActual - 1 + totalImg) % totalImg; 
    carouselPosition();
    reiniciarCarousel();
});

let autoSlide = setInterval(siguienteImg, 3000);

const reiniciarCarousel = () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(siguienteImg, 3000);
}
// Termina carousel






