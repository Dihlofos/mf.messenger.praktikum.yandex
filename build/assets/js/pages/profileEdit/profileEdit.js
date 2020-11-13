import { Block } from '../../modules/Block.js';
import { Avatar } from '../../components/Avatar/Avatar.js';
import { Button } from '../../components/Button/Button.js';
import { Profile } from '../../components/Profile/Profile.js';
import { ProfileField } from '../../components/ProfileField/ProfileField.js';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm.js';
import { profileEditData } from './data.js';
import { Router } from '../../modules/Router.js';
import { UserService } from '../../services/UserService.js';
export class ProfileEditPage extends Block {
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
            .catch((_) => {
            this.router.go('/login');
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
//# sourceMappingURL=profileEdit.js.map