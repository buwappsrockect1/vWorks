import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotesManagementComponent } from './lotes-management.component';

describe('LotesManagementComponent', () => {
  let component: LotesManagementComponent;
  let fixture: ComponentFixture<LotesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
