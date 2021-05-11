import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaLogitechComponent } from './oferta-logitech.component';

describe('OfertaLogitechComponent', () => {
  let component: OfertaLogitechComponent;
  let fixture: ComponentFixture<OfertaLogitechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaLogitechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaLogitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
