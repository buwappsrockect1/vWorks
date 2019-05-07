import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratInsecticidaFormComponent } from './traza-trat-insecticida-form.component';

describe('TrazaTratInsecticidaFormComponent', () => {
  let component: TrazaTratInsecticidaFormComponent;
  let fixture: ComponentFixture<TrazaTratInsecticidaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratInsecticidaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratInsecticidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
