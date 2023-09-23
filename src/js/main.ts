import "jquery/dist/jquery.slim.min.js"
import InitSlider from "./modules/Slider.ts";
import InitAccordion from "./modules/Accordion.ts";
import FormValidate from "./modules/FormValidate.ts";
import FormSender from "./modules/FormSender.ts";
import InitBurgerModal from "./modules/BurgerModal.ts";

window.addEventListener("DOMContentLoaded", () => {
  InitBurgerModal()
  InitSlider()
  InitAccordion()

  new FormSender().sendData()
  new FormValidate().render()
})