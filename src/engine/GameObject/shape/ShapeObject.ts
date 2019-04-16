import { GameObject } from '../GameObject';

export abstract class ShapeObject<T> extends GameObject {
  protected _geom: T;
  protected _color: string;

  public get geom() {
    return this._geom;
  }

  public set geom(value: T) {
    this._geom = value;
  }

  public get color() {
    return this._color;
  }

  public set color(value: string) {
    this._color = value;
  }
}
