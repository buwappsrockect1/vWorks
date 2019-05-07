import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaImagenMngComponent } from './traza-imagen-mng.component';

describe('TrazaImagenMngComponent', () => {
  let component: TrazaImagenMngComponent;
  let fixture: ComponentFixture<TrazaImagenMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaImagenMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaImagenMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
