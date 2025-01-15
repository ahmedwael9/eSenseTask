import { Component, Input } from '@angular/core';
import { UserData } from '../../../models/user-data';
import { AddUserDialogComponent } from '../../dialogs/add-user-dialog/add-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UsersDataService } from '../../../services/users-data.service';
import { UiButtonComponent } from '../../../../../shared/components/ui-elements/ui-button/ui-button.component';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  standalone: true,
  imports: [
    UiButtonComponent
  ]
})
export class UserCardComponent {
  @Input() userData: UserData;

  constructor(private dialog: MatDialog, private usersDataService: UsersDataService) { 
    this.userData = {
      id: 0,
      name: '',
      details: '',
    }
  }

  editUser(user: UserData): void {
    this.dialog.open(AddUserDialogComponent, {
      data: { isEdit: true, nameData: user },
    });
  }

  deleteUser(id: number): void {
    this.usersDataService.deleteUser(id);
  }

}
