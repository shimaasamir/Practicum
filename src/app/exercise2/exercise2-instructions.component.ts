import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exercise2-instructions',
  template: `
  <section class="ex-section">
      <div>
        <h2>02. Classic Layout </h2>
        <p>
          Re-create the classical layout: <br>
          Header, Left Sidebar, right panel, main Content and footer
          <br><br>
          Can you recreate the layout from the example?

          <h4>📄 File Name</h4>
          <p>
            <b>exercise2.component.ts</b>
          </p>

          <h3>❓Questions❓</h3>
          <p>
            What other options can you suggest for the layout?<br>
            Why did you choose that method over the others?<br>
          </p>
        <p>
      </div>
      <div>
        <h3> Your Answare: </h3>
        <app-exercise2 class="ex-container"></app-exercise2>
      </div>
      <div>
        <h3> Solution Example: </h3>
        <img src='assets/classic-layout.png' loading="lazy" alt="ex2" class="img-example">    
      </div>
  </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Exercise2InstructionsComponent {

}
