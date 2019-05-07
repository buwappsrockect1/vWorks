import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteFormMngComponent } from './lote-form-mng.component';

describe('LoteFormMngComponent', () => {
  let component: LoteFormMngComponent;
  let fixture: ComponentFixture<LoteFormMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteFormMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteFormMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
