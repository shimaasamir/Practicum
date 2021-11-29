import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-exercise3",
  template: `
    <main>
      <header>
        <h1>Site</h1>
      </header>
      <div class="content">
        <section>
          <article>
            <h2>Title</h2>
            <p>Content</p>
          </article>
          <article>
            <h2>Title</h2>
            <p>Content</p>
          </article>
        </section>
        <aside>
          <div class="module">
            <h3>Right-Side</h3>
          </div>
        </aside>
      </div>
    </main>
  `,
  styles: [
    `
      main {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
      }
      header {
        background: lightblue;
      }
      .content {
        display: flex;
        flex-grow: 1;
      }
      section {
        background: lightgreen;
        width: 60%;
      }
      article {
        background: white;
        margin: 0 0 1rem 0;
      }
      aside {
        background: pink;
        width: 40%;
        /* height: 100%; */
        align-self: stretch;
      }
      header,
      article,
      section,
      .module {
        padding: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Exercise3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
