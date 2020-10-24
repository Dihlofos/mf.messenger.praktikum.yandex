import { Block } from '../../modules/Block.js';
export declare type TooltipProps = {
    mix: string;
    iconButtons: {
        name: string;
        svg: string;
    }[];
};
export declare class Tooltip extends Block {
    constructor(props: TooltipProps);
    show(): void;
    hide(): void;
    render(): any;
}
