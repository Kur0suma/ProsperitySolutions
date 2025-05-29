<!-- Place before </body> -->
<script>
// filepath: c:\Users\user\Documents\WEbProject\index.html
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
showSlides(slideIndex);

function showSlides(n) {
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === slideIndex) ? 1 : 0;
        slide.style.zIndex = (i === slideIndex) ? 1 : 0;
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
    });
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

document.querySelector('.prev').onclick = () => plusSlides(-1);
document.querySelector('.next').onclick = () => plusSlides(1);
dots.forEach((dot, i) => {
    dot.onclick = () => currentSlide(i);
});
</script>