import { Component, HostBinding, Input, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-col',
  templateUrl: './ui-col.component.html',
  styleUrls: ['./ui-col.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [],
})

export class UiColComponent implements OnChanges {
  @Input() cols?: number;
  @Input() xs?: number;
  @Input() sm?: number;
  @Input() md?: number;
  @Input() lg?: number;
  @Input() xl?: number;
  @Input() alignX?: 'start' | 'center' | 'end';
  @HostBinding('class') hostClasses!: string;

  ngOnChanges(): void {
    this.hostClasses = this.getColumnClasses();
  }

  private getColumnClasses(): string {
    const classes = ['ui-col'];

    if (this.cols) {
      classes.push(`ui-col-${this.cols}`);
    }
    if (this.xs) {
      classes.push(`ui-col-xs-${this.xs}`);
    }
    if (this.sm) {
      classes.push(`ui-col-sm-${this.sm}`);
    }
    if (this.md) {
      classes.push(`ui-col-md-${this.md}`);
    }
    if (this.lg) {
      classes.push(`ui-col-lg-${this.lg}`);
    }
    if (this.xl) {
      classes.push(`ui-col-xl-${this.xl}`);
    }
    if (this.alignX) {
      classes.push(`ui-col-align-x-${this.alignX}`);
    }
    return classes.join(' ');
  }

}
