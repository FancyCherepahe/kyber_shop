const rotateButtonFor45 = document.getElementById("rotate-button-for-45");
const rotateButtonFor90 = document.getElementById("rotate-button-for-90");
const rotateButtonFor135 = document.getElementById("rotate-button-for-135");
const rotateButtonFor180 = document.getElementById("rotate-button-for-180");
const rotateButtonFor225 = document.getElementById("rotate-button-for-225");
const rotateButtonFor270 = document.getElementById("rotate-button-for-270");
const rotateButtonFor315= document.getElementById("rotate-button-for-315");
const rotateButtonFor360 = document.getElementById("rotate-button-for-360");
const resetButton = document.getElementById("reset-button");

const lightsaberHilt = document.getElementById("lightsaber")
const lightsaberBlade = document.getElementById('lightsaber-blade')

rotateButtonFor45.addEventListener("click", function () {
  // Set transform origin to bottom center
  lightsaberHilt.style.transformOrigin = "bottom center";
  lightsaberBlade.style.transformOrigin = "bottom center";

  // Apply rotation with smooth transition
  lightsaberHilt.style.transition = "transform 1s ease";
  lightsaberHilt.style.transform = "rotate(45deg)";

  lightsaberBlade.style.transition = "transform 1s ease";
  lightsaberBlade.style.transform = "rotate(45deg)";

});
rotateButtonFor90.addEventListener("click", function () {
  // Set transform origin to bottom center
  lightsaberHilt.style.transformOrigin = "bottom center";
  lightsaberBlade.style.transformOrigin = "bottom center";

  // Apply rotation with smooth transition
  lightsaberHilt.style.transition = "transform 1.45s ease";
  lightsaberHilt.style.transform = "rotate(90deg)";

  lightsaberBlade.style.transition = "transform 1.45s ease";
  lightsaberBlade.style.transform = "rotate(90deg)";

});
rotateButtonFor135.addEventListener("click", function () {
  // Set transform origin to bottom center
  lightsaberHilt.style.transformOrigin = "bottom center";
  lightsaberBlade.style.transformOrigin = "bottom center";

  // Apply rotation with smooth transition
  lightsaberHilt.style.transition = "transform 1.9s ease";
  lightsaberHilt.style.transform = "rotate(135deg)";

  lightsaberBlade.style.transition = "transform 1.9s ease";
  lightsaberBlade.style.transform = "rotate(135deg)";

});
rotateButtonFor180.addEventListener("click", function () {
  // Set transform origin to bottom center
  lightsaberHilt.style.transformOrigin = "bottom center";
  lightsaberBlade.style.transformOrigin = "bottom center";

  // Apply rotation with smooth transition
  lightsaberHilt.style.transition = "transform 2.35s ease";
  lightsaberHilt.style.transform = "rotate(180deg)";

  lightsaberBlade.style.transition = "transform 2.35s ease";
  lightsaberBlade.style.transform = "rotate(180deg)";

});
rotateButtonFor225.addEventListener("click", function () {
  // Set transform origin to bottom center
  lightsaberHilt.style.transformOrigin = "bottom center";
  lightsaberBlade.style.transformOrigin = "bottom center";

  // Apply rotation with smooth transition
  lightsaberHilt.style.transition = "transform 2.8s ease";
  lightsaberHilt.style.transform = "rotate(225deg)";

  lightsaberBlade.style.transition = "transform 2.8s ease";
  lightsaberBlade.style.transform = "rotate(225deg)";

});
rotateButtonFor270.addEventListener("click", function () {
  // Set transform origin to bottom center
  lightsaberHilt.style.transformOrigin = "bottom center";
  lightsaberBlade.style.transformOrigin = "bottom center";

  // Apply rotation with smooth transition
  lightsaberHilt.style.transition = "transform 3.25s ease";
  lightsaberHilt.style.transform = "rotate(270deg)";

  lightsaberBlade.style.transition = "transform 3.25s ease";
  lightsaberBlade.style.transform = "rotate(270deg)";

});
rotateButtonFor315.addEventListener("click", function () {
  // Set transform origin to bottom center
  lightsaberHilt.style.transformOrigin = "bottom center";
  lightsaberBlade.style.transformOrigin = "bottom center";

  // Apply rotation with smooth transition
  lightsaberHilt.style.transition = "transform 3.7s ease";
  lightsaberHilt.style.transform = "rotate(315deg)";

  lightsaberBlade.style.transition = "transform 3.7s ease";
  lightsaberBlade.style.transform = "rotate(315deg)";

});
rotateButtonFor360.addEventListener("click", function () {
  // Set transform origin to bottom center
  lightsaberHilt.style.transformOrigin = "bottom center";
  lightsaberBlade.style.transformOrigin = "bottom center";

  // Apply rotation with smooth transition
  lightsaberHilt.style.transition = "transform 4.15s ease";
  lightsaberHilt.style.transform = "rotate(360deg)";

  lightsaberBlade.style.transition = "transform 4.15s ease";
  lightsaberBlade.style.transform = "rotate(360deg)";

});

resetButton.addEventListener("click", function () {
  // Optional: reset after animation to allow repeated clicks
    lightsaberHilt.style.transform = "rotate(0deg)";
    lightsaberBlade.style.transform = "rotate(0deg)";
  
});


const blueKyber = document.getElementById("blue-kyber");
const greenKyber = document.getElementById("green-kyber");
const purpleKyber = document.getElementById("purple-kyber");
const yellowKyber = document.getElementById("yellow-kyber");
const magentaKyber = document.getElementById("magenta-kyber");
blueKyber.addEventListener("click", function () {
    lightsaberBlade.style.backgroundColor = "Blue"
    lightsaberBlade.style.boxShadow = "0 0 15px rgb(0, 0, 225), 0 0 10px rgb(0, 0, 225)"
    lightsaberBlade.style.opacity = "1"
    lightsaberBlade.style.visibility = "visible"
});
greenKyber.addEventListener("click", function () {
    lightsaberBlade.style.backgroundColor = "green"
    lightsaberBlade.style.boxShadow = "0 0 15px rgb(0, 255, 0), 0 0 10px rgb(0, 255, 0)"
    lightsaberBlade.style.opacity = "1"
    lightsaberBlade.style.visibility = "visible"
});
purpleKyber.addEventListener("click", function () {
    lightsaberBlade.style.backgroundColor = "rgb(100, 32, 140)"
    lightsaberBlade.style.boxShadow = "0 0 15px rgb(100, 32, 140) , 0 0 10px rgb(100, 32, 140) "
    lightsaberBlade.style.opacity = "1"
    lightsaberBlade.style.visibility = "visible"
});
yellowKyber.addEventListener("click", function () {
    lightsaberBlade.style.backgroundColor = "yellow"
    lightsaberBlade.style.boxShadow = "0 0 15px rgb(255, 255, 0), 0 0 10px rgb(255, 255, 0)"
    lightsaberBlade.style.opacity = "1"
    lightsaberBlade.style.visibility = "visible"
});
magentaKyber.addEventListener("click", function () {
    lightsaberBlade.style.backgroundColor = "Magenta"
    lightsaberBlade.style.boxShadow = "0 0 15px rgb(255, 0, 225), 0 0 10px rgb(255, 0, 225)"
    lightsaberBlade.style.opacity = "1"
    lightsaberBlade.style.visibility = "visible"
});
