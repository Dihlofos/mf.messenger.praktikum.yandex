import { EventBus } from './eventBus.js';
var Block = /** @class */ (function () {
    function Block(tagName, props) {
        var _this = this;
        if (tagName === void 0) { tagName = "div"; }
        if (props === void 0) { props = {}; }
        this._meta = { tagName: '', props: {} };
        this.setProps = function (nextProps) {
            if (!nextProps) {
                return false;
            }
            Object.assign(_this._makePropsProxy(_this.props), nextProps);
            _this.eventBus(_this.props, nextProps).emit(Block.EVENTS.FLOW_CDU);
            return false;
        };
        var eventBus = new EventBus();
        this._meta = {
            tagName: tagName,
            props: props
        };
        this.props = this._makePropsProxy(props);
        this.eventBus = function () { return eventBus; };
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    Block.prototype._registerEvents = function (eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    };
    Block.prototype._createResources = function () {
        var tagName = this._meta.tagName;
        this._element = this._createDocumentElement(tagName);
    };
    Block.prototype.init = function () {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    };
    Block.prototype._componentDidMount = function () {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    };
    Block.prototype.componentDidMount = function () { };
    Block.prototype._componentDidUpdate = function () {
        //oldProps : object, newProps: object
        //this.componentDidUpdate(oldProps, newProps);    
        this.componentDidUpdate();
    };
    // Может переопределять пользователь, необязательно трогать
    Block.prototype.componentDidUpdate = function () {
        //oldProps : object, newProps: object
        //TODO - разобраться что здесь происходит с пропсами
        //console.log(oldProps)
        //console.log(newProps)
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        return true;
    };
    Object.defineProperty(Block.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Block.prototype._render = function () {
        var block = this.render();
        if (block) {
            this._element.innerHTML = block;
        }
    };
    Block.prototype.render = function () { };
    Block.prototype.getContent = function () {
        return this.element;
    };
    Block.prototype._makePropsProxy = function (props) {
        var proxyData = new Proxy(props, {
            get: function (target, prop) {
                if (typeof prop === 'string' && prop.indexOf('_') === 0) {
                    throw new Error('Нет прав');
                }
                var value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: function (target, prop, value) {
                target[prop] = value;
                return true;
            },
            deleteProperty: function () {
                throw new Error('Нет прав');
            },
        });
        return proxyData;
    };
    Block.prototype._createDocumentElement = function (tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    };
    Block.prototype.show = function () {
        this.getContent().style.display = "block";
    };
    Block.prototype.hide = function () {
        this.getContent().style.display = "none";
    };
    Block.EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update"
    };
    return Block;
}());
export { Block };
//# sourceMappingURL=block.js.map