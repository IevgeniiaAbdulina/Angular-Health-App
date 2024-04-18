import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactFormFields } from '../../models/contact-form';
import { NameField } from '../../models/name-field';
import { EmailField } from '../../models/email-field';
import { PhoneField } from '../../models/phone-field';
import { MessageField } from '../../models/message-field';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactFormFields: ContactFormFields = {
    name: new NameField,
    email: new EmailField,
    phone: new PhoneField,
    message: new MessageField,
  };

  contactForm = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('^[a-zA-Z \-]*$')
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    phone: ['', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(10)
    ]],
    message: ['']
  })

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
