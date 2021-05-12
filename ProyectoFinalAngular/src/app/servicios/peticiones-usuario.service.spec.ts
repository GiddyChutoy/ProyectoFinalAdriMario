import { TestBed } from '@angular/core/testing';

import { PeticionesUsuarioService } from './peticiones-usuario.service';

describe('PeticionesUsuarioService', () => {
  let service: PeticionesUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
