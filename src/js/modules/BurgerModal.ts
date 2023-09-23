import gsap from "gsap"

export default function InitBurgerModal(): void {
  const burgerModalParent = document.querySelector<HTMLDivElement>(".burger-modal");
  const burgerButton = document.querySelector<HTMLButtonElement>(".js-burger-button");
  const burgerModal = document.querySelector<HTMLDivElement>(".js-burger-modal");

  let intermediateModalValue: boolean = false;

  if(!burgerModal || !burgerButton || !burgerModalParent) return

  gsap.set([burgerModal], {x: "100%"})
  gsap.set([burgerModalParent], {autoAlpha: 0})

  function openModal() {
    let tl = gsap.timeline()

    tl.to(burgerModalParent, {
      autoAlpha: 1,
      ease: "power2"
    })
    tl.to(burgerModal, {
      ease: "power2",
      x: "0%"
    })

    burgerButton!.classList.add("header__burger-btn--active")
    document.body.style.overflow = "hidden"
  }

  function closeModal() {
    let tl = gsap.timeline()

    tl.to(burgerModal, {
      ease: "power2",
      x: "100%"
    })
    tl.to(burgerModalParent, {
      autoAlpha: 0,
      ease: "power2"
    })

    burgerButton!.classList.remove("header__burger-btn--active")
    document.body.style.overflow = "scroll"
  }

  function toggleModal(): void {
    intermediateModalValue = !intermediateModalValue

    intermediateModalValue ? openModal() : closeModal()
  }

  burgerButton.addEventListener("click", toggleModal)
}