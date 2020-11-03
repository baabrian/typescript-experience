import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

import { Circle } from './composition/Circle';
import { Rectangle } from './composition/Rectangle';
import { Wall } from './composition/Wall';
import { Window } from './composition/Window';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

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
