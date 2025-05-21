function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Set random position along the screen width
    heart.style.left = Math.random() * window.innerWidth + "px";

    // Set random size for variation
    let size = Math.random() * 20 + 10; // Between 10px and 30px
    heart.style.fontSize = size + "px";

    // Set random animation duration
    let duration = Math.random() * 3 + 2; // Between 2s and 5s
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Generate a heart every 500ms
setInterval(createHeart, 500);

// Reveal Secret Message
function revealMessage() {
    document.getElementById("secret-message").style.opacity = "1";
}