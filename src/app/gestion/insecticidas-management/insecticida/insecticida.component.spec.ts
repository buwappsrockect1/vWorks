import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecticidaComponent } from './insecticida.component';

describe('InsecticidaComponent', () => {
  let component: InsecticidaComponent;
  let fixture: ComponentFixture<InsecticidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsecticidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsecticidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
