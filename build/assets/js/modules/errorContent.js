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
var ErrorContent = /** @class */ (function (_super) {
    __extends(ErrorContent, _super);
    function ErrorContent(props) {
        return _super.call(this, "div", props) || this;
    }
    ErrorContent.prototype.render = function () {
        var _a;
        var Handlebars = window.Handlebars;
        if (document.querySelector("#error-block")) {
            var contentTemplate = (_a = document.querySelector("#error-block")) === null || _a === void 0 ? void 0 : _a.innerHTML;
            var result = Handlebars.compile(contentTemplate)(this.props);
            return result;
        }
        return null;
    };
    return ErrorContent;
}(Block));
export { ErrorContent };
//# sourceMappingURL=errorContent.js.map