import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazaNotasMngComponent } from './traza-notas-mng.component';

describe('TrazaNotasMngComponent', () => {
  let component: TrazaNotasMngComponent;
  let fixture: ComponentFixture<TrazaNotasMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazaNotasMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazaNotasMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
