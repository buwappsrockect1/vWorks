import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonoFormComponent } from './abono-form.component';

describe('AbonoFormComponent', () => {
  let component: AbonoFormComponent;
  let fixture: ComponentFixture<AbonoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
