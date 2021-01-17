import { HTTPTransport } from '../modules';
import { mockFetch } from '../__mocks__/request.mock';

describe('XHR API', () => {
  const data = {
    id: '0',
    title: 'string',
    avatar: 'string',
  };

  it('return expect data', async () => {
    const httpTransport = new HTTPTransport(
      'https://ya-praktikum.tech',
      '/api/v2',
    );
    mockFetch(200, [data]);
    const res: XMLHttpRequest | unknown = await httpTransport.get('/chats', {
      data: {},
    });
    expect(res).toEqual([data]);
  });

  it('throw an error', async () => {
    mockFetch(500, [data]);

    try {
      const httpTransport = new HTTPTransport(
        'https://ya-praktikum.tech',
        '/api/v2',
      );
      await httpTransport.get('/chats', {
        data: {},
      });
    } catch (e) {
      expect(e).toEqual([data]);
    }
  });
});
