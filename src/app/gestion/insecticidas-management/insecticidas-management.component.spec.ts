import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecticidasManagementComponent } from './insecticidas-management.component';

describe('InsecticidasManagementComponent', () => {
  let component: InsecticidasManagementComponent;
  let fixture: ComponentFixture<InsecticidasManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsecticidasManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsecticidasManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
