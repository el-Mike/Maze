import {
  Rectangle,
  Graphics,
  GameObject,
} from '../engine';

export class Obstacle extends GameObject {
  static DEFAULT_COLOR = 'rgb(69, 69, 69)';

  constructor(
    private graphics: Graphics,
    private x: number,
    private y: number,
    private width: number,
    private height: number,
    name: string,
  ) {
    super(name);

    this.updateable = false;
  }

  update() {}

  render() {
    const rect = new Rectangle(this.x, this.y, this.width, this.height);

    this.graphics.setFillColor(Obstacle.DEFAULT_COLOR);
    return this.graphics.drawRect(rect);
  }
}
