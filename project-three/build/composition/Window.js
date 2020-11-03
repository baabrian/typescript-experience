"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Window = void 0;
var Window = /** @class */ (function () {
    function Window(open, shape) {
        this.open = open;
        this.dimensions = shape;
    }
    Window.prototype.toggleOpen = function () {
        this.open = !this.open;
    };
    Window.prototype.area = function () {
        return this.dimensions.area();
    };
    return Window;
}());
exports.Window = Window;
