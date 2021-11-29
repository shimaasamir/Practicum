import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  template: `
    <div class="parent">
      <header><h1 contenteditable>Header</h1></header>
      <div class="left-side" contenteditable>Left Sidebar</div>
      <main contenteditable>🐱‍👤</main>
      <div class="right-side" contenteditable>Right Sidebar</div>
      <footer contenteditable>Footer Content</footer>
    </div>
  `,
  styles: [`
    .parent {
      height: 100%;
      width: 100%;
    }
    
    header {
      background: lightpink;
    }

    .left-side {
      background: lightblue;
    }

    main {
      background: coral;
      font-size: 5rem;
    }

    .right-side {
      background: yellow;
    }

    footer {
      background: wheat;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Exercise2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
