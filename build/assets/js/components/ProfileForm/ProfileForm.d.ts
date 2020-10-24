import { Block } from '../../modules/Block.js';
import { Avatar } from '../Avatar/Avatar.js';
import { Button } from '../Button/Button.js';
import { ProfileField } from '../ProfileField/ProfileField.js';
export declare type FormProps = {
    avatarInstance: Avatar;
    fieldsInstances: ProfileField[];
    nameInstance: ProfileField;
    buttonInstance: Button;
};
export declare class ProfileForm extends Block {
    button: string;
    name: string;
    fields: string[];
    avatar: string;
    constructor(props: FormProps);
    initEvents(): void;
    render(): any;
}
