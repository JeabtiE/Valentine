let size = 16;
document.getElementById("button1").addEventListener("click", function () {
    size += 20;
    document.getElementById("button2").style.fontSize = size + "px";
    document.getElementById("button2").style.padding = (size / 2) + "px " + size + "px" * 10;
    document.getElementById("button1").style.padding = -5;
});


let clickCount = 0;
const button = document.getElementById("button1");
const texts = ["Are you sure? 😨", "Really sure !!?? (┬┬﹏┬┬)", "I will be very sad (；′⌒`)", "Please ... 🥺😣", "Just think again !! 🙇‍♂️"];

button.addEventListener("click", function () {
    if (clickCount < texts.length) {
        button.innerText = texts[clickCount];
        clickCount++;
    }
    if (clickCount === texts.length) {
        button.style.display = "none";
    }
});

const images = ["gif.gif", "gif9.gif", "gif8.gif", "gif7.gif"];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

document.getElementById("randomImage").src = "img/" + randomImage;




