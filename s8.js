const tl8 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container8",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl8.fromTo(
  "#bg8",
  {
    filter: "brightness(0)",
  },
  {
    filter: "brightness(1)",
    duration: 2,
  }
);

tl8.fromTo(
  "#text81",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl8.fromTo(
  "#text81",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

// 10m
tl8.fromTo(
  "#ten",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl8.fromTo(
  "#img81l",
  {
    opacity: 0,
    x: 0,
  },
  {
    opacity: 1,
    x: -10,
    duration: 3,
  }
);

tl8.fromTo(
  "#ten",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl8.fromTo(
  "#img83r",
  {
    opacity: 0,
    x: 0,
  },
  {
    opacity: 1,
    x: 10,
    duration: 3,
  }
);

tl8.fromTo(
  "#img81l",
  {
    x: -10,
  },
  {
    opacity: 0,
    x: -1000,
    duration: 5,
  }
);

tl8.fromTo(
  "#img83r",
  {
    x: 10,
  },
  {
    opacity: 0,
    x: 1000,
    duration: 5,
  },
  "<+=0.1"
);

// 20m
tl8.fromTo(
  "#bg8",
  {
    filter: "brightness(1)",
  },
  {
    filter: "brightness(0.75)",
    duration: 2,
  }
);

tl8.fromTo(
  "#twenty",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl8.fromTo(
  "#img82r",
  {
    opacity: 0,
    x: 0,
  },
  {
    opacity: 1,
    x: 10,
    duration: 3,
  }
);

tl8.fromTo(
  "#text82",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl8.fromTo(
  "#img81l",
  {
    opacity: 0,
    x: 0,
  },
  {
    opacity: 1,
    x: -10,
    duration: 3,
  }
);

tl8.fromTo(
  "#twenty",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  },
  "<+=0.1"
);

tl8.fromTo(
  "#text82",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl8.fromTo(
  "#img82r",
  {
    opacity: 1,
    x: 10,
  },
  {
    opacity: 0,
    x: 1000,
    duration: 5,
  },
  "<+=0.1"
);

tl8.fromTo(
  "#img81l",
  {
    opacity: 1,
    x: -10,
  },
  {
    opacity: 0,
    x: -1000,
    duration: 5,
  }
);

// 30m
tl8.fromTo(
  "#bg8",
  {
    filter: "brightness(0.75)",
  },
  {
    filter: "brightness(0.5)",
    duration: 2,
  }
);

tl8.fromTo(
  "#thirty",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl8.fromTo(
  "#img82l",
  {
    opacity: 0,
    x: 0,
  },
  {
    opacity: 1,
    x: -10,
    duration: 3,
  }
);

tl8.fromTo(
  "#img83r",
  {
    opacity: 0,
    x: 0,
  },
  {
    opacity: 1,
    x: 10,
    duration: 3,
  }
);

tl8.fromTo(
  "#thirty",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl8.fromTo(
  "#img82l",
  {
    opacity: 1,
    x: -10,
  },
  {
    opacity: 0,
    x: -1000,
    duration: 5,
  }
);

tl8.fromTo(
  "#img83r",
  {
    opacity: 1,
    x: 10,
  },
  {
    opacity: 0,
    x: 1000,
    duration: 5,
  },
  "<+=0.1"
);

// 31m + click
tl8.fromTo(
  "#thirtyone",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl8.fromTo(
  "#img81lc",
  {
    opacity: 0,
    x: 30,
  },
  {
    opacity: 1,
    x: 0,
    duration: 2,
  }
);

tl8.fromTo(
  "#thirtyone",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl8.fromTo(
  "#img83lc",
  {
    opacity: 0,
    x: 30,
  },
  {
    opacity: 1,
    x: 0,
    duration: 2,
  }
);

tl8.fromTo(
  "#img82rc",
  {
    opacity: 0,
    x: -30,
  },
  {
    opacity: 1,
    x: 0,
    duration: 2,
  }
);

tl8.fromTo(
  "#img84",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    duration: 2,
  }
);

tl8.fromTo(
  "#text83",
  {
    opacity: 0,
  },
  {
    opacity: 1,

    duration: 2,
  }
);

tl8.fromTo(
  "#img82lc",
  {
    opacity: 0,
    x: 30,
  },
  {
    opacity: 1,
    x: 0,
    duration: 2,
  }
);

tl8.fromTo(
  "#img83rc",
  {
    opacity: 0,
    x: -30,
  },
  {
    opacity: 1,
    x: 0,
    duration: 2,
  }
);

console.clear();
const fish1 = document.querySelector("#img81lc");
const target1 = document.querySelector("#img81lc");

fish1.addEventListener("click", () =>
  gsap.fromTo(
    target1,
    { x: 0, opacity: 1 },
    { x: -10, opacity: 0, duration: 0.5 }
  )
);

console.clear();
const fish2 = document.querySelector("#img82lc");
const target2 = document.querySelector("#img82lc");

fish2.addEventListener("click", () =>
  gsap.fromTo(
    target2,
    { x: 0, opacity: 1 },
    { x: -10, opacity: 0, duration: 0.5 }
  )
);

console.clear();
const fish3 = document.querySelector("#img83lc");
const target3 = document.querySelector("#img83lc");

fish3.addEventListener("click", () =>
  gsap.fromTo(
    target3,
    { x: 0, opacity: 1 },
    { x: -10, opacity: 0, duration: 0.5 }
  )
);

console.clear();
const fish4 = document.querySelector("#img82rc");
const target4 = document.querySelector("#img82rc");

fish4.addEventListener("click", () =>
  gsap.fromTo(
    target4,
    { x: 0, opacity: 1 },
    { x: 10, opacity: 0, duration: 0.5 }
  )
);

console.clear();
const fish5 = document.querySelector("#img83rc");
const target5 = document.querySelector("#img83rc");

fish5.addEventListener("click", () =>
  gsap.fromTo(
    target5,
    { x: 0, opacity: 1 },
    { x: 10, opacity: 0, duration: 0.5 }
  )
);
