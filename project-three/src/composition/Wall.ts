import { Shape } from './interfaces/Shape';

export class Wall {
  color: string;
  dimensions: Shape;

  constructor(color: string, shape: Shape) {
    this.color = color;
    this.dimensions = shape;
  }

  area(): number {
    return this.dimensions.area();
  }
}
