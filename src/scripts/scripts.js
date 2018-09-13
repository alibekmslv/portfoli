require("./modules/PageLoader");
require("./modules/MobileMenu");
require("./modules/Tabs");
import MoveTo from "moveto";
import Rellax from "rellax";
// import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", function() {
  const moveTo = new MoveTo({
    duration: 1000
  });
  const triggers = document.getElementsByClassName("is-trigger");
  for (let i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
});

new Rellax(".portrait", {
  speed: 0.5,
  center: true
});

// ScrollReveal().reveal(".skills div", {
//   delay: 1000,
//   scale: 0.85
// });
