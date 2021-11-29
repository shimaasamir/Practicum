import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exercise3-instructions',
  template: `
    <section class="ex-section">
        <div>
          <h2>03. Bug 75% + 25% ⩼ 100% 🤔 </h2>
          <p>
            If the left side is 75% and the right side is 25% why does the right side doesn't fit in the empty space? <br>
            Can you help our developer to fit the right-side into it's place?
          <p>

          <h4>➡ Note</h4>
          <p>
            Don't change the layout.
          <h4>📄 File Name</h4>
          <p>
            <b>exercise3.component.ts</b>
          </p>
        </div>
        <div>
          <h3> Your Answare: </h3>
          <app-exercise3 class="ex-container"></app-exercise3>
        </div>
        <div>
          <h3> Solution Example: </h3>
          <img src='assets/layout-sum.png'  loading="lazy" alt="ex3" class="img-example">    
        </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Exercise3InstructionsComponent {

}
