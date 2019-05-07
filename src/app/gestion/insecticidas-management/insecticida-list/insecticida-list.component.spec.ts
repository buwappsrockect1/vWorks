import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecticidaListComponent } from './insecticida-list.component';

describe('InsecticidaListComponent', () => {
  let component: InsecticidaListComponent;
  let fixture: ComponentFixture<InsecticidaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsecticidaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsecticidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
