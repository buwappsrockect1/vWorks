import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratFungicidaListComponent } from './traza-trat-fungicida-list.component';

describe('TrazaTratFungicidaListComponent', () => {
  let component: TrazaTratFungicidaListComponent;
  let fixture: ComponentFixture<TrazaTratFungicidaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratFungicidaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratFungicidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
