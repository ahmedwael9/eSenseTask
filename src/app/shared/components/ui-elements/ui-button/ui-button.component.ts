import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UiIconComponent } from '../ui-icon/ui-icon.component';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, MatButtonModule, UiIconComponent, MatProgressSpinnerModule]
})
export class UiButtonComponent implements OnChanges {
  @Input() label?: string;
  @Input() type?: 'button' | 'submit' = 'button';
  @Input() disabled? = false;
  @Input() color?: 'primary' | 'accent' | 'warn';
  @Input() variant?: 'text' | 'flat' | 'stroked' = 'text';
  @Input() size?: 'x-small' | 'small' | 'large';
  @Input() radius?: 'rounded' | 'pill' = 'pill';
  @Input() fullWidth? = false;
  @Input() loading? = false;
  @Input() transparent = false;
  
  @Input() icon?: string;
  @Input() iconPosition?: 'start' | 'end' = 'start';
  @Input() iconColor?: 'primary' | 'accent' | 'warn';
  @Input() iconSize?: 'small' | 'medium' | 'large' | 'x-large' = 'small';
  @Input() showDropdownIcon? = false;

  @HostBinding('class.w-100') isFullWidth = this.fullWidth;
  @HostBinding('class.disabled') isDisabled = this.disabled;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled']) {
      this.isDisabled = this.disabled;
    }
  }

  getButtonClasses(): string {
    const classes = ['ui-button'];
    
    if (!!this.icon && !this.label) {
      classes.push('ui-button-icon-only');
    }
    if (this.label && (this.icon || this.loading)) {
      classes.push('ui-button-enable-spacer');
    }
    if (this.size) {
      classes.push(`ui-button-size-${this.size}`);
    }
      if (this.radius) {
      classes.push(`ui-button-radius-${this.radius}`);
    }
    if (this.fullWidth) {
      classes.push('ui-button-full-width');
    }
    if (this.transparent) {
      classes.push('ui-button-transparent');
    }
    return classes.join(" ");
  }
}
