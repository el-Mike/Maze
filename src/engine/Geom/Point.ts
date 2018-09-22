export class Point {
  private _x: number;
  private _y: number;

  constructor(
    x: number,
    y: number,
  ) {
    this.setTo(x, y);
  }

  public setTo(x: number, y: number) {
    this._x = x || 0;
    this._y = y || this._x;
  }

  public equals(point: Point) {
    return this.x === point.x && this.y === point.y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}
