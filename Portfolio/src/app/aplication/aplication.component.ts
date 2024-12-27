import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [ButtonModule, Image],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css',
})
export class AplicationComponent {}
