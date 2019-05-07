import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecticidaFormComponent } from './insecticida-form.component';

describe('InsecticidaFormComponent', () => {
  let component: InsecticidaFormComponent;
  let fixture: ComponentFixture<InsecticidaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsecticidaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsecticidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
