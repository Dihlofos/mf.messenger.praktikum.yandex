import { ProfileShowProps } from '../../components/ProfileShow/ProfileShow';

const profileData: ProfileShowProps = {
  display_name: 'Евгений',
  backlink: '/login',
  backText: 'Выйти',
  avatar: 'assets/images/avatar.jpg',
  email: 'mail@inbox.com',
  fields: [
    {
      value: 'username',
      label: 'Логин',
    },
  ],
  editLink: '/profileEdit',
  editLinkText: 'Изменить данные',
};

export default profileData;
