import { Block } from '../../modules/Block.js';
export declare type ProfileShowProps = {
    display_name: string;
    backlink: string;
    backText: string;
    avatar: string;
    email: string;
    fields: Record<string, string>[];
    editLink: string;
    editLinkText: string;
};
export declare class ProfileShow extends Block {
    constructor(props: ProfileShowProps);
    render(): any;
}
