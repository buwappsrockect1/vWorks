import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorSelectLoteDetailComponent } from './sector-select-lote-detail.component';

describe('SectorSelectLoteDetailComponent', () => {
  let component: SectorSelectLoteDetailComponent;
  let fixture: ComponentFixture<SectorSelectLoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorSelectLoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorSelectLoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
