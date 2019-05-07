import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratInsecticidaComponent } from './traza-trat-insecticida.component';

describe('TrazaTratInsecticidaComponent', () => {
  let component: TrazaTratInsecticidaComponent;
  let fixture: ComponentFixture<TrazaTratInsecticidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratInsecticidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratInsecticidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
