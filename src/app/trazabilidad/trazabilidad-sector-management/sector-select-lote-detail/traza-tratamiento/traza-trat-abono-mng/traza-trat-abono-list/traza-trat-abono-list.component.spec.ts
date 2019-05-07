import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratAbonoListComponent } from './traza-trat-abono-list.component';

describe('TrazaTratAbonoListComponent', () => {
  let component: TrazaTratAbonoListComponent;
  let fixture: ComponentFixture<TrazaTratAbonoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratAbonoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratAbonoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
