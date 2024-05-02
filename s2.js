const tl2 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container2",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl2.fromTo(
  "#img2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl2.fromTo(
  "#text2",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);
