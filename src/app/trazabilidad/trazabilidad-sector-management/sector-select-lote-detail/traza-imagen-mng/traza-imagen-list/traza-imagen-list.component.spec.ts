import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaImagenListComponent } from './traza-imagen-list.component';

describe('TrazaImagenListComponent', () => {
  let component: TrazaImagenListComponent;
  let fixture: ComponentFixture<TrazaImagenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaImagenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaImagenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
