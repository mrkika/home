// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

// WhatsApp Message Submission
function sendMessage(event) {
    event.preventDefault();
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    let whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Message: ${message}`;
    let phoneNumber = "+234XXXXXXXXXX"; // Replace with your WhatsApp number

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
}