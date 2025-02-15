let currentIndex = 0;
function moveSlide(direction) {
    const slider = document.getElementById("slider");
    const totalSlides = document.querySelectorAll(".slide").length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}