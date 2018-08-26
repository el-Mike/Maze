export abstract class GameObject {
  private _updateable = true;
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public abstract update(): void
  public abstract render(context: CanvasRenderingContext2D): void

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
