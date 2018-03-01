import {
  Component
} from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'list-demo',
  templateUrl: './list-demo.component.html'
})
export class ListDemoComponent {
  public users: User[] = [
    { id: 1, name: 'Susan' },
    { id: 2, name: 'Dave' },
    { id: 3, name: 'Chuck' },
    { id: 4, name: 'Amanda' },
    { id: 5, name: 'Tiffany' }
  ];
}
