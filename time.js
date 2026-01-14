let startTime = new Date("2025-12-17T19:00:00").getTime(); // วันที่เริ่มจับเวลา
let timer;

function updateTime() {
    const now = Date.now();
    const elapsedTime = now - startTime;

    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    updateDisplay(hours, minutes, seconds, milliseconds);
}

function updateDisplay(h, m, s, ms) {
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
    document.getElementById("milliseconds").innerText = ms.toString().padStart(3, '0');
}

const images = ["gif6.gif", "gif5.gif", "gif4.gif", "gif3.gif", "gif2.gif"];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

document.getElementById("randomImage").src = "img/" + randomImage;

// อัปเดตเวลาในทุก ๆ 10 มิลลิวินาที
timer = setInterval(updateTime, 10);
