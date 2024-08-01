let slideIndex = 0;
const carouselSlide = document.querySelector('.carousel-slide');
const totalSlides = document.querySelectorAll('.carousel-slide img').length;

function moveSlide(step) {
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    const offset = -slideIndex * 100;
    carouselSlide.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);

// Scroll to section
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
