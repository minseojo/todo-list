const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

function handleh1Click() {
    h1.innerText = "Click";
}

function handleh1Enter() {
    h1.innerText = "Color change";
    h1.style.color = "blue";
}

function handleh1Leave() {
    h1.innerText = "Grab me!";
    h1.style.color = "black";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "orange";
}

h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleh1Enter);
h1.addEventListener("mouseleave", handleh1Leave);

window.addEventListener("resize", handleWindowResize);
