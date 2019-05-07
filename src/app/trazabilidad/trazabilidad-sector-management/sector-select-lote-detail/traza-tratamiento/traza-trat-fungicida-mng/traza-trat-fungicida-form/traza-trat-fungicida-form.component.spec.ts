import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratFungicidaFormComponent } from './traza-trat-fungicida-form.component';

describe('TrazaTratFungicidaFormComponent', () => {
  let component: TrazaTratFungicidaFormComponent;
  let fixture: ComponentFixture<TrazaTratFungicidaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratFungicidaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratFungicidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
