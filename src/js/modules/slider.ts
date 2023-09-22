import Swiper from "swiper";
import {Navigation, Parallax} from "swiper/modules"
import "swiper/scss"

export default function initSlider(): void {
  const sliders = document.querySelectorAll<HTMLDivElement>(".js-slider")

  function initSwiper(slider: HTMLDivElement) {
    if(!slider) return

    const swiper = new Swiper(slider, {
      modules: [Navigation, Parallax],
      centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: "auto",
      parallax: true,
      speed: 750,
      watchOverflow: true,
      allowTouchMove: false,
      navigation: {
        prevEl: ".js-button-prev",
        nextEl: ".js-button-next",
      }
    })

    return swiper.init()
  }

  sliders.forEach((slider: HTMLDivElement) => {
    initSwiper(slider)
  })
}