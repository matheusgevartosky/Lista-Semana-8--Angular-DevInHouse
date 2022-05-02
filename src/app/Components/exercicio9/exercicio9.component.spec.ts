import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio9Component } from './exercicio9.component';

describe('Exercicio9Component', () => {
  let component: Exercicio9Component;
  let fixture: ComponentFixture<Exercicio9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercicio9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercicio9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
