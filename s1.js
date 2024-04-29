const tl1 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container1",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl1.fromTo(
  "#text11",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl1.fromTo(
  "#text11",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  }
);

tl1.fromTo(
  "#text12",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl1.fromTo(
  "#text12",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  }
);

tl1.fromTo(
  "#bg1",
  {
    filter: "brightness(1)",
  },
  {
    filter: "brightness(0)",
    duration: 2,
  },
  "<+=0.1"
);
