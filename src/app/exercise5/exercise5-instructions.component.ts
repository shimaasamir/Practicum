import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exercise5-instructions',
  template: `
    <section class="ex-section">
        <div>
          <h2>05. Cards Animation </h2>
          <p>
            Let's build some cards!
          </p>
          <p>
            This exercise is focused on Animations and Creativity.<br>
            <b>Improvisation and creativity is welcome!</b> It's the perfect oportunity for you to show off your animations skills!<br>
            Try to fulfill all the requirements. <b>But</b> if you can do even better, go ahead and show us some awsomeness.
          </p>

          <h4><b>Requirements:</b></h4>
          <ul>
            <li>When cards are hovered spread them.</li>
            <li>When card is hovered: move it a little up, add some outline.</li>
            <li>When one card is hovered all the other cards have different background.</li>
            <li>When card is selected: it will move outside, no outline, white background.</li>
            <li>Notice the non selected cards behave as before the selection.</li>
          </ul>
          
          <h4>✨<b>Bonus!</b>✨</h4>
          <p>
            Use <b>Angular</b> animations. <br>
          </p>

          <h4>✨<b>Bonus!</b></h4>
          <p>
            This task is also about creativity, feel free to improve the style of the cards.
          </p>

          <h4>📄 File Name</h4>
          <p>
            <b>exercise5.component.ts</b>
          </p>
          <!-- <p></p> -->
        </div>
        <div>
          <h3> Your Answare: </h3>
          <app-exercise5 class="ex-container"></app-exercise5>
        </div>
        <div>
          <h3> Example: </h3>
          <img class="img-example" src='assets/cardsv2.gif' alt="">  
        </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Exercise5InstructionsComponent {

}
