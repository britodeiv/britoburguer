
let currentIndex = 0;
const slides = document.querySelectorAll('.hero-slider .slide');

function showSlide(index) {
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);


document.querySelector('#contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name && email && message) {
        alert('Formulário enviado com sucesso!');

    } else {
        alert('Por favor, preencha todos os campos.');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    });




});

