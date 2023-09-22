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
      centeredSlides: true,
      spaceBetween: 20,
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

    swiper.init()
  }

  sliders.forEach((slider: HTMLDivElement) => {
    let dataAttrModule = slider.dataset.autoplay

    dataAttrModule === "true" ?
      initSwiper(slider, Autoplay) :
      initSwiper(slider)
  })
}