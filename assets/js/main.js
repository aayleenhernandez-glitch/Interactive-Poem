// main.js

const flight = document.querySelector(".flight");

flight.addEventListener("click", function() {
    console.log("Flight was clicked!");

    flight.classList.remove("flying");
    void flight.offserWidth;
    flight.classList.add("flying");
});

