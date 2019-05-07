import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaranEntradaListComponent } from './albaran-entrada-list.component';

describe('AlbaranEntradaListComponent', () => {
  let component: AlbaranEntradaListComponent;
  let fixture: ComponentFixture<AlbaranEntradaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbaranEntradaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaranEntradaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
