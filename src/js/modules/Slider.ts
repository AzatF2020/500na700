import Swiper from "swiper";
import {Autoplay, Navigation, Parallax} from "swiper/modules"
import {SwiperModule} from "swiper/types";
import "swiper/scss"

export default function InitSlider(): void {
  const sliders = document.querySelectorAll<HTMLDivElement>(".js-slider")

  function initSwiper(slider: HTMLDivElement, ...args: SwiperModule[]): void {
    if(!slider) return

    let swiper = new Swiper(slider, {
      modules: [Navigation, Parallax, ...args],
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3500
      },
      slidesPerView: "auto",
      parallax: true,
      speed: 750,
      watchOverflow: true,
      navigation: {
        prevEl: ".js-button-prev",
        nextEl: ".js-button-next",
      }
    })
    swiper.init();
  }

  sliders.forEach((slider: HTMLDivElement) => {
    let dataAttrModule = slider.dataset.autoplay;
    let dataAttrMonitor = slider.dataset.desktop;

    if(dataAttrMonitor === "false") {

      if(window.matchMedia("(max-width: 1024px)").matches) {
        initSwiper(slider)
        console.log(dataAttrMonitor === "false")
      }

    } else if(dataAttrModule === "true") {
      initSwiper(slider, Autoplay)
    } else {
      initSwiper(slider)
    }
  })
}