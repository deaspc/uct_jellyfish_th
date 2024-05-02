const tl10 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container10",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl10.fromTo(
  "#bg10",
  {
    filter: "brightness(0)",
  },
  {
    filter: "brightness(1)",
    duration: 2,
  }
);

tl10.fromTo(
  "#bg10",
  {
    filter: "brightness(1)",
  },
  {
    filter: "brightness(0)",
    duration: 2,
  }
);
