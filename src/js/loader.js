import { sleep } from "./util";
import gsap from "gsap";

class Loader {
  constructor(loader, loadRef, delay, fadeTime) {
    this.loader = loader;
    this.loadRef = loadRef;
    this.delay = delay;
    this.fadeTime = fadeTime;
  }

  run() {
    window.addEventListener("load", this.completed.bind(this));
  }

  async completed() {
    gsap.to(this.loader, {
      opacity:0,
      duration: this.fadeTime,
      delay: this.delay,
    });
    await sleep(this.fadeTime + this.delay);
    this.loader.classList.add("invisible");
  }
}

export {
  Loader,
}