import { EventBus } from './EventBus.js';
import { SimpleObject } from '../interface';
export declare class Block {
    static EVENTS: {
        INIT: string;
        FLOW_CDM: string;
        FLOW_RENDER: string;
        FLOW_CDU: string;
    };
    _id: string;
    _element: HTMLElement;
    _instances: Block[];
    _meta: {
        tagName: string;
        classNames: string;
        props: SimpleObject;
    };
    props: SimpleObject;
    eventBus: (...args: any[]) => EventBus;
    constructor(tagName?: string, classNames?: string, props?: SimpleObject);
    getId(): string;
    setElement(element: HTMLElement): void;
    hydrate: () => void;
    initEvents(): void;
    renderToString(): string;
    _registerEvents(eventBus: EventBus): void;
    _createResources(): void;
    init(): void;
    _componentDidMount(): void;
    componentDidMount(): void;
    _componentDidUpdate(): void;
    componentDidUpdate(): void;
    setProps: (nextProps: object) => boolean;
    get element(): HTMLElement;
    _render(): void;
    render(): string;
    getContent(): HTMLElement;
    _makePropsProxy(props: {
        [key: string]: unknown;
    }): {
        [key: string]: unknown;
    };
    _createDocumentElement(tagName: string): HTMLElement;
    show(): void;
    hide(): void;
}
