import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'shared-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
  standalone: true,
  imports: [CommonModule ,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  encapsulation: ViewEncapsulation.None,
})
export class UiInputComponent implements OnInit {

  @Input() control: FormControl = new FormControl('');
  @Input() required = false;
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() placeholder = '';
  @Input() suffixText = '';
  @Input() label = '';
  @Input() hint = '';
  @Input() icon = '';
  @Input() hideOptionalLabel = false;
  @Input() fullWidth = false;
  @Input() noGutters = false;
  @Input() readonly = false;


  isOptional = false;
  inputType = 'text';

  constructor() { }

  ngOnInit(): void {
    this.isOptional = Boolean(!this.control.errors?.['required']);
    this.inputType = this.type;
  }

  getInputTextClasses(): string {
    const classes = [];

    if (this.fullWidth) {
      classes.push('ui-input-text-full-width');
    }
    if(this.noGutters) {
      classes.push('ui-input-text-no-gutters');
    }
    if (this.readonly) {
      classes.push('ui-input-text-readonly');
    }
    return classes.join(" ");
  }
  
}
