import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaImagenComponent } from './traza-imagen.component';

describe('TrazaImagenComponent', () => {
  let component: TrazaImagenComponent;
  let fixture: ComponentFixture<TrazaImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
