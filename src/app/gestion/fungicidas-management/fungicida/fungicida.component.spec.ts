import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FungicidaComponent } from './fungicida.component';

describe('FungicidaComponent', () => {
  let component: FungicidaComponent;
  let fixture: ComponentFixture<FungicidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FungicidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FungicidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
