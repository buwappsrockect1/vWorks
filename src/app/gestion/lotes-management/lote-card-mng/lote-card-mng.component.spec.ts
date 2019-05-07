import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteCardMngComponent } from './lote-card-mng.component';

describe('LoteCardMngComponent', () => {
  let component: LoteCardMngComponent;
  let fixture: ComponentFixture<LoteCardMngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoteCardMngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteCardMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
