import { Block, Router } from '../../modules';
import { Profile } from '../../components/Profile/Profile';
import { ProfileShow } from '../../components/ProfileShow/ProfileShow';
import profileData from './data';
import { AuthService } from '../../services';

export class ProfilePage extends Block {
  authService: AuthService;
  router: Router;

  constructor() {
    super('div', 'page');
    this.props = this._makePropsProxy(profileData);
  }

  componentDidMount() {
    this.authService = new AuthService({});
    this.router = new Router('root');
    this.authService
      .getUser()
      .then((item) => {
        this.setProps({ ...this.props, ...item });
      })
      .catch(() => {
        this.router.go('/login');
      });
  }

  initEvents() {
    document.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.classList.contains('js-logout')) {
        event.preventDefault();
        this.authService
          .logout()
          .then(() => {
            this.router.go('/login');
          })
          .catch((e) => console.log('logout error occured:', e));
      }
    });
  }

  render() {
    const profileShow = new ProfileShow(this.props);

    const profile = new Profile({
      backlink: '/messenger',
      backText: 'Выйти',
      contentInstance: profileShow,
    });
    document.title = 'Profile';
    return profile.renderToString();
  }
}

export default ProfilePage;
