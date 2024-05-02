const tl16 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container16",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl16.fromTo(
  "#bg16",
  {
    filter: "brightness(0)",
  },
  {
    filter: "brightness(1)",
    duration: 2,
  }
);

tl16.fromTo(
  "#text161",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl16.fromTo(
  "#text161",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl16.fromTo(
  "#bg16",
  {
    filter: "brightness(1)",
  },
  {
    filter: "brightness(0)",
    duration: 2,
  }
);
