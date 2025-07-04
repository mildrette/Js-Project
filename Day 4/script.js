//  DOM

const moodText = document.getElementById("moodText");
const button = document.getElementById("moodbtn");

const moods = ["😊 Happy", "😢 Sad", "😠 Angry", "😴 Sleepy"];


function changeMood() {
    const randomIndex = Math.floor(Math.random() * moods.length);
moodText.innerText = moods[randomIndex]};

button.addEventListener("click", changeMood);