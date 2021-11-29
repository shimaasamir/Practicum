import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="meta">
      <h1> Practicum </h1>
    </div>

    <app-exercise1-instructions class="section-container ex-section"></app-exercise1-instructions>
    <app-exercise2-instructions class="section-container ex-section"></app-exercise2-instructions>
    <app-exercise3-instructions class="section-container ex-section"></app-exercise3-instructions>
    <app-exercise4-instructions class="section-container ex-section"></app-exercise4-instructions>
    <app-exercise5-instructions class="section-container ex-section"></app-exercise5-instructions>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'css-practicum';
}
