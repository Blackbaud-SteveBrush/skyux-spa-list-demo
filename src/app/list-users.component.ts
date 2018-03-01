import {
  Component
} from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html'
})
export class ListUsersComponent {
  public users: User[] = [
    { id: 1, name: 'Susan' },
    { id: 2, name: 'Dave' },
    { id: 3, name: 'Chuck' },
    { id: 4, name: 'Amanda' },
    { id: 5, name: 'Tiffany' }
  ];
}
