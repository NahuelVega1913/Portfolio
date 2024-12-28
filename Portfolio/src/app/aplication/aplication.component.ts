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

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [
    ButtonModule,
    Card,
    CardModule,
    FocusTrapModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    IconFieldModule,
    InputIconModule,
    AutoFocusModule,
  ],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css',
})
export class AplicationComponent {
  name: string = '';

  email: string = '';

  accept: boolean = false;
}
