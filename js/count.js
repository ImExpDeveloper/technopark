const countdown = document.querySelector('.countdown');
const targetDate = new Date('2024-10-02T17:10:10');

function updateCountdown() {
    const now = new Date();
    const remainingTime = targetDate - now;

    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('hours').innerText = hours.toString().padStart(2, '0') + ':';
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0') + ':';
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);