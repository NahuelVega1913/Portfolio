import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Image } from 'primeng/image';
import { Card, CardModule } from 'primeng/card';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { FocusTrapModule } from 'primeng/focustrap';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AutoFocusModule } from 'primeng/autofocus';
import { Carousel } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CommonModule, NgClass } from '@angular/common';

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
    Carousel,
    TagModule,
  ],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css',
})
export class AplicationComponent {
  name: string = '';

  email: string = '';

  accept: boolean = false;

  products: undefined[] | undefined;

  responsiveOptions: any[] | undefined;
}
