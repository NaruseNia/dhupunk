import "../scss/main.scss";
import "../css/reset.css";

import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

const closeHeader = (dur, e) => {
  gsap.to(".header", {
    top: -80,
    duration: dur,
    ease: e,
  });
};

const openHeader = (dur, e) => {
  gsap.to(".header", {
    top: 0,
    duration: dur,
    ease: e,
  });
};

gsap.registerPlugin(CustomEase);

document.querySelector(".knob").addEventListener("click", () => {
  openHeader(0.5, "expo.out");
});
document.querySelector(".up_arrow").addEventListener("click", () => {
  closeHeader(0.5, "expo.out");
});
document.querySelector(".main").addEventListener("click", () => {
  closeHeader(0.5, "expo.out");
});
window.addEventListener("scroll", () => {
  closeHeader(
    0.2,
    CustomEase.create("custom", "M0,0 C0.49,0.016 0.998,0.086 1,1 ")
  );
});
