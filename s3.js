const tl3 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container3",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl3.fromTo(
  "#text31",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  }
);

tl3.fromTo(
  "#img31",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl3.fromTo(
  "#text32",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl3.fromTo(
  "#text32",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  }
);

tl3.fromTo(
  "#text33",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl3.fromTo(
  "#text33",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  }
);

tl3.fromTo(
  "#img31",
  {
    scale: 1,
  },
  {
    scale: 0.08,
    duration: 2,
  },
  "<+=0.1"
);

tl3.fromTo(
  "#img32",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl3.fromTo(
  "#text34",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl3.fromTo(
  "#img31, #img32",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl3.fromTo(
  "#text34",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  },
  "<+=0.1"
);

tl3.fromTo(
  "#bg3",
  {
    filter: "brightness(1)",
  },
  {
    filter: "brightness(0)",
    duration: 2,
  },
  "<+=0.1"
);
