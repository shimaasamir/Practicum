import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-exercise4",
  template: `
    <div class="button-container">
      <button onClick=" clickBtn " class="checkout-btn">
        <i
          *ngIf="leftIcon"
          class="
         {{ leftIcon }}"
        ></i>
        {{ buttonTitle }}
        <i
          *ngIf="rightIcon"
          class="
         {{ rightIcon }}"
        ></i>
      </button>
    </div>
  `,
  styleUrls: ["./exercise4.component.scss"],
})
export class Exercise4Component implements OnInit {
  @Input() buttonTitle: string = "";
  @Input() clickBtn?: any;
  @Input() leftIcon?: string;
  @Input() rightIcon?: string;
  constructor() {}

  ngOnInit(): void {}
}
