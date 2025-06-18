import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';
  redirectToG() {
    window.location.href = 'https://github.com/NahuelVega1913';
  }
  redirectToL() {
    window.location.href = 'https://www.linkedin.com/in/nahuel-vega-8b8010212/';
  }
}
