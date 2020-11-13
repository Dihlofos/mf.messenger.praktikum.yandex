import { Block } from '../../modules/Block.js';
export declare type AvatarProps = {
    name: string;
    imageLink: string;
};
export declare class Avatar extends Block {
    constructor(props: AvatarProps);
    componentDidMount(): void;
    initEvents(): void;
    onChange(event: Event): void;
    render(): any;
}
