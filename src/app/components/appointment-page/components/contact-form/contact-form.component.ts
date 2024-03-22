import { Component } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';

interface formControl {
  controlName: string;
  id: string;
  type: string;
  placeholder: string;
  label: string;
  errorMessage: string;
}

interface formObj {
  [control: string]: formControl;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactFormFields: formObj = {
    name: {
      controlName: 'name',
      id: 'name',
      type: 'text',
      placeholder: 'Wpisz swoje imię i nazwisko',
      label: 'Imię i nazwisko',
      errorMessage: 'Coś poszło nie tak. Spróbuj ponownie.'
    },
    email: {
      controlName: 'email',
      id: 'email',
      type: 'email',
      placeholder: 'Wprowadź adres e-mail',
      label: 'Adres e-mail',
      errorMessage: 'Coś poszło nie tak. Spróbuj ponownie.'
    },
    phone: {
      controlName: 'phone',
      id: 'phone',
      type: 'number',
      placeholder: 'Wpisz numer telefonu',
      label: 'Telefon komórkowy',
      errorMessage: 'Coś poszło nie tak. Spróbuj ponownie.'
    },
    message: {
      controlName: 'message',
      id: 'message',
      type: 'text',
      placeholder: 'Wpisz swoją wiadomość...',
      label: 'Wiadomość',
      errorMessage: 'Wiadomość jest za długa.'
    }
  }

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required ],
    phone: ['', Validators.required ],
    message: ['']
  })

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.log(this.contactForm.value)
  }
}
