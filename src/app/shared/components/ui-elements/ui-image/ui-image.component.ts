import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import { UiSkeletonLoaderComponent } from '../ui-skeleton-loader/ui-skeleton-loader.component';

@Component({
  selector: 'ui-image',
  templateUrl: './ui-image.component.html',
  styleUrls: ['./ui-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    UiSkeletonLoaderComponent,
    UiIconComponent,
  ],
})
export class UiImageComponent implements OnInit {
  @Input({ required: true }) src = "";
  @Input() alt? = "";
  @Input() ratio?: 'square' | 'landscape' | 'portrait' = 'square';
  @Input() width?: string = '';
  @Input() height?: string = '';
  @Input() maxWidth?: string = '';
  @Input() radius?: 'sharp' | 'rounded' | 'circle' = 'sharp';
  @Input() position: 'top' | 'center' | 'bottom' | 'left' | 'right' = 'center';
  @Input() type: 'cover' | 'contain' = 'contain';
  @Input() variant?: 'flat' | 'stroked' = 'flat';

  @HostBinding('style.maxWidth') maxWidthStyle?: string = this.maxWidth;

  isLoading = true;
  isError = false;

  ngOnInit(): void {
    this.maxWidthStyle = this.maxWidth;
  }

  onImageLoad() {
    this.isLoading = false;
  }

  onImageError() {
    this.isLoading = false;
    this.isError = true;
  }

  getImageClasses(): string {
    const classes = [];

    if (this.ratio) {
      classes.push(`ui-image-ratio-${this.ratio}`);
    }
    if (this.radius) {
      classes.push(`ui-image-radius-${this.radius}`);
    }
    if (this.position) {
      classes.push(`ui-image-position-${this.position}`);
    }
    if (this.type) {
      classes.push(`ui-image-type-${this.type}`);
    }
    if (this.variant) {
      classes.push(`ui-image-variant-${this.variant}`);
    }
    return classes.join(" ");
  }
  getImageStyles(): { [key: string]: string } {
    const styles: { [key: string]: string } = {};

    if (this.width) {
      styles['width'] = this.width;
    }
    if (this.height) {
      styles['height'] = this.height;
    }
    if (this.width && this.height) {
      styles['padding'] = '0';
    }
    return styles;
  }
}
