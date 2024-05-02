const tl4 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container4",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl4.fromTo(
  "#bg4",
  {
    filter: "brightness(0)",
  },
  {
    filter: "brightness(1)",
    duration: 2,
  }
);

tl4.fromTo(
  "#text41",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl4.fromTo(
  "#text41",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  }
);

tl4.fromTo(
  "#text42",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl4.fromTo(
  "#text42",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  }
);

tl4.fromTo(
  "#bg4",
  {
    filter: "brightness(1)",
  },
  {
    filter: "brightness(0)",
    duration: 2,
  }
);
