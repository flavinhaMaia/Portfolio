let counter = 1;
const slide = document.querySelector('.carousel-slide');

setInterval(() => {
    slide.style.transform = `translateX(${-100 * counter}%)`;
    counter = (counter + 1) % 3; // Reseta o contador após 3 imagens
}, 3000);
