import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-exercise4-instructions",
  template: `
    <section class="ex-section">
      <div>
        <h2>04. 🎨 Style a button</h2>
        <p>
          Our UX export asked you to "Using CSS (and SCSS) properties alone,
          recreate the button provided in the examples".
        </p>

        <p></p>

        <h4>➡ Notes</h4>
        <ul>
          <li>
            Try to make the implementation as close as possible to the example.
          </li>
          <li>
            Write a maintainable code as this button is a
            <b>reusable</b> component of a large <b>production</b> app.
          </li>
          <li>
            Keep the CSS/SCSS <b>simple</b>, <b>readable</b> and <b>DRY</b>.
          </li>
        </ul>

        <h4>📄 File Name</h4>
        <p>
          <b>exercise4.component.scss</b>
        </p>
      </div>
      <div>
        <h3>Your Answare:</h3>
        <app-exercise4
          buttonTitle="Checkout"
          leftIcon="fas fa-star"
          rightIcon="fas fa-star"
          class="ex-container"
        ></app-exercise4>
      </div>
      <div>
        <h3>Example:</h3>
        <img src="assets/css-button.png" alt="" />
        <img class="img-example" src="assets/button.gif" alt="" />
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Exercise4InstructionsComponent {}
