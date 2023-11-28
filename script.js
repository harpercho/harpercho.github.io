const audio = document.querySelector("audio";

const playButton = document.getElementById("play-button")
const pauseButton = document.getElementsById("pause-button")

playButton.addEventListener("click", () => {
    audio.play();
});

pauseButton.addEventListener("click", () => {
    audio.pause();
});