import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciesManagementComponent } from './especies-management.component';

describe('EspeciesManagementComponent', () => {
  let component: EspeciesManagementComponent;
  let fixture: ComponentFixture<EspeciesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspeciesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
