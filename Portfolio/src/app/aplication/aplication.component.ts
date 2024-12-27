import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Image } from 'primeng/image';
import { Card, CardModule } from 'primeng/card';

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [ButtonModule, Image, Card],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css',
})
export class AplicationComponent {}
