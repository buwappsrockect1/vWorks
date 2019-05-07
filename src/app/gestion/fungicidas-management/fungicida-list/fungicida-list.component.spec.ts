import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FungicidaListComponent } from './fungicida-list.component';

describe('FungicidaListComponent', () => {
  let component: FungicidaListComponent;
  let fixture: ComponentFixture<FungicidaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FungicidaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FungicidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
