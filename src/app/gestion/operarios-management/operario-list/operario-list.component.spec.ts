import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperarioListComponent } from './operario-list.component';

describe('OperarioListComponent', () => {
  let component: OperarioListComponent;
  let fixture: ComponentFixture<OperarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
