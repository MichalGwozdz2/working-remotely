import { AuthModuleModule } from './auth.module';

describe('AuthModuleModule', () => {
  let authModuleModule: AuthModuleModule;

  beforeEach(() => {
    authModuleModule = new AuthModuleModule();
  });

  it('should create an instance', () => {
    expect(authModuleModule).toBeTruthy();
  });
});
