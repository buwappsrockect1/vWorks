import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaranSalidaFormComponent } from './albaran-salida-form.component';

describe('AlbaranSalidaFormComponent', () => {
  let component: AlbaranSalidaFormComponent;
  let fixture: ComponentFixture<AlbaranSalidaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbaranSalidaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaranSalidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
