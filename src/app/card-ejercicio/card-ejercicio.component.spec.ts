import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEjercicioComponent } from './card-ejercicio.component';

describe('CardEjercicioComponent', () => {
  let component: CardEjercicioComponent;
  let fixture: ComponentFixture<CardEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
