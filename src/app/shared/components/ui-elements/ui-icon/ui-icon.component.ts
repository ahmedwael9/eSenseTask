import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_MATERIAL_ICON_NAMES } from '../../../../core/constants/custom-material-icon-names';

@Component({
  selector: 'ui-icon',
  templateUrl: './ui-icon.component.html',
  styleUrls: ['./ui-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class UiIconComponent implements OnInit {
  @Input({ required: true }) name = '';
  @Input() size?: 'small' | 'medium' | 'large' | 'x-large' = 'small';
  @Input() color?: 'primary' | 'accent' | 'warn' | 'white'|'';
  @Input() margin?: 'start' | 'end';
  @Input() rotate = false;
  
  ngOnInit(): void {
    this.validateName();
  }

  validateName() {
    if (CUSTOM_MATERIAL_ICON_NAMES.indexOf(this.name) === -1) {
      throw new Error(`Invalid icon name "${this.name}". Must be one of: \n${CUSTOM_MATERIAL_ICON_NAMES.join(', ')}`);
    }
  }

  getIconClasses(): string {
    const classes = ['ui-button'];

    if (this.size) {
      classes.push(`ui-icon-size-${this.size}`);
    }
    if (this.margin) {
      classes.push(`ui-icon-margin-${this.margin}`);
    }
    if (this.color === 'white') {
      classes.push('ui-icon-color-white');
    }
    if (this.rotate) {
      classes.push('ui-icon-rotate');
    }
    return classes.join(" ");
  }
}
