import { RemotelyModule } from './remotely.module';

describe('RemotelyModule', () => {
  let remotelyModule: RemotelyModule;

  beforeEach(() => {
    remotelyModule = new RemotelyModule();
  });

  it('should create an instance', () => {
    expect(remotelyModule).toBeTruthy();
  });
});
