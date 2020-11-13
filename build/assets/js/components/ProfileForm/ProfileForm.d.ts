import { Block } from '../../modules/Block.js';
import { Avatar } from '../Avatar/Avatar.js';
import { Button } from '../Button/Button.js';
import { ProfileField } from '../ProfileField/ProfileField.js';
import { UserService } from '../../services/UserService.js';
import { Router } from '../../modules/Router.js';
export declare type ProfileFormProps = {
    avatarInstance: Avatar;
    fieldsInstances: ProfileField[];
    nameInstance: ProfileField;
    buttonInstance: Button;
    error: string;
};
export declare class ProfileForm extends Block {
    button: string;
    name: string;
    fields: string[];
    avatar: string;
    userService: UserService;
    router: Router;
    constructor(props: ProfileFormProps);
    componentDidMount(): void;
    initEvents(): void;
    onSubmit(e: Event, form: HTMLFormElement | null): void;
    render(): any;
}
