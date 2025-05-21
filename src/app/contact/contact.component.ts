import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    contact = {
    name: '',
    email: '',
    message: ''
  };

  sendMessage(){
    const templateParams = {
      name: this.contact.name,
      email: this.contact.email,
      message: this.contact.message
    }

    emailjs.send(
      environment.emailjs.serviceID,
      environment.emailjs.templateID,
      templateParams,
      environment.emailjs.publicKey
    )
    .then(
      (response)=>{
        console.log('SUCCESS!', response.status, response.text);
        alert("Your Message Has Been Sent Successfully");
        this.contact = {name:"",email:"",message:""};
      },
      (err)=>{
        console.error('FAILED...', err);
        alert('Something went wrong. Please try again later.');
      }
    )
  }
}
