import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaranEntradaMngComponent } from './albaran-entrada-mng.component';

describe('AlbaranEntradaMngComponent', () => {
  let component: AlbaranEntradaMngComponent;
  let fixture: ComponentFixture<AlbaranEntradaMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbaranEntradaMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaranEntradaMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
