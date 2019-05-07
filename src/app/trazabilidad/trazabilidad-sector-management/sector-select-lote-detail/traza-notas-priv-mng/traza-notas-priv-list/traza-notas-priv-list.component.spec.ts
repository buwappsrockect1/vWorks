import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaNotasPrivListComponent } from './traza-notas-priv-list.component';

describe('TrazaNotasPrivListComponent', () => {
  let component: TrazaNotasPrivListComponent;
  let fixture: ComponentFixture<TrazaNotasPrivListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaNotasPrivListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaNotasPrivListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
