import { Route, Router } from '../modules';
import { Error404Page } from '../pages';

describe('Router tesing', () => {
  const root = document.createElement('div');
  root.classList.add('root');
  const router = new Router('.root');

  it('router inits and has 0 routes', () => {
    expect(router.routes.length).toBe(0);
  });

  it('frist router added', () => {
    router.use('/404', Error404Page);
    expect(router.routes.length).toBe(1);
  });

  it('Router started and window event binded', () => {
    router.start();
    expect(window.onpopstate).not.toBe(null);
  });

  it('Router goes to page, location changed', () => {
    router.go('/404');
    expect(window.location.pathname).toBe('/404');
  });

  it('Router can get current route', () => {
    const route = router.getRoute('/404');
    expect(route).toBeInstanceOf(Route);
  });
});
