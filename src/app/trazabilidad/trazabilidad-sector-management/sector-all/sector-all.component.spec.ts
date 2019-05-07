import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorAllComponent } from './sector-all.component';

describe('SectorAllComponent', () => {
  let component: SectorAllComponent;
  let fixture: ComponentFixture<SectorAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
