import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteInfoMngComponent } from './lote-info-mng.component';

describe('LoteInfoMngComponent', () => {
  let component: LoteInfoMngComponent;
  let fixture: ComponentFixture<LoteInfoMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteInfoMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteInfoMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
