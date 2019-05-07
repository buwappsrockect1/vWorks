import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorManagementComponent } from './sector-management.component';

describe('SectorManagementComponent', () => {
  let component: SectorManagementComponent;
  let fixture: ComponentFixture<SectorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
