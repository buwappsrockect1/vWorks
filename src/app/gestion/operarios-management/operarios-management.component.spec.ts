import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperariosManagementComponent } from './operarios-management.component';

describe('OperariosManagementComponent', () => {
  let component: OperariosManagementComponent;
  let fixture: ComponentFixture<OperariosManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperariosManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperariosManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
