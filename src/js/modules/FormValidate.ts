import Form from "./Form.ts";
import validator from "validator";

export default class FormValidate extends Form {
  protected validityInputs: Map<HTMLInputElement, boolean>
  protected buttonActiveClass: string | undefined

  constructor() {
    super()

    this.validityInputs = new Map()
    this.buttonActiveClass = "sub__form-button--active"
  }

  private initValidationInput(validityInputs: boolean[]): void {
    this.getButtonsForms.forEach((button: HTMLButtonElement) => {
      if(!button) return

      if(!validityInputs.includes(false)) {
        button.disabled = false
        button.classList.add(this.buttonActiveClass!)
      } else {
        button.disabled = true
        button.classList.remove(this.buttonActiveClass!)
      }
    })
  }

  private validate() {
    this.getFormInputs?.forEach((input: HTMLInputElement) => {
      this.validityInputs.set(input, false)
      input.addEventListener("input", () => {
        this.validityInputs.set(input, !validator.isEmpty(input.value))

        this.initValidationInput([...this.validityInputs.values()])
      })
    })
  }

  public render(): void {
    this.validate()
  }
}