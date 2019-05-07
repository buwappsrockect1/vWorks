import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratAbonoMngComponent } from './traza-trat-abono-mng.component';

describe('TrazaTratAbonoMngComponent', () => {
  let component: TrazaTratAbonoMngComponent;
  let fixture: ComponentFixture<TrazaTratAbonoMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratAbonoMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratAbonoMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
