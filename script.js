const card = document.getElementById("card");
const messageBox = document.getElementById("messageBox");
const lines = document.querySelectorAll(".line");
const audio = document.getElementById("bgAudio");

card.addEventListener("click", () => {
    // Hide card smoothly
    card.classList.add("hide");

    // Play audio
    audio.play();

    // Show message
    setTimeout(() => {
        messageBox.classList.add("show");

        lines.forEach((line, index) => {
            line.style.animationDelay = `${index * 0.9}s`;
        });
    }, 700);
});
