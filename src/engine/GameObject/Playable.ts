import { GameObject } from './GameObject';

export abstract class Playable extends GameObject {
  private _velocityX: number;
  private _velocityY: number;

  private _moveSpeed: number;

  constructor(name: string) {
    super(name);

    this._velocityX = 0;
    this._velocityY = 0;
  }

  public get velocityX() {
    return this._velocityX;
  }

  public set velocityX(value: number) {
    this._velocityX = value;
  }

  public get velocityY() {
    return this._velocityY;
  }

  public set velocityY(value: number) {
    this._velocityY = value;
  }

  public get moveSpeed() {
    return this._moveSpeed;
  }

  public set moveSpeed(value: number) {
    this._moveSpeed = value;
  }
}
