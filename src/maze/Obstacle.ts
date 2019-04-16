import {
  RectangleObject,
  Rectangle,
} from '../engine';

export class Obstacle extends RectangleObject {
  static DEFAULT_COLOR = 'rgb(69, 69, 69)';

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    name: string,
  ) {
    super(name);

    this.setPosition(x, y);
    this.updateable = false;

    this.width = width;
    this.height = height;

    this.geom = new Rectangle(this.x, this.y, this.width, this.height);
  }
}
