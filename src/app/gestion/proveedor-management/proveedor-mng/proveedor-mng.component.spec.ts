import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorMngComponent } from './proveedor-mng.component';

describe('ProveedorMngComponent', () => {
  let component: ProveedorMngComponent;
  let fixture: ComponentFixture<ProveedorMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
