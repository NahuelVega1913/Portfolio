import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { Image } from 'primeng/image';
import { Card, CardModule } from 'primeng/card';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { FocusTrapModule } from 'primeng/focustrap';

import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AutoFocusModule } from 'primeng/autofocus';
import { Carousel } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CommonModule, NgClass } from '@angular/common';
import { TextareaModule } from 'primeng/textarea';
import { IftaLabelModule } from 'primeng/iftalabel';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { Ripple } from 'primeng/ripple';
import { Timeline } from 'primeng/timeline';

import emailjs from 'emailjs-com';

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [
    ButtonModule,
    Card,
    CommonModule,
    CardModule,
    FocusTrapModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    IconFieldModule,
    InputIconModule,
    AutoFocusModule,
    ReactiveFormsModule,
    Carousel,
    Timeline,
    Toast,
    Ripple,
    TagModule,
    TextareaModule,
    IftaLabelModule,
  ],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css',
  providers: [MessageService],
})
export class AplicationComponent {
  name: string = '';

  email: string = '';
  message: string = '';

  accept: boolean = false;

  products: undefined[] | undefined;
  events: any[];
  responsiveOptions: any[] | undefined;

  constructor(private messageService: MessageService) {
    this.events = [
      {
        status: 'Studies',
        date: '01/2023 ',
        dateend: '11/2024',
        icon: 'pi pi-building-columns',
        color: '#9C27B0',
        image: 'https://avatars.githubusercontent.com/u/44374521?s=280&v=4',
        description:
          'In this university, over the course of 2 years, I have obtained the title of Technical Degree in Programming. This program has provided me with a solid foundation in various programming languages and modern development tools, preparing me to tackle real-world challenges in the field of software development.',
      },
      {
        status: 'Developing',
        date: '11/2024',
        dateend: 'Present',
        icon: 'pi pi-briefcase',
        color: '#673AB7',
        description:
          'Currently, I am freelancing, offering tailored solutions to meet diverse client needs while managing projects independently and ensuring high-quality results.',
      },
    ];
  }

  save() {
    if (this.name === '' || this.email === '' || this.message === '') {
      this.showError();
    } else {
      const serviceID = 'service_v9ks44m';
      const templateID = 'template_nz2gl4a';
      const userID = 'KP045_-SL1KuCwBuw';
      // Opcional, si tienes un userID

      const templateParams = {
        from_name: this.name,
        email_id: this.email,
        message: this.message,
      };

      emailjs.send(serviceID, templateID, templateParams, userID).then(
        () => {
          this.showSuccess();
        },
        (err) => {
          this.showError();
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'An error occurred, please try again later',
          });
        }
      );
    }
  }
  copyToClipboard() {
    const textToCopy = 'nahuelvegacsharp@gmail.com';
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Text copied to clipboard',
        });
      })
      .catch((err) => {});
  }
  redirectTo(url: string) {
    window.open(url);
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please fill all the fields',
    });
  }
  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message sent',
    });
  }
}
