import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratAbonoComponent } from './traza-trat-abono.component';

describe('TrazaTratAbonoComponent', () => {
  let component: TrazaTratAbonoComponent;
  let fixture: ComponentFixture<TrazaTratAbonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratAbonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratAbonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
