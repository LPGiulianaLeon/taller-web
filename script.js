let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("active"); // Activa la imagen y el texto
        } else {
            slide.classList.remove("active"); // Oculta las demás imágenes
        }
    });
}

// Ajustamos el tiempo de transición en automático
function moveSlide(step) {
    slideIndex += step;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    setTimeout(() => {
        showSlide(slideIndex);
    }, 500); // Retardo de 0.5 segundos antes de cambiar la imagen
}

// Cambia automáticamente cada 6 segundos en vez de 4
function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 6000); // Cambio más lento
}

// Iniciar el carrusel
showSlide(slideIndex);
setTimeout(autoSlide, 6000);

function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}
