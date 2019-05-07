import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaNotasComponent } from './traza-notas.component';

describe('TrazaNotasComponent', () => {
  let component: TrazaNotasComponent;
  let fixture: ComponentFixture<TrazaNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
