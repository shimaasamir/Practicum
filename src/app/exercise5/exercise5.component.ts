import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exercise5',
  templateUrl: './exercise5.component.html',
  styleUrls: ['./exercise5.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Exercise5Component {

  selected?: string;

  cards = [{
    kind: 'suitdiamonds',
    value: 'A'
  },
  {
    kind: 'suithearts',
    value: 'A'
  },
  {
    kind: 'suitclubs',
    value: 'A'
  },
  {
    kind: 'suitspades',
    value: 'A'
  }];

  countCards = this.cards.length;

  select(kind: string) {
    if (this.selected === kind)
      this.selected = undefined;
    else
      this.selected = kind;
  }
}
