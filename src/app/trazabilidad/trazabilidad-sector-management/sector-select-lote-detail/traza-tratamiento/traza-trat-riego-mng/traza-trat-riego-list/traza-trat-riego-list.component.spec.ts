import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratRiegoListComponent } from './traza-trat-riego-list.component';

describe('TrazaTratRiegoListComponent', () => {
  let component: TrazaTratRiegoListComponent;
  let fixture: ComponentFixture<TrazaTratRiegoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratRiegoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratRiegoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
