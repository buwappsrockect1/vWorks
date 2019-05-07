import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteMngComponent } from './lote-mng.component';

describe('LoteMngComponent', () => {
  let component: LoteMngComponent;
  let fixture: ComponentFixture<LoteMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
