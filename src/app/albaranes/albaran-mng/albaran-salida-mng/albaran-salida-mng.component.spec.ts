import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaranSalidaMngComponent } from './albaran-salida-mng.component';

describe('AlbaranSalidaMngComponent', () => {
  let component: AlbaranSalidaMngComponent;
  let fixture: ComponentFixture<AlbaranSalidaMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbaranSalidaMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaranSalidaMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
