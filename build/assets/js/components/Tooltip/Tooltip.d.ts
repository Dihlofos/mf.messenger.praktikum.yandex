import { Block } from '../../modules/Block.js';
export declare type TooltipProps = {
    mix: string;
    onTooltipClick?: (event: Event) => void;
    iconButtons: {
        name: string;
        svg: string;
        target: string;
    }[];
};
export declare class Tooltip extends Block {
    constructor(props: TooltipProps);
    componentDidMount(): void;
    initEvents(): void;
    show(): void;
    hide(): void;
    render(): any;
}
