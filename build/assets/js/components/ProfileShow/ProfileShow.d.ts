import { Block } from '../../modules/Block.js';
export declare type ProfileShowProps = {
    name: string;
    backlink: string;
    backText: string;
    imageLink: string;
    imageAlt: string;
    email: string;
    emailLabel: string;
    login: string;
    loginLabel: string;
    editLink: string;
    editLinkText: string;
};
export declare class ProfileShow extends Block {
    constructor(props: ProfileShowProps);
    render(): any;
}
