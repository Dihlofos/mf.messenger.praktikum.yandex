import { Block } from '../../modules/Block.js';
import { ProfileShow } from '../ProfileShow/ProfileShow.js';
import { ProfileForm } from '../ProfileForm/ProfileForm.js';
export declare type ProfileProps = {
    backlink: string;
    backText: string;
    contentInstance: ProfileShow | ProfileForm;
};
export declare class Profile extends Block {
    content: string;
    constructor(props: ProfileProps);
    render(): any;
}
