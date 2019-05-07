import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaranEntradaComponent } from './albaran-entrada.component';

describe('AlbaranEntradaComponent', () => {
  let component: AlbaranEntradaComponent;
  let fixture: ComponentFixture<AlbaranEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbaranEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbaranEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
