const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");
const gifResult = document.getElementById("gifResult");

noBtn.addEventListener("mouseover", () => {
    const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
    const newY = Math.floor(Math.random() * questionContainer.offsetHeight);
    
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
    resultContainer.style.display = "block";
    gifResult.play();
});
