import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratInsecticidaMngComponent } from './traza-trat-insecticida-mng.component';

describe('TrazaTratInsecticidaMngComponent', () => {
  let component: TrazaTratInsecticidaMngComponent;
  let fixture: ComponentFixture<TrazaTratInsecticidaMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratInsecticidaMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratInsecticidaMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
