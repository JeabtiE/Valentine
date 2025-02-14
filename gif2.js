
const images = ["gif6.gif", "gif5.gif", "gif4.gif", "gif3.gif", "gif2.gif"];
const texts = [
    "Thank you. I love you ヾ(≧▽≦*)o 💖",
    "I know you would say yes! (❁´◡`❁) ❤️❤️❤️",
    "This is my best Valentine! (≧∇≦)ﾉ 💝",
    "I feel like butterfly in my stomach... 🦋💓🦋",
    "That sound fantastic!! ( •̀ ω •́ )✧"
];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];
const randomText = texts[randomIndex];

document.getElementById("randomImage").src = "img/" + randomImage;

document.getElementById("randomText").innerText = randomText;


