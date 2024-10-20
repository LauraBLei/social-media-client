/**
 * @jest-environment jsdom
 */
import { logout } from '../api/auth/logout.js';
import { remove } from '../storage/remove.js';
logout;

jest.mock('../storage/remove.js', () => ({
  remove: jest.fn(),
}));

describe('logout', () => {
  test('should clear token from localStorage', () => {
    logout();
    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
