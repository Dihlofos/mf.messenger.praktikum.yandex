import { EventBus } from './eventBus.js';
import { SimpleObject } from '../interface'

 export class Block {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_RENDER: "flow:render",
      FLOW_CDU: "flow:component-did-update"
    };

    //types
    _element: HTMLElement;
    _meta: {
        tagName: string;
        props: SimpleObject
    } = {tagName: '', props: {}};
    props:SimpleObject;
    eventBus: (...args: any[] ) => EventBus;
  
    constructor(tagName:string = "div", props:SimpleObject = {}) {
      const eventBus = new EventBus();
      this._meta = {
        tagName,
        props
      };
  
      this.props = this._makePropsProxy(props);
  
      this.eventBus = () => eventBus;
  
      this._registerEvents(eventBus);
      eventBus.emit(Block.EVENTS.INIT);
    }
  
    _registerEvents(eventBus:EventBus):void {
      eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
      eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
      eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }
  
    _createResources() {
      const { tagName } = this._meta;
      this._element = this._createDocumentElement(tagName);
    }
  
    init():void {
      this._createResources();
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }
  
    _componentDidMount():void {
      this.componentDidMount();
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  
    componentDidMount() {}
  
    _componentDidUpdate():void {
        //oldProps : object, newProps: object
        //this.componentDidUpdate(oldProps, newProps);    
        this.componentDidUpdate();    
    }
  
    // Может переопределять пользователь, необязательно трогать
    componentDidUpdate():boolean {
      //oldProps : object, newProps: object
      //TODO - разобраться что здесь происходит с пропсами
      //console.log(oldProps)
      //console.log(newProps)
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
      return true;
    }
  
    setProps = (nextProps: object):boolean => {
      if (!nextProps) {
        return false;
      }
      Object.assign(this._makePropsProxy(this.props), nextProps);
      this.eventBus(this.props, nextProps).emit(Block.EVENTS.FLOW_CDU);
      return false;
    };
  
    get element() {
      return this._element;
    }
  
    _render() {
      const block = this.render();      
      if (block) {
        this._element.innerHTML = block;
      }
      
    }
  
    render(): string | void {}
  
    getContent(): HTMLElement {
      return this.element;
    }
  
    _makePropsProxy(props:{[key:string]: unknown}) {

      const proxyData = new Proxy(props, { 
        get(target, prop:string | number) {
          if (typeof prop === 'string' && prop.indexOf('_') === 0) {
            throw new Error('Нет прав');
           }
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        },
        set(target, prop:string | number, value) {
          target[prop] = value;
          return true;
        },
        deleteProperty() {
           throw new Error('Нет прав');         
        },
      });
  
      return proxyData;
    }
  
    _createDocumentElement(tagName: string): HTMLElement {
      // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
      return document.createElement(tagName);
    }
  
    show(): void {
      this.getContent().style.display = "block";
      
    }
  
    hide(): void {
      this.getContent().style.display = "none";   
    }
  }