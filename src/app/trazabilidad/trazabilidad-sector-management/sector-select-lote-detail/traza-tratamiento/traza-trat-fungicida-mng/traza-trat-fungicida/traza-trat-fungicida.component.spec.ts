import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratFungicidaComponent } from './traza-trat-fungicida.component';

describe('TrazaTratFungicidaComponent', () => {
  let component: TrazaTratFungicidaComponent;
  let fixture: ComponentFixture<TrazaTratFungicidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratFungicidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratFungicidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
