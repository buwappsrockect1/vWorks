import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaranMngComponent } from './albaran-mng.component';

describe('AlbaranMngComponent', () => {
  let component: AlbaranMngComponent;
  let fixture: ComponentFixture<AlbaranMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbaranMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaranMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
