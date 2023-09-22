import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export default function InitAccordion(): void {
  const accordions = document.querySelectorAll<HTMLDivElement>(".js-accord")

  function initAccordionElement(accordion: HTMLDivElement): void {
    if(!accordion) return

    new Accordion(accordion, {
      duration: 400
    })
  }

  accordions.forEach((accordion: HTMLDivElement) => {
    initAccordionElement(accordion)
  })


}