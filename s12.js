const tl12 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container12",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

// var slideIndex = [1, 1];
// var slideId = ["mySlides1"];
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides((slideIndex[no] += n), no);
// }

// function showSlides(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {
//     slideIndex[no] = 1;
//   }
//   if (n < 1) {
//     slideIndex[no] = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no] - 1].style.display = "block";
// }

// function startShake(imageId) {
//   var image = document.getElementById(imageId);
//   image.classList.add("shake-animation");
//   setTimeout(function () {
//     image.classList.remove("shake-animation");
//   }, 500);
// }

// document.addEventListener("DOMContentLoaded", function () {
//   var image1 = document.getElementById("image1");
//   var image2 = document.getElementById("image2");

//   image1.addEventListener("click", function () {
//     startShake("image1");
//   });

//   image2.addEventListener("click", function () {
//     startShake("image2");
//   });
// });
