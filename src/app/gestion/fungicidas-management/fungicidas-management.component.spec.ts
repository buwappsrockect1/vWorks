import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FungicidasManagementComponent } from './fungicidas-management.component';

describe('FungicidasManagementComponent', () => {
  let component: FungicidasManagementComponent;
  let fixture: ComponentFixture<FungicidasManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FungicidasManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FungicidasManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
