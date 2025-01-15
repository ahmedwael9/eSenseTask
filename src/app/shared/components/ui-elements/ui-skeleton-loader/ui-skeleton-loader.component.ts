import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-skeleton-loader',
  templateUrl: './ui-skeleton-loader.component.html',
  styleUrls: ['./ui-skeleton-loader.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule],
})
export class UiSkeletonLoaderComponent {
  @Input() type: 'text' | 'image' | 'button' = 'text';
  @Input() ratio?: 'square' | 'landscape' | 'portrait' = 'square';
  @Input() maxWidth? = '72px';
  @Input() fullWidth? = false;
  @Input() fullHeight? = false;

  getLoaderClasses(): string {
    const classes = [];

    if (this.fullWidth) {
      classes.push('ui-skeleton-loader-full-width');
    }
    if (this.fullHeight) {
      classes.push('ui-skeleton-loader-full-height');
    }
    if (this.type) {
      classes.push(`ui-skeleton-loader-type-${this.type}`);
    }
    if (this.ratio && this.type === 'image') {
      classes.push(`ui-skeleton-loader-type-image-ratio-${this.ratio}`);
    }

    return classes.join(' ');
  }
}
