import { createHmac } from 'crypto';
import { hash } from '../../helpers/auth';

describe('Test the auth helpers function', () => {
  it('can hash and check based on salt', () => {
    const firstKey = 'api-key-test';
    const hashedKey = hash(firstKey);
    const salt = hashedKey.split('$')[0];

    const expectedHash = createHmac('sha512', salt).update(firstKey).digest('base64');

    expect(hashedKey).toMatch(expectedHash);
  });
});
