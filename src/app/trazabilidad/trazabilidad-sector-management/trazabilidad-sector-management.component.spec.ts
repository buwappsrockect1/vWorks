import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazabilidadSectorManagementComponent } from './trazabilidad-sector-management.component';

describe('TrazabilidadSectorManagementComponent', () => {
  let component: TrazabilidadSectorManagementComponent;
  let fixture: ComponentFixture<TrazabilidadSectorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazabilidadSectorManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazabilidadSectorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
