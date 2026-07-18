// Reveals or hides the Morocco fun fact and image when the button is clicked.

const funFactButton = document.getElementById("fun-fact-button");
const funFactContent = document.getElementById("fun-fact-content");

funFactButton.addEventListener("click", function () {
    funFactContent.classList.toggle("is-visible");

    const funFactIsVisible =
        funFactContent.classList.contains("is-visible");

    funFactButton.innerHTML = funFactIsVisible
        ? 'HIDE FUN FACT <span aria-hidden="true">←</span>'
        : 'FUN FACT <span aria-hidden="true">→</span>';

    funFactButton.setAttribute("aria-expanded", funFactIsVisible);
});