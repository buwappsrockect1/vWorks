import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FungicidaFormComponent } from './fungicida-form.component';

describe('FungicidaFormComponent', () => {
  let component: FungicidaFormComponent;
  let fixture: ComponentFixture<FungicidaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FungicidaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FungicidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
