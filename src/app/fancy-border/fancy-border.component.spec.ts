import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBorderComponent } from './fancy-border.component';

describe('FancyBorderComponent', () => {
  let component: FancyBorderComponent;
  let fixture: ComponentFixture<FancyBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
