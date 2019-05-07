import { UiLayoutModule } from './ui-layout.module';

describe('UiLayoutModule', () => {
  let uiLayoutModule: UiLayoutModule;

  beforeEach(() => {
    uiLayoutModule = new UiLayoutModule();
  });

  it('should create an instance', () => {
    expect(uiLayoutModule).toBeTruthy();
  });
});
