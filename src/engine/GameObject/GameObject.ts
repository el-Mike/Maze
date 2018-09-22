import { isDefined } from '../utils';

export abstract class GameObject {
  private _x: number;
  private _y: number;
  private _updateable = true;
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public abstract update(): void;
  public abstract render(): void;

  public setPosition(x: number, y: number) {
    this._x = isDefined(x) ? x : 0;
    this._y = isDefined(y) ? y : this._x;
  }

  public get x(): number {
    return this._x;
  }

  public set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }

  public set y(value: number) {
    this._y = value;
  }

  public get name() {
    return this._name;
  }

  public get updateable() {
    return this._updateable;
  }

  public set updateable(value: boolean) {
    this._updateable = value;
  }
}
