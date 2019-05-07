import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaImagenFormComponent } from './traza-imagen-form.component';

describe('TrazaImagenFormComponent', () => {
  let component: TrazaImagenFormComponent;
  let fixture: ComponentFixture<TrazaImagenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaImagenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaImagenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
