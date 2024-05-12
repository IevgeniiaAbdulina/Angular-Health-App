import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { SnackBarService } from './snack-bar.service';
import { environment } from 'src/environments/environment';

interface EmailJSResponse {
  message: string,
  action: string,
  class: string[]
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  responseSuccess: EmailJSResponse = {
    message: 'Twoja wiadomość została wysłana.',
    action: 'OK',
    class: ['snackbar-success']
  }

  responseError: EmailJSResponse = {
    message: 'Wystąpił błąd podczas wysyłania wiadomości.',
    action: 'Spróbuj ponownie!',
    class: ['snackbar-error']
  }

  constructor(private snackBar: SnackBarService) { }

  sendEmail(input: any) {
    const serviceID = environment.serviceID;
    const templateID = environment.templateID;
    const options = {
      publicKey: environment.publicKey
    };

    const templateParams= {
      from_name: input.name,
      to: environment.toEmail,
      name: input.name,
      message: input.message,
      email: input.email,
      phone: input.phone,
    };

    // Official EmailJS SDK for Browsers
    // https://www.npmjs.com/package/@emailjs/browser
    emailjs.send(serviceID, templateID, templateParams, options)
    .then(
      res => {
        console.log('SUCCESS!', res.status, res.text);
        this.snackBar.openSnackBar(this.responseSuccess.message, this.responseSuccess.action, { panelClass: this.responseSuccess.class })
      },
      (err) => {
        console.log('FAILED...', err);
        this.snackBar.openSnackBar(this.responseError.message, this.responseError.action, { panelClass: this.responseError.class })
      }
    )
  }

}
