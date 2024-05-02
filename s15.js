const tl15 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container15",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl15.fromTo(
  "#img151, #text151",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl15.fromTo(
  "#text151",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  }
);

tl15.fromTo(
  "#text152",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl15.fromTo(
  "#text152",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  }
);

tl15.fromTo(
  "#text153",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl15.fromTo(
  "#img151",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl15.fromTo(
  "#text153",
  {
    opacity: 1,
  },
  {
    opacity: 0,

    duration: 2,
  },
  "<+=0.1"
);

tl15.fromTo(
  "#bg15",
  {
    filter: "brightness(1)",
  },
  {
    filter: "brightness(0)",
    duration: 2,
  }
);
