import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaNotasPrivMngComponent } from './traza-notas-priv-mng.component';

describe('TrazaNotasPrivMngComponent', () => {
  let component: TrazaNotasPrivMngComponent;
  let fixture: ComponentFixture<TrazaNotasPrivMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaNotasPrivMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaNotasPrivMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
