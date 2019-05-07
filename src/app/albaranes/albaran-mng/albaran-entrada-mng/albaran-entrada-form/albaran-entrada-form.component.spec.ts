import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaranEntradaFormComponent } from './albaran-entrada-form.component';

describe('AlbaranEntradaFormComponent', () => {
  let component: AlbaranEntradaFormComponent;
  let fixture: ComponentFixture<AlbaranEntradaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbaranEntradaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaranEntradaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
