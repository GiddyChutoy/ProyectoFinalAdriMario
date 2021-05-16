import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoMarcasComponent } from './producto-marcas.component';

describe('ProductoMarcasComponent', () => {
  let component: ProductoMarcasComponent;
  let fixture: ComponentFixture<ProductoMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
