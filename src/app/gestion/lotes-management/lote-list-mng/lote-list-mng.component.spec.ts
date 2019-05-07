import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteListMngComponent } from './lote-list-mng.component';

describe('LoteListMngComponent', () => {
  let component: LoteListMngComponent;
  let fixture: ComponentFixture<LoteListMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteListMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteListMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
