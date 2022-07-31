import "../scss/main.scss";
import "../css/reset.css";
import "lightgallery/css/lightgallery-bundle.min.css";

import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

import { Loader } from "./loader";
import { OverlayContent } from "./overlayContent";

const cg_html = `
<div class="overlay_container">
  <div class="top_section">
    <div class="texts">
      <span class="title">3DCG</span>
      <p class="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste tempora impedit, ratione atque mollitia
        sit sint, ipsum voluptate quisquam ullam aliquid voluptatem quis adipisci corrupti maxime facilis
        dolorem culpa explicabo?
      </p>
    </div>
    <div id="lightgallery">
        <div class="slide">
          <img src="./assets/img/3dcg/1.jpg" alt="1">
        </div>
        <div class="slide">
          <img src="./assets/img/3dcg/2.png" alt="2">
        </div>
      </div>
    </div>
  </div>
  <a class="close_overlay">Close</a>
</div>
`;

gsap.registerPlugin(CustomEase);

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

const registerEvents = () => {
  // Header
  document.querySelector(".knob").addEventListener("click", async () => {
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

  // Learn more
  // document.querySelectorAll(".lm_cg").forEach((lm) => {
  //   lm.addEventListener("click", () => cg_overlay.open());
  // });
};

const cg_overlay = new OverlayContent(
  document.querySelector(".overlay_contents"),
  cg_html
);
const loader = new Loader(
  document.querySelector(".loader"),
  document.querySelector(".imageload_ref"),
  4,
  0.5
);

registerEvents();
loader.run();
