import { Block } from '../../modules/Block.js';
import { RenameForm } from '../RenameForm/RenameForm.js';
import { Tooltip } from '../Tooltip/Tooltip.js';
export declare type CurrentChatProps = {
    imageLink: string;
    imageAlt: string;
    name: string;
    time: string;
    mix?: string;
    tooltipInstance: Tooltip;
    renameFormInstance: RenameForm;
};
export declare class CurrentChat extends Block {
    tooltip: string;
    renameForm: string;
    constructor(props: CurrentChatProps);
    render(): any;
}
