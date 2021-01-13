import { MessageSubmit } from '../../interface.js';
import { Block } from '../../modules/Block.js';
import { Store } from '../../modules/Store.js';
import { Tooltip } from '../Tooltip/Tooltip.js';
export declare type SenderProps = {
    tooltipInstance: Tooltip;
    onSubmit: (message: MessageSubmit) => void;
    mix?: string;
};
export declare class Sender extends Block {
    tooltip: string;
    store: Store;
    constructor(props: SenderProps);
    componentDidMount(): void;
    initEvents(): void;
    render(): any;
}
