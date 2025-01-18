// Set the date for the wedding (YYYY, MM (0-indexed), DD)
const weddingDate = new Date("2025-02-07T09:35:00").getTime();

// Update the countdown every second
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "We're Married!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
