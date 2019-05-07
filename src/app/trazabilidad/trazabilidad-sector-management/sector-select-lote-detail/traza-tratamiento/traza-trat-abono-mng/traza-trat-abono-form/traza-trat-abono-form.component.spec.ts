import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratAbonoFormComponent } from './traza-trat-abono-form.component';

describe('TrazaTratAbonoFormComponent', () => {
  let component: TrazaTratAbonoFormComponent;
  let fixture: ComponentFixture<TrazaTratAbonoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratAbonoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratAbonoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
