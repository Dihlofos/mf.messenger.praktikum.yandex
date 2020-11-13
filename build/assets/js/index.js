import { Router } from './modules/Router.js';
import Error404Page from './pages/Error404Page/Error404Page.js';
import Error500Page from './pages/Error500Page/Error500Page.js';
import LoginPage from './pages/login/login.js';
import MessengerPage from './pages/messenger/messenger.js';
import ProfilePage from './pages/profile/profile.js';
import ProfileEditPage from './pages/profileEdit/profileEdit.js';
import RegistrationPage from './pages/registration/registration.js';
function App(rootQuery) {
    const router = new Router(rootQuery);
    //Register all routes;
    router.use('/404', Error404Page);
    router.use('/500', Error500Page);
    router.use('/login', LoginPage);
    router.use('/registration', RegistrationPage);
    router.use('/profile', ProfilePage);
    router.use('/profileEdit', ProfileEditPage); //TODO подумать как сделать адрес /profile/edit
    router.use('/messenger', MessengerPage);
    //start App
    router.start();
    //TODO тут будет блок кода редиректов,
    // если пользовател залогинен - переводить в мессенджер
    // если нет - редиректить на логин, пока просто на логин редирект
    if (window.location.pathname === '/')
        router.go('/login');
}
document.addEventListener('DOMContentLoaded', function () {
    App('.root');
});
export default App;
//# sourceMappingURL=index.js.map