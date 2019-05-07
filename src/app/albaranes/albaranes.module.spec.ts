import { AlbaranesModule } from './albaranes.module';

describe('AlbaranesModule', () => {
  let albaranesModule: AlbaranesModule;

  beforeEach(() => {
    albaranesModule = new AlbaranesModule();
  });

  it('should create an instance', () => {
    expect(albaranesModule).toBeTruthy();
  });
});
