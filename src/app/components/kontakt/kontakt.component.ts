import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  lastname: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
})
export class ContactComponent {
  form: ContactForm = {
    name: '',
    lastname: '',
    email: '',
    message: '',
  };

  send() {
    alert('Poslano!');
    emailjs
      .send(
        'service_46zgty5',
        'template_1ysdnii',
        { ...this.form },
        {
          publicKey: '93Gu2XZXlbdVJ49uH',
        }
      )
      .then(() => {
        console.log('Poslano');
      });
  }
}
