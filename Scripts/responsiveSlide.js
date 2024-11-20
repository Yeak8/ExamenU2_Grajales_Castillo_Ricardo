let slideIndex = 0; // Índice inicial
showSlides(); // Mostrar la diapositiva inicial

function showSlides() {
    const slides = document.querySelectorAll('.slide'); // Seleccionar todas las diapositivas
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none'; // Mostrar solo la diapositiva actual
    });
}

// Botón anterior
document.querySelector('.prev').addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Navegar en sentido inverso (cíclico)
    showSlides();
});

// Botón siguiente
document.querySelector('.next').addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex + 1) % slides.length; // Navegar hacia adelante (cíclico)
    showSlides();
});
