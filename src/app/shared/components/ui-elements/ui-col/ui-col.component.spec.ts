import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiColComponent } from './ui-col.component';

describe('UiColComponent', () => {
  let component: UiColComponent;
  let fixture: ComponentFixture<UiColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
