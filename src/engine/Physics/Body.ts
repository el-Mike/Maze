import { Vector2 } from '../Math';

import { GameObject } from '../GameObject';

import { Collision } from './Collision';

export abstract class Body<T extends GameObject> {
  protected _position: Vector2;
  private _width: number;
  private _height: number;

  protected _velocity: Vector2;
  protected _collision: Collision;

  constructor(
    public gameObject: T,
  ) {
    this._position = new Vector2(gameObject.x, gameObject.y);
    this._velocity = new Vector2();
  }

  public updatePosition() {
    this.position.add(this.velocity);
    this.gameObject.setPosition(this.position.x, this.position.y);
  }

  public abstract update(): void;

  public get speed() {
    return this._velocity.length;
  }

  public get position(): Vector2 {
    return this._position;
  }

  public get x(): number {
    return this._position.x;
  }

  public set x(value: number) {
    this._position.x = value;
  }

  public get y(): number {
    return this._position.y;
  }

  public set y(value: number) {
    this._position.y = value;
  }

  public get width() {
    return this._width;
  }

  public set width(value: number) {
    this._width = value;
  }

  public get height() {
    return this._height;
  }

  public set height(value: number) {
    this._height = value;
  }

  public set position(value: Vector2) {
    this._position = value;
  }

  public get velocity(): Vector2 {
    return this._velocity;
  }

  public set velocity(value: Vector2) {
    this._velocity = value;
  }
}
