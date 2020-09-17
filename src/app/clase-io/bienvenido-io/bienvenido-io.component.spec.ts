import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidoIoComponent } from './bienvenido-io.component';

describe('BienvenidoIoComponent', () => {
  let component: BienvenidoIoComponent;
  let fixture: ComponentFixture<BienvenidoIoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenidoIoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidoIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
