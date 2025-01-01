// Initialize Swiper after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal", // Horizontal slider
    loop: true, // Infinite loop
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 40000, // Auto-slide every 4 seconds
    },
  });
});
