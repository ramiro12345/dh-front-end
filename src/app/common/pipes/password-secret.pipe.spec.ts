import { PasswordSecretPipe } from './password-secret.pipe';

describe('PasswordSecretPipe', () => {
  it('create an instance', () => {
    const pipe = new PasswordSecretPipe();
    expect(pipe).toBeTruthy();
  });
});
