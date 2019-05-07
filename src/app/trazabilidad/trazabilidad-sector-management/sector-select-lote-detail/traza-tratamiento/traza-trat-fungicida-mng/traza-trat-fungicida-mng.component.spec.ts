import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratFungicidaMngComponent } from './traza-trat-fungicida-mng.component';

describe('TrazaTratFungicidaMngComponent', () => {
  let component: TrazaTratFungicidaMngComponent;
  let fixture: ComponentFixture<TrazaTratFungicidaMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratFungicidaMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratFungicidaMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
