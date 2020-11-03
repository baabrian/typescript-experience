import { Shape } from './interfaces/Shape';

export class Window {
  open: boolean;
  dimensions: Shape;

  constructor(open: boolean, shape: Shape) {
    this.open = open;
    this.dimensions = shape;
  }

  toggleOpen(): void {
    this.open = !this.open;
  }

  area(): number {
    return this.dimensions.area();
  }
}
