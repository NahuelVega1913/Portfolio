import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AplicationComponent } from './aplication/aplication.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AplicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';
}
