import { Profile } from '../../components/Profile/Profile.js';
import { ProfileShow } from '../../components/ProfileShow/ProfileShow.js';
import { profileData } from './data.js';
function profilePage() {
    const root = document.querySelector('.root');
    const profileShow = new ProfileShow(profileData);
    const profile = new Profile({
        backlink: '/messenger_default.html',
        backText: 'Выйти',
        contentInstance: profileShow,
    });
    if (root) {
        root.appendChild(profile.getContent());
    }
}
document.addEventListener('DOMContentLoaded', function () {
    profilePage();
});
export default profilePage;
//# sourceMappingURL=profile.js.map