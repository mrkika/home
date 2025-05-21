function calculateLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerHTML = "Please enter both names!";
        return;
    }

    let lovePercentage = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1-100

    let message;
    if (lovePercentage > 80) {
        message = "You are a perfect match! ❤️";
    } else if (lovePercentage > 50) {
        message = "You have a strong connection! 💖";
    } else if (lovePercentage > 30) {
        message = "There's potential! 💕";
    } else {
        message = "Love takes time! 💔";
    }

    document.getElementById("result").innerHTML = 
        `${name1} & ${name2} = ${lovePercentage}%<br>${message}`;
}