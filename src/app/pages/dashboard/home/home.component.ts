import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UiButtonComponent } from "../../../shared/components/ui-elements/ui-button/ui-button.component";
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../../../features/users/components/dialogs/add-user-dialog/add-user-dialog.component';
import { UsersDataService } from '../../../features/users/services/users-data.service';
import { map, Observable, startWith, switchMap } from 'rxjs';
import { UserData } from '../../../features/users/models/user-data';
import { UserCardComponent } from '../../../features/users/components/cards/user-card/user-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatSlideToggleModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    UserCardComponent
],
})
export class HomeComponent {
  searchControl = new FormControl('');
  control = new FormControl('',[Validators.required]);
  users$: Observable<UserData[]>;
  filteredUsers$!: Observable<UserData[]>;

  constructor(private usersDataService: UsersDataService, private dialog: MatDialog) {
    this.users$ = this.usersDataService.users$;
    this.filteredUsers$ = this.searchControl.valueChanges.pipe(startWith(''), 
    switchMap((search: any) =>
      this.users$.pipe(
        map((users) =>
          users.filter(
            (user) =>
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.details.toLowerCase().includes(search.toLowerCase())
          )
        )
      )
    )
  );
  }

  openAddNamePopup(): void {
    this.dialog.open(AddUserDialogComponent, {
      data: { isEdit: false },
    });
  }

  onSearchChange(value: string) {
  }


}
