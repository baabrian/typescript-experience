"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var Circle_1 = require("./composition/Circle");
var Rectangle_1 = require("./composition/Rectangle");
var Wall_1 = require("./composition/Wall");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
console.log("Composition with shapes for windows and walls");
var circle = new Circle_1.Circle(12);
console.log("Circle Area: " + circle.area());
var circleWall = new Wall_1.Wall('blue', circle);
console.log("Circle Wall Area: " + circleWall.area() + "\n  Circle Wall Color: " + circleWall.color);
var rectangle = new Rectangle_1.Rectangle(4, 12);
console.log("Rectangle Area: " + rectangle.area());
var rectangleWall = new Wall_1.Wall('orange', rectangle);
console.log("Rectangle Wall Area: " + rectangleWall.area() + "\n  Rectangle Wall Color: " + rectangleWall.color);
