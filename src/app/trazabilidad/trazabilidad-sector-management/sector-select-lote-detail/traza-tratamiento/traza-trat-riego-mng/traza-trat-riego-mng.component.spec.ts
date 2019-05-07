import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratRiegoMngComponent } from './traza-trat-riego-mng.component';

describe('TrazaTratRiegoMngComponent', () => {
  let component: TrazaTratRiegoMngComponent;
  let fixture: ComponentFixture<TrazaTratRiegoMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratRiegoMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratRiegoMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
