export default class Form {
  protected forms: HTMLFormElement[];
  protected buttons: HTMLButtonElement[];
  protected inputs: HTMLInputElement[] | null;

  constructor() {
    this.forms = [...document.querySelectorAll<HTMLFormElement>(".js-form")]
    this.buttons = [...document.querySelectorAll<HTMLButtonElement>(".js-form-button")]
    this.inputs = null
  }

  public get getForms(): HTMLFormElement[] {
    return this.forms
  }

  public get getButtonsForms(): HTMLButtonElement[] {
    return this.buttons
  }

  public get getFormInputs(): HTMLInputElement[] | null {
    this.forms.map((form) => this.inputs = [...form.getElementsByTagName("input")])
    return this.inputs
  }
}