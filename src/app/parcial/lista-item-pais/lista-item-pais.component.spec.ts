import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemPaisComponent } from './lista-item-pais.component';

describe('ListaItemPaisComponent', () => {
  let component: ListaItemPaisComponent;
  let fixture: ComponentFixture<ListaItemPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaItemPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
