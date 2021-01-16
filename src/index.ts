import 'focus-visible';
import { Router } from './modules';
import { Error500Page, Error404Page, LoginPage, MessengerPage, ProfilePage, ProfileEditPage, RegistrationPage } from './pages';
import './scss/main.scss';

function App(rootQuery: string): void {
  const router = new Router(rootQuery);

  // Register all routes;
  router.use('/404', Error404Page);
  router.use('/500', Error500Page);
  router.use('/login', LoginPage);
  router.use('/registration', RegistrationPage);
  router.use('/profile', ProfilePage);
  router.use('/profileEdit', ProfileEditPage);
  router.use('/messenger', MessengerPage);

  // start App
  router.start();

  if (window.location.pathname === '/') router.go('/login');
}
document.addEventListener('DOMContentLoaded', () => {
  App('.root');
});

export default App;
