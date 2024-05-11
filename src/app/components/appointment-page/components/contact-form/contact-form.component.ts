import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactFormFields } from '../../models/contact-form';
import { NameField } from '../../models/name-field';
import { EmailField } from '../../models/email-field';
import { PhoneField } from '../../models/phone-field';
import { MessageField } from '../../models/message-field';
import { CustomErrorStateMatcher } from '../../models/custom-error-state-matcher';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  // Error when invalid control is dirty, touched, or submitted.
  // * Note: ErrorStateMatcher is only in angular material - and not a part of standard angular forms.
  // https://material.angular.io/components/input/overview#changing-when-error-messages-are-shown
  matcher = new CustomErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

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

    this.contactService.sendEmail(this.clientContactForm.value);
    this.onResetClientContactForm();
  }

  onResetClientContactForm():void {
    this.clientContactForm.reset();
  }
}
