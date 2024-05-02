const tl17 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container17",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

// random

const imageArray = ["asset/cer1.png", "asset/cer2.png", "asset/cer3.png"];

const image = document.getElementById("random");
const button = document.getElementById("button3");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  image.setAttribute("src", array[randomNum]);
}

// download

let btnDownload = document.getElementById("button4");
let img = document.getElementById("random");

// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
btnDownload.addEventListener("click", () => {
  let imagePath = img.getAttribute("src");
  let fileName = getFileName(imagePath);
  saveAs(imagePath, fileName);
});

function getFileName(str) {
  return str.substring(str.lastIndexOf("/") + 1);
}
