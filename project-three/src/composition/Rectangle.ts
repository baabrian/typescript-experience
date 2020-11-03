import { Shape } from './interfaces/Shape';

export class Rectangle implements Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  area(): number {
    return this.height * this.width;
  }
}
