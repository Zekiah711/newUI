    // JavaScript code for automatic carousel slide transition
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    function nextSlide() {
      currentIndex = (currentIndex + 1) % 2;
      updateCarousel();
    }

    function updateCarousel() {
      const translateValue = -currentIndex * 100 + '%';
      carousel.style.transform = 'translateX(' + translateValue + ')';
    }

    // Automatically transition to the next slide every 3 seconds
    setInterval(nextSlide, 3000);
