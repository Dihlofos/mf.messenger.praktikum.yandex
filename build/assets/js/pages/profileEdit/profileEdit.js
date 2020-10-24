import { Avatar } from '../../components/Avatar/Avatar.js';
import { Button } from '../../components/Button/Button.js';
import { Profile } from '../../components/Profile/Profile.js';
import { ProfileField } from '../../components/ProfileField/ProfileField.js';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm.js';
import { profileEditData } from './data.js';
function profilePage() {
    const root = document.querySelector('.root');
    const { buttonData, nameData, avatarData, profileFieldsData, } = profileEditData;
    const button = new Button(buttonData);
    const name = new ProfileField(nameData);
    const avatar = new Avatar(avatarData);
    const fields = profileFieldsData.map((item) => new ProfileField(item));
    const profileForm = new ProfileForm({
        nameInstance: name,
        avatarInstance: avatar,
        buttonInstance: button,
        fieldsInstances: fields,
    });
    const profile = new Profile({
        backlink: '/messenger_default.html',
        backText: 'Выйти',
        contentInstance: profileForm,
    });
    if (root) {
        root.appendChild(profile.getContent());
        fields.forEach((item) => {
            item.hydrate();
        });
        name.hydrate();
        profileForm.hydrate();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    profilePage();
});
export default profilePage;
//# sourceMappingURL=profileEdit.js.map