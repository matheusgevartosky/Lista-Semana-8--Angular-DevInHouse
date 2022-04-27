import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXE1Component } from './exe1.component';

describe('EXE1Component', () => {
  let component: EXE1Component;
  let fixture: ComponentFixture<EXE1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EXE1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EXE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
