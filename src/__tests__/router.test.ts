import { Route } from '../modules/Route';
import { Router } from '../modules/Router';
import Error404Page from '../pages/Error404Page/Error404Page';

let root: HTMLElement;
let router: Router;
let route: Route | undefined;

function initTest() {
  root = document.createElement('div');
  root.classList.add('root');
  router = new Router('.root');
}

beforeAll(() => {
  initTest();
});

test('router inits and has 0 routes', () => {
  expect(router.routes.length).toBe(0);
});

test('frist router added', () => {
  router.use('/404', Error404Page);
  expect(router.routes.length).toBe(1);
});

test('Router started and window event binded', () => {
  router.start();
  expect(window.onpopstate).not.toBe(null);
});

test('Router goes to page, location changed', () => {
  router.go('/404');
  expect(window.location.pathname).toBe('/404');
});

test('Router can get current route', () => {
  route = router.getRoute('/404');
  expect(route).toBeInstanceOf(Route);
});
