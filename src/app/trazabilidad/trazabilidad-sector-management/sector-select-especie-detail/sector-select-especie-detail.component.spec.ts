import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorSelectEspecieDetailComponent } from './sector-select-especie-detail.component';

describe('SectorSelectEspecieDetailComponent', () => {
  let component: SectorSelectEspecieDetailComponent;
  let fixture: ComponentFixture<SectorSelectEspecieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorSelectEspecieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorSelectEspecieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
