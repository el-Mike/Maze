import { IRendererConfig } from './IRendererConfig';

export abstract class Renderer {
  protected _config: IRendererConfig;

  constructor(config: IRendererConfig) {
    this.config = config;
  }

  public abstract render(): void;

  public get config() {
    return this._config;
  }

  public set config(value: IRendererConfig) {
    this._config = value;
  }
}
