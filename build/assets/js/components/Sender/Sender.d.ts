import { Block } from '../../modules/Block.js';
import { Tooltip } from '../Tooltip/Tooltip.js';
export declare type SenderProps = {
    tooltipInstance: Tooltip;
};
export declare class Sender extends Block {
    tooltip: string;
    constructor(props: SenderProps);
    componentDidMount(): void;
    initEvents(): void;
    render(): any;
}
