// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carousel Slider Functionality
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
let index = 0;

function slideCarousel() {
    index++;
    if (index === items.length) index = 0;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Automatically slide every 4 seconds
setInterval(slideCarousel, 4000);

// Toggle FAQ Answer Display
document.querySelectorAll('.faq-item h3').forEach(faqTitle => {
    faqTitle.addEventListener('click', () => {
        const faqItem = faqTitle.parentElement;
        faqItem.classList.toggle('active');
    });
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;

    // Format WhatsApp message
    const whatsappNumber = "27833765712"; // Replace with your WhatsApp number in international format, e.g., 27712345678
    const message = `Hello, you have a new registration:
    - Name: ${name}
    - Email: ${email}
    - Phone: ${phone}
    - Interested Vehicle: ${interest}`;

    // Redirect to WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
});

