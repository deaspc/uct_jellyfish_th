const tl14 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container14",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl14.fromTo(
  "#img141, #text141",
  {
    opacity: 0,
  },
  {
    opacity: 1,

    duration: 1,
  }
);

tl14.fromTo(
  "#text141",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 1,
  }
);

tl14.fromTo(
  "#text142, #text143",
  {
    opacity: 0,
  },
  {
    opacity: 1,

    duration: 1,
  }
);
