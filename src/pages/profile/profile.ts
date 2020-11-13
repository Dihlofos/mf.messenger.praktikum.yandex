import { Block } from '../../modules/Block.js';
import { Profile } from '../../components/Profile/Profile.js';
import { ProfileShow } from '../../components/ProfileShow/ProfileShow.js';
import { profileData } from './data.js';
import { AuthService } from '../../services/AuthService.js';
import { Router } from '../../modules/Router.js';

export class ProfilePage extends Block {
  authService: AuthService;
  router: Router;

  constructor() {
    super('div', 'page');
  }
  componentDidMount() {
    this.authService = new AuthService({});
    this.router = new Router('root');
    this.authService
      .getUser()
      .then((item) => {
        this.setProps(Object.assign(profileData, item));
      })
      .catch((_) => {
        this.router.go('/login');
      });
  }

  initEvents() {
    document.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.classList.contains('js-logout')) {
        event.preventDefault();
        this.authService.logout();
        this.router.go('/login');
      }
    });
  }

  render() {
    const profileShow = new ProfileShow(profileData);

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
