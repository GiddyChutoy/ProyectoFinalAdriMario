import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasGraficasComponent } from './tarjetas-graficas.component';

describe('TarjetasGraficasComponent', () => {
  let component: TarjetasGraficasComponent;
  let fixture: ComponentFixture<TarjetasGraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasGraficasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
