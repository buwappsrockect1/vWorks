import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorSelectLotesComponent } from './sector-select-lotes.component';

describe('SectorSelectLotesComponent', () => {
  let component: SectorSelectLotesComponent;
  let fixture: ComponentFixture<SectorSelectLotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorSelectLotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorSelectLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
