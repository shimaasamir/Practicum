import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-exercise1",
  template: `
    <div class="parent blue">
      <div class="child box coral" contenteditable>😋</div>
    </div>
  `,
  styles: [
    `
      .parent {
        display: grid;
        background: lightblue;
        width: 100%;
        height: 100%;
        min-width: fit-content;
        min-height: fit-content;
        overflow: auto;
        justify-items: center;
      }

      .child {
        padding: 0.5rem;
        border-radius: 10px;
        border: 1px solid red;
        background: lightpink;
        font-size: 2rem;
        text-align: center;
        width: fit-content;
        height: fit-content;
        place-self: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Exercise1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
