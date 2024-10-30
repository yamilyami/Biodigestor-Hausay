import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSOmos01Component } from './quienes-somos01.component';

describe('QuienesSOmos01Component', () => {
  let component: QuienesSOmos01Component;
  let fixture: ComponentFixture<QuienesSOmos01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuienesSOmos01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienesSOmos01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
