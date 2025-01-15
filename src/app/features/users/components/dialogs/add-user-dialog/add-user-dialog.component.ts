import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersDataService } from '../../../services/users-data.service';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { UserData } from '../../../models/user-data';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatError
  ]
})
export class AddUserDialogComponent {
  
  nameForm: FormGroup;
  isEdit: boolean;

  constructor(
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isEdit: boolean; nameData?: UserData },
    private fb: FormBuilder,
    private userService: UsersDataService
  ) {
    this.isEdit = data.isEdit;

    this.nameForm = this.fb.group({
      id: [data.nameData?.id || null],
      name: [data.nameData?.name || '', Validators.required],
      details: [data.nameData?.details || '', Validators.required],
    });
  }

  save(): void {
    if(this.nameForm.invalid) {
      this.nameForm.markAllAsTouched();
      return;
    }
    if (this.isEdit) {
      this.userService.editUser(this.nameForm.value);
    } else {
      const { id, ...userData } = this.nameForm.value; 
      this.userService.addUser(userData);
    }
    this.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
