const tl7 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container7",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl7.fromTo(
  "#img71",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl7.fromTo(
  "#text71",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  },
  "<+=0.1"
);

tl7.fromTo(
  "#img72",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl7.fromTo(
  "#text72",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl7.fromTo(
  "#img72",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl7.fromTo(
  "#text72",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  },
  "<+=0.1"
);

tl7.fromTo(
  "#img73",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl7.fromTo(
  "#text73",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl7.fromTo(
  "#img73",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl7.fromTo(
  "#text73",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  },
  "<+=0.1"
);

tl7.fromTo(
  "#bg7",
  {
    filter: "brightness(1)",
  },
  {
    filter: "brightness(0)",
    duration: 2,
  }
);
