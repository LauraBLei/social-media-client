/**
 * @jest-environment jsdom
 */

import { login } from '../api/auth/login.js';
import { save } from '../storage/save.js';

const email = 'tompe1lompe@stud.noroff.no';
const password = 'Password1234';
const user = 'testUser';
const accessToken = 'testAccessToken';

jest.mock('../storage/save.js', () => ({
  save: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: accessToken,
        user: user,
      }),
  }),
);

describe('login', () => {
  test('login function stores a token when provided with valid credentials', async () => {
    await login(email, password);

    expect(save).toHaveBeenCalledWith('token', accessToken);
    expect(save).toHaveBeenCalledWith('profile', { user: 'testUser' });
  });
});
