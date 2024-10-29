import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro01Component } from './registro01.component';

describe('Registro01Component', () => {
  let component: Registro01Component;
  let fixture: ComponentFixture<Registro01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registro01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registro01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
