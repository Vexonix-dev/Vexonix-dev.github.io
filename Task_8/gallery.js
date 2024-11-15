document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.gallery-slider-container');
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-image');

    const slideWidth = slides[0].offsetWidth; 
    const slideMargin = 10; 
    const slidesPerPage = 3; 
    const totalSlides = slides.length;
    
    let currentSlide = 0;

    // ширина контейнера слайдера
    const containerWidth = (slideWidth + slideMargin) * slidesPerPage - slideMargin;
    sliderContainer.style.width = `${containerWidth}px`;

    // ширина всего слайдера
    slider.style.width = `${(slideWidth + slideMargin) * totalSlides - slideMargin}px`;

    function updateGallery() {
        // смещение
        const offset = -(currentSlide * (slideWidth + slideMargin));
        slider.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        if (currentSlide < totalSlides - slidesPerPage) {
            currentSlide++;
        } else {
            currentSlide = 0; // возврат в начало
        }
        updateGallery();
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - slidesPerPage; // переход к последнему слайду
        }
        updateGallery();
    }

    document.querySelector('.arrow-left').addEventListener('click', prevSlide);
    document.querySelector('.arrow-right').addEventListener('click', nextSlide);

    // галерея
    updateGallery();
});