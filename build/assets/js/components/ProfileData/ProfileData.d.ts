import { Block } from "../../modules/Block.js";
export declare type ProfileDataProps = {
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
export declare class ProfileData extends Block {
    constructor(props: ProfileDataProps);
    render(): any;
}
