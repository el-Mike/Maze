import { isDefined } from '../utils';

import { Point } from './Point';

export class Rectangle {
  private _x1: number;
  private _y1: number;

  private _right: number;
  private _left: number;
  private _up: number;
  private _bottom: number;

  constructor(
    x: number,
    y: number,
    private _width: number,
    private _height: number,
  ) {
    this._x1 = isDefined(x) ? x : 0;
    this._y1 = isDefined(y) ? y : this.x1;

    this._left = this.x1;
    this._right - this.left + this.width;
    this._up = this.y1;
    this._bottom = this.y1 + this.height;
  }

  public get x1() {
    return this._x1;
  }

  public  get y1() {
    return this._y1;
  }

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }

  public get left() {
    return this._left;
  }

  public get right() {
    return this._right;
  }

  public get up() {
    return this._up;
  }

  public get bottom() {
    return this._bottom;
  }
}
