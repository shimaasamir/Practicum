import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exercise1-instructions',
  template: `
      <section class="ex-section">
        <div>
          <h2>01. Always Centered</h2>
          <p>
            With minimal change to the CSS set the child to always be in the center.

            <h4>📄 File Name</h4>
            <p>
              <b>exercise1.component.ts</b>
            </p>
          <p>
        </div>
        <div>
          <h3> Your Answare: </h3>
          <app-exercise1 class="ex-container"></app-exercise1>
        </div>
        <div>
          <h3> Solution Example: </h3>
          <img src="/assets/center.gif" loading="lazy" alt="ex1" class="img-example" />
        </div>
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Exercise1InstructionsComponent {

}
