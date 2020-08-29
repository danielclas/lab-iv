import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularpromedioComponent } from './calcularpromedio.component';

describe('CalcularpromedioComponent', () => {
  let component: CalcularpromedioComponent;
  let fixture: ComponentFixture<CalcularpromedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularpromedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularpromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
