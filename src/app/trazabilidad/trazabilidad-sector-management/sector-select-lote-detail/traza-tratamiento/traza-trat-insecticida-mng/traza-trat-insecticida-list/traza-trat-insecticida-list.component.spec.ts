import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaTratInsecticidaListComponent } from './traza-trat-insecticida-list.component';

describe('TrazaTratInsecticidaListComponent', () => {
  let component: TrazaTratInsecticidaListComponent;
  let fixture: ComponentFixture<TrazaTratInsecticidaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaTratInsecticidaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaTratInsecticidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
