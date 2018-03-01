import {
  Component
} from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Person {
  id: number;
  name: {
    first: string;
    last: string;
  };
}

@Component({
  selector: 'list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.scss']
})
export class ListDemoComponent {
  public people = new BehaviorSubject<Person[]>([
    { id: 1, name: { first: 'Susan', last: 'Smith' } },
    { id: 2, name: { first: 'Dave', last: 'Peters' } },
    { id: 3, name: { first: 'Chuck', last: 'Norris' } },
    { id: 4, name: { first: 'Susan', last: 'Hendricks' } },
    { id: 5, name: { first: 'Susan', last: 'Jones' } }
  ]);

  public changeData() {
    this.people.next([
      { id: 2, name: { first: 'Dave', last: 'Peters' } }
    ]);
  }
}
