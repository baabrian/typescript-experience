import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

import { Circle } from './composition/Circle';
import { Rectangle } from './composition/Rectangle';
import { Wall } from './composition/Wall';
import { Window } from './composition/Window';
import { Summary } from './Summary';
import { ConsoleReport } from './report/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './report/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

console.log(`Composition with shapes for windows and walls`);
const circle = new Circle(12);
console.log(`Circle Area: ${circle.area()}`);
const circleWall = new Wall('blue', circle);
console.log(
  `Circle Wall Area: ${circleWall.area()}
Circle Wall Color: ${circleWall.color}`
);

const rectangle = new Rectangle(4, 12);
console.log(`Rectangle Area: ${rectangle.area()}`);
const rectangleWall = new Wall('orange', rectangle);
console.log(
  `Rectangle Wall Area: ${rectangleWall.area()}
Rectangle Wall Color: ${rectangleWall.color}`
);
