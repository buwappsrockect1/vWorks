import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorSelectedComponent } from './sector-selected.component';

describe('SectorSelectedComponent', () => {
  let component: SectorSelectedComponent;
  let fixture: ComponentFixture<SectorSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
