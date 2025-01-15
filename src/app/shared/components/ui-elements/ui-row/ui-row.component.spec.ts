import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRowComponent } from './ui-row.component';

describe('UiRowComponent', () => {
  let component: UiRowComponent;
  let fixture: ComponentFixture<UiRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
