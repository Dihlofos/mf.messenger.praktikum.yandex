import { HTTPTransport } from '../modules/Api';

let httpTransport: HTTPTransport;
function initTest() {
  httpTransport = new HTTPTransport('https://ya-praktikum.tech', '/api/v2');
}

beforeAll(() => {
  initTest();
});

it('Post works, returns error on wrong signin', () => {
  expect.assertions(1);
  return httpTransport
    .post('/auth/signin', {
      data: {
        login: 'test',
        password: 'wrongPass',
      },
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      return expect(e.reason).toBe('Login or password is incorrect');
    });
});

it('signin works on success', () => {
  expect.assertions(1);
  return httpTransport
    .post('/auth/signin', {
      data: {
        login: 'JeyForTest',
        password: '12345',
      },
    })
    .then((data) => {
      return expect(!!data).toBeTruthy();
    })
    .catch((e) => {
      console.log(e);
    });
});

it('get works, got data of User', () => {
  expect.assertions(1);
  return httpTransport
    .get('/auth/user', { data: {} })
    .then((data) => {
      return expect(!!data).toBeTruthy();
    })
    .catch((e) => {
      console.log(e);
    });
});
