document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.gallery-slider-container');
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-image');

    const slideWidth = slides[0].offsetWidth; // Ширина одного изображения
    const slideMargin = 10; // Отступ между изображениями
    const slidesPerPage = 3; // Количество изображений, видимых на экране одновременно
    const totalSlides = slides.length;
    
    let currentSlide = 0;

    // Установка ширины контейнера слайдера
    const containerWidth = (slideWidth + slideMargin) * slidesPerPage - slideMargin;
    sliderContainer.style.width = `${containerWidth}px`;

    // Установка ширины всего слайдера
    slider.style.width = `${(slideWidth + slideMargin) * totalSlides - slideMargin}px`;

    function updateGallery() {
        // Рассчитываем смещение
        const offset = -(currentSlide * (slideWidth + slideMargin));
        slider.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        if (currentSlide < totalSlides - slidesPerPage) {
            currentSlide++;
        } else {
            currentSlide = 0; // Возврат в начало
        }
        updateGallery();
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - slidesPerPage; // Переход к последнему слайду
        }
        updateGallery();
    }

    // Обработчики событий для кнопок
    document.querySelector('.arrow-left').addEventListener('click', prevSlide);
    document.querySelector('.arrow-right').addEventListener('click', nextSlide);

    // Инициализация галереи
    updateGallery();
});