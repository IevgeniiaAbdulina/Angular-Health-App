import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { SnackBarService } from './snack-bar.service';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID, TO_EMAIL } from '../api/api-data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // Text messages in the English language
  seccessMessageEN = 'Your message has been sent.';
  seccessActionEN = 'OK'
  errorMessageEN = 'An error occurred while sending the message.';
  errorActionEN = 'Please try again!'

  // Text messages in the Polish language
  seccessMessagePL = 'Twoja wiadomość została wysłana.';
  seccessActionPL = 'OK'
  errorMessagePL = 'Wystąpił błąd podczas wysyłania wiadomości.';
  errorActionPL = 'Spróbuj ponownie!';

  constructor(private snackBar: SnackBarService) { }

  sendEmail(input: any) {
    const serviceID = SERVICE_ID;
    const templateID = TEMPLATE_ID;
    const templateParams= {
      from_name: input.name,
      to: TO_EMAIL,
      name: input.name,
      message: input.message,
      email: input.email,
      phone: input.phone,
    };
    const options = {
      publicKey: PUBLIC_KEY
    };

    emailjs.send(serviceID, templateID, templateParams, options)
    .then(
      res => {
        console.log('SUCCESS!', res.status, res.text);
        this.snackBar.openSnackBar(this.seccessMessagePL, this.seccessActionPL, { panelClass: ['snackbar-success'] })
      },
      (err) => {
        console.log('FAILED...', err);
        this.snackBar.openSnackBar(this.errorMessagePL, this.errorActionPL, { panelClass: ['snackbar-error'] })
      }
    )
  }

}
