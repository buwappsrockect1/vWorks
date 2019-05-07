import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaNotasPrivFormComponent } from './traza-notas-priv-form.component';

describe('TrazaNotasPrivFormComponent', () => {
  let component: TrazaNotasPrivFormComponent;
  let fixture: ComponentFixture<TrazaNotasPrivFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaNotasPrivFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaNotasPrivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
