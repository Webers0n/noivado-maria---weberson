document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            slide.style.display = "none";
        });
        slides[index].classList.add("active");
        slides[index].style.display = "block";
    }

    function nextSlide() {
        slides[currentIndex].classList.remove("active");
        slides[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
        slides[currentIndex].style.display = "block";
    }

    function prevSlide() {
        slides[currentIndex].classList.remove("active");
        slides[currentIndex].style.display = "none";
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].classList.add("active");
        slides[currentIndex].style.display = "block";
    }

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    setInterval(nextSlide, 3000); // Muda automaticamente a cada 3 segundos

    showSlide(currentIndex);
});
