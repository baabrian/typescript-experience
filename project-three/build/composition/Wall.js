"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
var Wall = /** @class */ (function () {
    function Wall(color, shape) {
        this.color = color;
        this.dimensions = shape;
    }
    Wall.prototype.area = function () {
        return this.dimensions.area();
    };
    return Wall;
}());
exports.Wall = Wall;
