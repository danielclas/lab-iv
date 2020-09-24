import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreParcialHomeComponent } from './pre-parcial-home.component';

describe('PreParcialHomeComponent', () => {
  let component: PreParcialHomeComponent;
  let fixture: ComponentFixture<PreParcialHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreParcialHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreParcialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
