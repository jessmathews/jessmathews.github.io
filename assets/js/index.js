document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector(".coloured").innerText;
    const coloredText = text.split("").map((char, index) => {
        return `<span>${char}</span>`;
    }).join("");
    document.querySelector(".coloured").innerHTML = coloredText;
});
