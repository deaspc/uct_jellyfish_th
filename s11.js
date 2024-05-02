const tl11 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container11",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl11.fromTo(
  "#img111",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl11.fromTo(
  "#text111",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl11.fromTo(
  "#img111",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl11.fromTo(
  "#text111",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  },
  "<+=0.1"
);
