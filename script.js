function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

// Smooth scrolling polyfill for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Countdown Timer
function updateCountdown() {
    const launchDate = new Date('December 31, 2024 23:59:59').getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-timer').innerText = 'Launched!';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
