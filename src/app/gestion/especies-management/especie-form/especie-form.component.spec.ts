import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieFormComponent } from './especie-form.component';

describe('EspecieFormComponent', () => {
  let component: EspecieFormComponent;
  let fixture: ComponentFixture<EspecieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
