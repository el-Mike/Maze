interface ICollision {
  none: boolean;
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
}

export class Collision implements ICollision {
  private _none: boolean;
  private _up: boolean;
  private _down: boolean;
  private _left: boolean;
  private _right: boolean;

  constructor(collision: ICollision = null) {
    this._none = collision ? collision.none : true;
    this._up = collision ? collision.up : false;
    this._down = collision ? collision.down : false;
    this._left = collision ? collision.left : false;
    this._right = collision ? collision.right : false;
	}

	public get none(): boolean {
		return this._none;
	}

	public set none(value: boolean) {
		this._none = value;
	}

	public get up(): boolean {
		return this._up;
	}

	public set up(value: boolean) {
		this._up = value;
	}

	public get down(): boolean {
		return this._down;
	}

	public set down(value: boolean) {
		this._down = value;
	}

	public get left(): boolean {
		return this._left;
	}

	public set left(value: boolean) {
		this._left = value;
	}

	public get right(): boolean {
		return this._right;
	}

	public set right(value: boolean) {
		this._right = value;
	}
}
