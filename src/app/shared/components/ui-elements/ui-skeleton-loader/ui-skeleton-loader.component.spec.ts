import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSkeletonLoaderComponent } from './ui-skeleton-loader.component';

describe('UiSkeletonLoaderComponent', () => {
  let component: UiSkeletonLoaderComponent;
  let fixture: ComponentFixture<UiSkeletonLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSkeletonLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
