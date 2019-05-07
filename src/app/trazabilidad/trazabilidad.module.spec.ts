import { TrazabilidadModule } from './trazabilidad.module';

describe('TrazabilidadModule', () => {
  let trazabilidadModule: TrazabilidadModule;

  beforeEach(() => {
    trazabilidadModule = new TrazabilidadModule();
  });

  it('should create an instance', () => {
    expect(trazabilidadModule).toBeTruthy();
  });
});
