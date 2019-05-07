import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratRiegoComponent } from './traza-trat-riego.component';

describe('TrazaTratRiegoComponent', () => {
  let component: TrazaTratRiegoComponent;
  let fixture: ComponentFixture<TrazaTratRiegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratRiegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratRiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
