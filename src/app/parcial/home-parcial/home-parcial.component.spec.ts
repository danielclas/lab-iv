import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParcialComponent } from './home-parcial.component';

describe('HomeParcialComponent', () => {
  let component: HomeParcialComponent;
  let fixture: ComponentFixture<HomeParcialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeParcialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
