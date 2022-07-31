import gsap from "gsap";

import { sleep } from "./util";

import Glide from "@glidejs/glide";

class OverlayContent {
  constructor(overlayDOM, innerHTML) {
    this.overlayDOM = overlayDOM;
    this.innerHTML = innerHTML;
  }

  open() {
    this.overlayDOM.innerHTML = this.innerHTML;
    this.overlayDOM.classList.remove("invisible");
    this.title = document.querySelector(
      ".overlay_container > .top_section > .texts > .title"
    );
    this.description = document.querySelector(
      ".overlay_container > .top_section > .texts > .description"
    );

    var tl_1 = gsap.timeline();
    tl_1
      .set(this.overlayDOM, {
        opacity: 0,
      })
      .to(this.overlayDOM, {
        opacity: 1,
        duration: 0.5,
      });

    var tl_2 = gsap.timeline();
    tl_2
      .set(this.title, {
        y: -10,
      })
      .to(this.title, {
        y: 0,
        duration: 0.5,
        ease: "expo.out",
      });

    var tl_3 = gsap.timeline();
    tl_3
      .set(this.description, {
        y: 10,
      })
      .to(this.description, {
        y: 0,
        duration: 0.5,
        ease: "expo.out",
      });

    // tl.play();
    document
      .querySelector(".close_overlay")
      .addEventListener("click", this.close.bind(this));
    // this.overlayDOM.addEventListener("click", this.close.bind(this));
  }

  async close() {
    gsap.to(this.overlayDOM, {
      opacity: 0,
      duration: 0.5,
    });
    await sleep(0.6);
    this.overlayDOM.classList.add("invisible");
  }
}

export { OverlayContent };
