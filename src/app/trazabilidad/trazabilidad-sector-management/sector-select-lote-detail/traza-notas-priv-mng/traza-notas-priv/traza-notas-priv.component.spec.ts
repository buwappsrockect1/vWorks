import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaNotasPrivComponent } from './traza-notas-priv.component';

describe('TrazaNotasPrivComponent', () => {
  let component: TrazaNotasPrivComponent;
  let fixture: ComponentFixture<TrazaNotasPrivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaNotasPrivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaNotasPrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
