import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratRiegoFormComponent } from './traza-trat-riego-form.component';

describe('TrazaTratRiegoFormComponent', () => {
  let component: TrazaTratRiegoFormComponent;
  let fixture: ComponentFixture<TrazaTratRiegoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratRiegoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratRiegoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
