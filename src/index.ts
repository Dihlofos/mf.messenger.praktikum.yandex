import { Router } from './modules/Router';
import Error404Page from './pages/Error404Page/Error404Page';
import Error500Page from './pages/Error500Page/Error500Page';
import LoginPage from './pages/login/login';
import MessengerPage from './pages/messenger/messenger';
import ProfilePage from './pages/profile/profile';
import ProfileEditPage from './pages/profileEdit/profileEdit';
import RegistrationPage from './pages/registration/registration';
import './scss/main.scss';

function App(rootQuery: string): void {
  const router = new Router(rootQuery);

  //Register all routes;
  router.use('/404', Error404Page);
  router.use('/500', Error500Page);
  router.use('/login', LoginPage);
  router.use('/registration', RegistrationPage);
  router.use('/profile', ProfilePage);
  router.use('/profileEdit', ProfileEditPage);
  router.use('/messenger', MessengerPage);

  //start App
  router.start();

  if (window.location.pathname === '/') router.go('/login');
}
document.addEventListener('DOMContentLoaded', function () {
  App('.root');
});

export default App;
