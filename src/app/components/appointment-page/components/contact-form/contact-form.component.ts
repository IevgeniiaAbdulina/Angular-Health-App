import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm = this.formBuilder.group({
    name: ['', Validators.required ],
    email: ['', Validators.required ],
    phoneNumber: ['', Validators.required ],
    messageText: ['']
  })

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.log(this.contactForm.value)
  }
}
