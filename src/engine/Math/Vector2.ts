import { isDefined } from '../utils';

export class Vector2 {
  private _x: number;
  private _y: number;

  constructor(
    x: number = 0,
    y: number = 0,
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

  public divide(source: Vector2) {
    this.x /= source.x;
    this.y /= source.y;

    return this;
  }

  public scale(factor: number) {
    this.x *= factor;
    this.y *= factor;

    return this;
  }

  public distance(vector: Vector2) {
    const x = vector.x - this.x;
    const y = vector.y - this.y;

    return Math.sqrt((x * x) + (y * y));
  }

  public normalize() {
    const length = this.length;

    if (length >  0) {
      this.x /= length;
      this.y /= length;  
    }

    return this;
  }

  public dot(vector: Vector2) {
    return this.x * vector.x + this.y * vector.y;
  }

  public equals(target: Vector2) {
    return this.x === target.x && this.y === target.y;
  }

  public copy(source: Vector2) {
    this.x = source.x || 0;
    this.y = source.y || 0;
  }

  public clone() {
    return new Vector2(this.x, this.y);
  }

  public set(x: number, y: number) {
    this.x = x || 0;
    this.y = y || 0;

    return this;
  }

  public get length() {
    const x = this.x;
    const y = this.y;

    return Math.sqrt((x * x) + (y * y));
  }

  public get x() {
    return this._x;
  }

  public set x(value: number) {
    this._x = value || 0;
  }

  public get y() {
    return this._y;
  }

  public set y(value: number) {
    this._y = value || 0;
  }

  public static ZERO = new Vector2(0, 0);
}
