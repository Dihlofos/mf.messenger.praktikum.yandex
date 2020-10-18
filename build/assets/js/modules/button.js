var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Block } from './block.js';
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        return _super.call(this, "div", props) || this;
    }
    Button.prototype.render = function () {
        var Handlebars = window.Handlebars;
        var result = Handlebars.compile("<button class=\"button {{class}}\" type=\"{{type}}\">{{text}}</button>")(this.props);
        return result;
    };
    return Button;
}(Block));
export { Button };
//# sourceMappingURL=button.js.map