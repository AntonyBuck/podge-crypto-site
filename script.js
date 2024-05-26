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

// Snow effect
const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');
const snowflakes = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createSnowflakes() {
    const count = 100;
    for (let i = 0; i < count; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            opacity: Math.random(),
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 3 + 1,
            radius: Math.random() * 4 + 1
        });
    }
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    for (const snowflake of snowflakes) {
        ctx.moveTo(snowflake.x, snowflake.y);
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
    }
    ctx.fill();
    updateSnowflakes();
}

function updateSnowflakes() {
    for (const snowflake of snowflakes) {
        snowflake.x += snowflake.speedX;
        snowflake.y += snowflake.speedY;

        if (snowflake.y > canvas.height) {
            snowflake.y = 0;
            snowflake.x = Math.random() * canvas.width;
        }
    }
}

function animateSnowflakes() {
    drawSnowflakes();
    requestAnimationFrame(animateSnowflakes);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
createSnowflakes();
animateSnowflakes();
