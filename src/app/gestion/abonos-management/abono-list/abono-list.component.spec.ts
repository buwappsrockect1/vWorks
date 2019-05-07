import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonoListComponent } from './abono-list.component';

describe('AbonoListComponent', () => {
  let component: AbonoListComponent;
  let fixture: ComponentFixture<AbonoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
