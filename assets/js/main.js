// main.js

const flight = document.querySelector(".flight");

flight.addEventListener("click", function() {
    console.log("Flight was clicked!");

    flight.classList.remove("flying");
    void flight.offsetWidth;
    flight.classList.add("flying");
});

const made = document.querySelector(".made");

made.addEventListener("click", function() {
    console.log("Made was clicked!");

    made.classList.remove("play");
    void made.offsetWidth;
    made.classList.add("play");
});

const dust = document.querySelector(".dust");

dust.addEventListener("click", function() {
    console.log("Dust was clicked!");

    dust.classList.remove("play");
    void dust.offsetWidth;
    dust.classList.add("play");
});
