import { Vector2 } from '../Math';

import { GameObject } from '../GameObject';

export abstract class Body {
  protected _position: Vector2;
  protected _velocity: Vector2;

  constructor(
    protected gameObject: GameObject,
  ) {
    this._position = new Vector2(gameObject.x, gameObject.y);
    this._velocity = new Vector2();
  }

  public updatePosition() {
    this.position.add(this.velocity);

    this.gameObject.setPosition(this.position.x, this.position.y);
  }

  public abstract update(): void;
  public abstract render(): void;

  public get speed() {
    return this._velocity.length;
  }

  public get position(): Vector2 {
    return this._position;
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
