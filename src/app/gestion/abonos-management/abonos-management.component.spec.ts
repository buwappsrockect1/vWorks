import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonosManagementComponent } from './abonos-management.component';

describe('AbonosManagementComponent', () => {
  let component: AbonosManagementComponent;
  let fixture: ComponentFixture<AbonosManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonosManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonosManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
