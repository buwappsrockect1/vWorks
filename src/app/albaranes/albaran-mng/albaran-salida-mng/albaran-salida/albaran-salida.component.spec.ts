import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaranSalidaComponent } from './albaran-salida.component';

describe('AlbaranSalidaComponent', () => {
  let component: AlbaranSalidaComponent;
  let fixture: ComponentFixture<AlbaranSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbaranSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaranSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
