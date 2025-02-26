let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const carouselContainer = document.querySelector(".carousel-container");

// Función para mover el carrusel
function showSlide(index) {
    carouselContainer.style.transition = "transform 1s ease-in-out";
    carouselContainer.style.transform = `translateX(${-index * 100}%)`;

    // Si llegamos a la imagen duplicada, saltamos a la original sin transición
    setTimeout(() => {
        if (index === totalSlides - 1) {
            carouselContainer.style.transition = "none";
            carouselContainer.style.transform = "translateX(0%)";
            currentIndex = 0;
        }
    }, 1000); // Se ejecuta justo después de la transición
}

// Mover manualmente con botones
function moveSlide(step) {
    currentIndex += step;
    showSlide(currentIndex);
}

// Cambio automático cada 4 segundos
setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, 7000);
