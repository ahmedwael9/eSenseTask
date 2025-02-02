import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiImageComponent } from './ui-image.component';

describe('UiImageComponent', () => {
  let component: UiImageComponent;
  let fixture: ComponentFixture<UiImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
