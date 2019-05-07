import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaNotasListComponent } from './traza-notas-list.component';

describe('TrazaNotasListComponent', () => {
  let component: TrazaNotasListComponent;
  let fixture: ComponentFixture<TrazaNotasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaNotasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaNotasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
