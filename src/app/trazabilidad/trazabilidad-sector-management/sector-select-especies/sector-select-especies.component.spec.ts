import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorSelectEspeciesComponent } from './sector-select-especies.component';

describe('SectorSelectEspeciesComponent', () => {
  let component: SectorSelectEspeciesComponent;
  let fixture: ComponentFixture<SectorSelectEspeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorSelectEspeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorSelectEspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
