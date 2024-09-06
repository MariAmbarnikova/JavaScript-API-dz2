let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}
function curretSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    const slides = document.querySelectorAll('.sliders');
    const dots = document.querySelectorAll('.dot');

    // Доходя до конца начиналось заново
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Доходя до конца начиналось с конца
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Прячем все картинки
    slides.forEach((e) => {
        e.style.display = 'none';
    });

    // Бежим по всем точкам и убираем класс active
    dots.forEach((e) => {
        e.className = e.className.replace('active', '');
    });
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].classList.add('active');
}