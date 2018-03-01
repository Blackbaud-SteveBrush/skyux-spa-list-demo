import {
  Component
} from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
}

@Component({
  selector: 'list-demo-final',
  templateUrl: './final.component.html'
})
export class ListDemoFinalComponent {
  public users: User[] = [
    { id: 1, name: { first: 'Susan', last: 'Smith' } },
    { id: 2, name: { first: 'Dave', last: 'Peters' } },
    { id: 3, name: { first: 'Chuck', last: 'Norris' } },
    { id: 4, name: { first: 'Amanda', last: 'Hendricks' } },
    { id: 5, name: { first: 'Tiffany', last: 'Jones' } }
  ];

  public data$ = new BehaviorSubject<User[]>(this.users);

  public changeData() {
    this.data$.next([
      { id: 2, name: { first: 'Dave', last: 'Peters' } }
    ]);
  }
}
