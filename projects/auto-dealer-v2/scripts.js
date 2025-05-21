let currentSlide = 0;
const slides = document.querySelectorAll('.slider-images img');
const totalSlides = slides.length;

function showSlide(index) {
    // Adjust the image position based on the current slide
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slider-images').style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initialize the slider by showing the first slide
showSlide(currentSlide);

// Set an interval to automatically transition between slides
setInterval(nextSlide, 3000);  // Change slide every 3 seconds

// Toggle the mobile menu when the hamburger button is clicked
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('terms-modal'); // The modal
    const acceptTerms = document.getElementById('accept-terms'); // The checkbox
    const continueBtn = document.getElementById('continue-btn'); // The continue button
    const content = document.getElementById('content'); // Main content

    // Show the modal on page load
    modal.style.display = 'flex';

    // Enable the button when the checkbox is checked
    acceptTerms.addEventListener('change', function() {
        continueBtn.disabled = !acceptTerms.checked;
    });

    // Hide the modal and enable content when the button is clicked
    continueBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        content.style.opacity = '1';
        content.style.pointerEvents = 'all';
    });
});


