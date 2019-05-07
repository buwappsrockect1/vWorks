import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperarioFormComponent } from './operario-form.component';

describe('OperarioFormComponent', () => {
  let component: OperarioFormComponent;
  let fixture: ComponentFixture<OperarioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperarioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
