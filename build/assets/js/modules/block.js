import { EventBus } from './EventBus.js';
export class Block {
    constructor(tagName = 'div', classNames = '', props = {}) {
        this._meta = { tagName: '', classNames: '', props: {} };
        this.hydrate = function () {
            for (const i of this._instances) {
                i.setElement(document.querySelector(`[_key=${i.getId()}`));
            }
            this.initEvents();
        };
        this.setProps = (nextProps) => {
            if (!nextProps) {
                return false;
            }
            Object.assign(this.props, nextProps);
            this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, nextProps);
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
            this._hydrateAll(this._meta.props);
            return false;
        };
        const eventBus = new EventBus();
        this._meta = {
            classNames,
            tagName,
            props,
        };
        this._instances = [];
        this._id = `uniq_${Math.floor(Math.random() * 1000000)}`;
        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    getId() {
        return this._id;
    }
    setElement(element) {
        this._element = element;
    }
    initEvents() { }
    renderToString() {
        const wrapper = document.createElement(this._meta.tagName);
        if (this._element) {
            this._element.innerHTML = this.render();
            wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(this._element);
        }
        return wrapper.innerHTML;
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
        this._element.setAttribute('_key', this.getId());
    }
    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidMount() { }
    _componentDidUpdate() {
        this.componentDidUpdate();
    }
    componentDidUpdate() { }
    get element() {
        return this._element;
    }
    _render() {
        const block = this.render();
        if (block && this._element) {
            this._element.innerHTML = block;
        }
    }
    render() {
        return '';
    }
    getContent() {
        return this.element;
    }
    _hydrateAll(props) {
        this.hydrate();
        Object.entries(props).map(([_, value]) => {
            doInit(value);
        });
        function doInit(value) {
            if (typeof value === 'string')
                return;
            if (Array.isArray(value)) {
                value.map((item) => {
                    doInit(item);
                });
            }
            if (value === null || value === void 0 ? void 0 : value.hasOwnProperty('hydrate')) {
                return value.hydrate();
            }
            else {
                return;
            }
        }
    }
    _makePropsProxy(props) {
        const proxyData = new Proxy(props, {
            set: (target, prop, value) => {
                //const oldProps = { ...this._meta.props };
                if (target[prop] !== value) {
                    target[prop] = value;
                    // this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target[prop]);
                    // this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
                    // this._hydrateAll(this._meta.props);
                }
                return true;
            },
            deleteProperty() {
                throw new Error('Нет прав');
            },
        });
        return proxyData;
    }
    _createDocumentElement(tagName) {
        var _a, _b;
        const element = document.createElement(tagName);
        //Добавляем класс к обертке
        if (this._meta.classNames.length > 0) {
            element.classList.add(...this._meta.classNames.split(' '));
            //Если в пропсках прокидывается классы через mix, добавляем их тоже к обертке.
            if ((_a = this.props) === null || _a === void 0 ? void 0 : _a.mix) {
                element.classList.add(...(_b = this.props) === null || _b === void 0 ? void 0 : _b.mix.split(' '));
            }
        }
        return element;
    }
    show() {
        this.getContent().style.display = 'block';
    }
    hide() {
        this.getContent().style.display = 'none';
    }
    remove() {
        console.log('remove it!');
    }
}
Block.EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
};
//# sourceMappingURL=Block.js.map