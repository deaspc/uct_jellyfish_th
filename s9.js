const tl9 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container9",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl9.fromTo(
  "#img91",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl9.fromTo(
  "#img91",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);
