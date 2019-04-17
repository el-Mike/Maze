import { IGameConfig } from '@engine/Config';

import { DisplayList } from '@engine/GameObject';

export abstract class Renderer {
  protected _config: IGameConfig;

  constructor(config: IGameConfig) {
    this.config = config;
  }

  public abstract preRender(): void;
  public abstract render(displayList: DisplayList): void;

  /**
   * @TODO: Remove when Text GameObject is available.
   * @param fps
   */
  public abstract renderFpsCount(fps?: number): void;

  public get config() {
    return this._config;
  }

  public set config(value: IGameConfig) {
    this._config = value;
  }
}
