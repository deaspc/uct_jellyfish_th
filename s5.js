const tl5 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container5",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl5.fromTo(
  "#bg5",
  {
    filter: "brightness(0)",
  },
  {
    filter: "brightness(1)",
    duration: 2,
  }
);

tl5.fromTo(
  "#img5",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl5.fromTo(
  "#text5",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl5.fromTo(
  "#img5",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl5.fromTo(
  "#text5",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  },
  "<+=0.1"
);

tl5.fromTo(
  "#bg5",
  {
    filter: "brightness(1)",
  },
  {
    filter: "brightness(0)",
    duration: 2,
  },
  "<+=0.1"
);
