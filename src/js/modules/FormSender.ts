import Form from "./Form.ts";

export default class FormSender extends Form {
  constructor() {
    super()
  }

  private initResponseToServe(form: HTMLFormElement): void {
    if(!form) return

    form.addEventListener("submit", (event: Event) => {
      event.preventDefault()

      //@ts-ignore
      $(form).parsley().validate()
      //@ts-ignore
      if($(form).parsley().isValid()) {
        try {
          const url: string = form.action
          const formData = new FormData(form)

          fetch(url, {
            method: "POST",
            body: formData
          })
            .then((response) => {
              if (response.ok) {
                /* code */
              } else {
                console.log("Логика при отправки формы")
                throw Promise.reject(response)
              }
            })
        } catch (error) {
          if (error instanceof Error) console.error(error.message)
        }
      }
    })
  }

  public loopForms(): void {
    this.getForms.forEach((form: HTMLFormElement) => {
      this.initResponseToServe(form)
    })
  }

  public sendData(): void {
    this.loopForms()
  }
}