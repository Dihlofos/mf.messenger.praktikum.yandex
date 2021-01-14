import { Block } from '../../modules/Block';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';
import { Profile } from '../../components/Profile/Profile';
import { ProfileField } from '../../components/ProfileField/ProfileField';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { profileEditData } from './data';
import { Router } from '../../modules/Router';
import { UserService } from '../../services/UserService';

export class ProfileEditPage extends Block {
  userService: UserService;
  router: Router;
  constructor() {
    super('div', 'page');
  }

  componentDidMount() {
    this.userService = new UserService({});
    this.router = new Router('root');
    this.userService
      .getUser()
      .then((item) => {
        this.setProps(Object.assign(profileEditData, item));
      })
      .catch((e) => {
        console.log(e)
        //this.router.go('/login');
      });
  }

  render() {
    const { buttonData, display_name, avatar, fields } = profileEditData;

    const button = new Button(buttonData);
    const name = new ProfileField(display_name);
    const avatarField = new Avatar(avatar);

    const profileFields = fields.map((item) => new ProfileField(item));

    const profileForm = new ProfileForm({
      nameInstance: name,
      avatarInstance: avatarField,
      buttonInstance: button,
      fieldsInstances: profileFields,
      error: '',
    });

    const profile = new Profile({
      backlink: '/profile',
      backText: 'Выйти',
      contentInstance: profileForm,
    });
    document.title = 'Profile';
    return profile.renderToString();
  }
}

export default ProfileEditPage;
