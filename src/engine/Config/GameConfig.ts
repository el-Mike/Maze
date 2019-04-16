import { IRendererConfig } from '@engine/Renderer'; 

export interface IGameConfig {
  parentElement: HTMLElement | string;
  width?: number;
  height?: number;
  fpsLimit?: number;

  rendererConfig: IRendererConfig;
}

export class GameConfig implements IGameConfig {
  private _parentElement: HTMLElement | string;
  private _width: number;
  private _height: number;
  private _fpsLimit: number;
  private _rendererConfig: IRendererConfig;

  constructor(config: IGameConfig) {
    this._parentElement = config.parentElement;
    this.width = config.width || 800;
    this.height = config.height || 600;
    this.fpsLimit = config.fpsLimit || 60;
    this.rendererConfig = {
      backgroundColor: config.rendererConfig.backgroundColor || 'rgb(0, 0 ,0)',
      showFps: Boolean(config.rendererConfig.showFps),
      viewportWidth: config.width || 800,
      viewportHeight: config.height || 600
    };
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

  public get rendererConfig() {
    return this._rendererConfig;
  }

  public set rendererConfig(value: IRendererConfig) {
    this._rendererConfig = value;
  }
}
