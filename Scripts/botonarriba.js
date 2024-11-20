    const scrollTopButton = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {  // Si la página ha sido desplazada más de 300px
            scrollTopButton.style.display = 'block';  // Muestra el botón
        } else {
            scrollTopButton.style.display = 'none';  // Esconde el botón
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Desplazamiento suave
        });
    });