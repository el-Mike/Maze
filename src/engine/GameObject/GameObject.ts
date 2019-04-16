import { Vector2 } from '@engine/Math';
import { CanvasRenderer } from '@engine/Renderer';

export abstract class GameObject {
  private _position: Vector2;
  private _width: number;
  private _height: number;
  private _updateable = true;
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public abstract update(): void;
  public abstract canvasRender(renderer: CanvasRenderer): void;

  public setPosition(x: number, y: number) {
    this._position = new Vector2(x, y);
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
