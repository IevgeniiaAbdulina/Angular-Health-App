import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

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
export class ContactFormComponent implements OnInit {
  clientContactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl('')
  });

  contactFormFields: ContactFormFields = {
    name: new NameField,
    email: new EmailField,
    phone: new PhoneField,
    message: new MessageField,
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.clientContactForm = this.formBuilder.group({
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
        Validators.maxLength(9)
      ]],
      message: ['']
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.clientContactForm.controls;
  };

  // Pipe "keyvalue" should not sort by default
  // https://github.com/angular/angular/issues/42490
  isOrder() {
    return 0;
  }

  onSubmitClientContactForm(): void {
    if (this.clientContactForm.invalid) {
      return;
    }

    console.log(this.clientContactForm.value);
    this.onResetClientContactForm();
  }

  onResetClientContactForm():void {
    this.clientContactForm.markAsPristine();
    this.clientContactForm.markAsUntouched();
    this.clientContactForm.reset();
  }
}
