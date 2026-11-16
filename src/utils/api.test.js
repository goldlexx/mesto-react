import { Api } from './api';

const createApi = () => new Api({
  url: 'https://api.example.test/',
  headers: {
    authorization: 'test-token',
    'Content-Type': 'application/json',
  },
});
const originalFetch = global.fetch;

afterEach(() => {
  jest.restoreAllMocks();
  global.fetch = originalFetch;
});

test('sends a profile update with JSON data and the authorization header', async () => {
  const response = { ok: true, status: 200, text: jest.fn().mockResolvedValue('{"name":"Alex"}') };
  global.fetch = jest.fn().mockResolvedValue(response);

  await expect(createApi().setUserInfo({ name: 'Alex', about: 'Developer' })).resolves.toEqual({ name: 'Alex' });

  expect(global.fetch).toHaveBeenCalledWith('https://api.example.test/users/me', {
    method: 'PATCH',
    headers: expect.objectContaining({ authorization: 'test-token' }),
    body: JSON.stringify({ name: 'Alex', about: 'Developer' }),
  });
});

test('rejects unsuccessful API responses', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
    status: 401,
    text: jest.fn().mockResolvedValue('{"message":"Unauthorized"}'),
  });

  await expect(createApi().getUserInfo()).rejects.toThrow('Unauthorized');
});
