const greyheart = document.querySelector(".grey-heart");
const redheart = document.querySelector(".red-heart");
greyheart.addEventListener('click', () => {
    redheart.classList.add('animation');
    greyheart.classList.add('fill-color');
});

redheart.addEventListener('click', () => {
    redheart.classList.remove('animation');
    greyheart.classList.remove('fill-color');
});