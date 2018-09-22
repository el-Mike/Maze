import { isDefined } from '../utils';

import { Point } from './Point';

export class Rectangle {
  private _x1: number;
  private _y1: number;

  constructor(
    x: number,
    y: number,
    private _width: number,
    private _height: number,
  ) {
    this._x1 = isDefined(x) ? x : 0;
    this._y1 = isDefined(y) ? y : this.x1;
  }

  get x1() {
    return this._x1;
  }

  get y1() {
    return this._y1;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
}
