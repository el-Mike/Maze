import { isDefined } from '../utils';

export class Vector2 {
  private _x: number;
  private _y: number;

  constructor(
    x: number,
    y: number,
  ) {
    this._x = isDefined(x) ? x : 0;
    this._y = isDefined(y) ? y : this._x; 
  }

  public add(source: Vector2) {
    this.x += source.x;
    this.y += source.y;

    return this;
  }

  public subtract(source: Vector2) {
    this.x -= source.x;
    this.y -= source.y;

    return this;
  }

  public multiply(source: Vector2) {
    this.x *= source.x;
    this.y *= source.y;

    return this;
  }

  public scale(factor: number) {
    this.x *= factor;
    this.y *= factor;

    return this;
  }

  public clone() {
    return new Vector2(this.x, this.y);
  }

  public set(x: number, y: number) {
    this.x = x;
    this.y = y;

    return this;
  }

  public get x() {
    return this._x;
  }

  public set x(value: number) {
    this._x = value;
  }

  public get y() {
    return this._y;
  }

  public set y(value: number) {
    this._y = value;
  }
}
