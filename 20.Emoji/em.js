const btn = document.querySelector("#emoji");

const emojis = [
    "🕊️",
    "🤌",
    "❤️‍🩹",
    "🙃",
    "👀",
    "🫠"
];

let currentIndex = 0;

btn.addEventListener("mouseover", () => {
    btn.innerHTML = emojis[currentIndex];

    currentIndex = (currentIndex+1) % emojis.length;
});


// btn.addEventListener("mouseover",() => {
//     btn.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
// });