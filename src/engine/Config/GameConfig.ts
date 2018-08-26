export interface IGameConfig {
  parentElement: HTMLElement | string;
  width?: number;
  height?: number;
  fpsLimit?: number;

  backgroundColor?: string;

  showFps?: boolean;
}

export class GameConfig implements IGameConfig {
  private _parentElement: HTMLElement | string;
  private _width: number;
  private _height: number;
  private _fpsLimit: number;
  private _backgroundColor: string;
  private _showFps: boolean;

  constructor(config: IGameConfig) {
    this._parentElement = config.parentElement;
    this.width = config.width || 800;
    this.height = config.height || 600;
    this.fpsLimit = config.fpsLimit || 60;
    this.backgroundColor = config.backgroundColor || 'rgb(0, 0 ,0)';
    this._showFps = Boolean(config.showFps);
  }

  public get parentElement() {
    return this._parentElement;
  }

  public set canvasElement(value: HTMLElement | string) {
    this._parentElement = value;
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

  public get fpsLimit() {
    return this._fpsLimit;
  }

  public set fpsLimit(value: number) {
    this._fpsLimit = value;
  }

  public get backgroundColor() {
    return this._backgroundColor;
  }

  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  public get showFps() {
    return this._showFps;
  }

  public set showFps(value: boolean) {
    this._showFps = value;
  }
}
