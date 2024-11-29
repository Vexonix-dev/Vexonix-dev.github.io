document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.gallery-slider-container');
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-image');

    const slideWidth = slides[0].offsetWidth;
    const slideMargin = 10; 
    let slidesPerPage = window.innerWidth < 768 ? 1 : 3; // Определяем количество слайдов на странице в зависимости от ширины окна
    const totalSlides = slides.length;

    let currentSlide = 0;

    function setSliderWidth() {
        slidesPerPage = window.innerWidth < 768 ? 1 : 3; // Проверка ширины экрана при изменении размера окна
        const containerWidth = (slideWidth + slideMargin) * slidesPerPage - slideMargin;
        sliderContainer.style.width = `${containerWidth}px`;
        slider.style.width = `${(slideWidth + slideMargin) * totalSlides - slideMargin}px`;
        updateGallery();
    }

    function updateGallery() {
        const offset = -(currentSlide * (slideWidth + slideMargin));
        slider.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        if (currentSlide <= totalSlides - slidesPerPage * 2) {
            currentSlide += slidesPerPage;
        } else {
            currentSlide = 0;
        }
        updateGallery();
    }

    function prevSlide() {
        if (currentSlide >= slidesPerPage) {
            currentSlide -= slidesPerPage;
        } else {
            currentSlide = totalSlides - slidesPerPage;
        }
        updateGallery();
    }

    document.querySelector('.arrow-left').addEventListener('click', prevSlide);
    document.querySelector('.arrow-right').addEventListener('click', nextSlide);

    // Пересчитываем слайды при изменении размера окна
    window.addEventListener('resize', setSliderWidth);

    // Инициализация слайдера
    setSliderWidth();
});
