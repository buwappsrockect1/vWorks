import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaNotasFormComponent } from './traza-notas-form.component';

describe('TrazaNotasFormComponent', () => {
  let component: TrazaNotasFormComponent;
  let fixture: ComponentFixture<TrazaNotasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaNotasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaNotasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
