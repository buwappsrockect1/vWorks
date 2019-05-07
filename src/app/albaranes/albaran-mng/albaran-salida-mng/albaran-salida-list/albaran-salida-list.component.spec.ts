import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaranSalidaListComponent } from './albaran-salida-list.component';

describe('AlbaranSalidaListComponent', () => {
  let component: AlbaranSalidaListComponent;
  let fixture: ComponentFixture<AlbaranSalidaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbaranSalidaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaranSalidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
