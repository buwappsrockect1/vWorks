import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorManagementComponent } from './proveedor-management.component';

describe('ProveedorManagementComponent', () => {
  let component: ProveedorManagementComponent;
  let fixture: ComponentFixture<ProveedorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
