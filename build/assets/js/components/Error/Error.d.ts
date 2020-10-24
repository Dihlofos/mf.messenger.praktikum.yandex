import { Block } from '../../modules/Block.js';
export declare type ErrorProps = {
    errorText: string;
    errorDescription: string;
    backText: string;
    backLink: string;
};
export declare class Error extends Block {
    constructor(props: ErrorProps);
    render(): any;
}
