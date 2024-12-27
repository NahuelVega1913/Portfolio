import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Image } from 'primeng/image';
import { Card, CardModule } from 'primeng/card';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [ButtonModule, Card, CardModule],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css',
})
export class AplicationComponent {}
