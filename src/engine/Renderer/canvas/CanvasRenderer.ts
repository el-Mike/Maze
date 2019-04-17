import { IGameConfig } from '@engine/Config';
import { Viewport } from '@engine/Viewport';
import { DisplayList } from '@engine/GameObject';

import { RENDERER_CONTEXT_NOT_DEFINED } from './errors';
import { Renderer } from '../Renderer';


export class CanvasRenderer extends Renderer {
  private context: CanvasRenderingContext2D;

  constructor(
    viewport: Viewport,
    config: IGameConfig,
  ) {
    super(config);

    this.context = viewport.getContext();

    if (!this.context) {
      throw new Error(RENDERER_CONTEXT_NOT_DEFINED);
    }
  }

  public getContext() {
    return this.context;
  }

  public preRender() {
    const context = this.context;
    /**
     * cleaning the context
     */
    context.clearRect(0, 0, this.config.width, this.config.height);

    /**
     * Rendering background
     */

    context.fillStyle = this.config.backgroundColor;
    context.fillRect(0, 0, this.config.width, this.config.height);
  }

  public render(displayList: DisplayList) {
    displayList.each(gameObject => {
      gameObject.canvasRender(this);
    });
  }

  /**
   * @TODO: Remove when Text GameObject is available.
   * 
   * Temporary helper function to render FPS Counter
   * @param fps 
   */
  public renderFpsCount(fps?: number) {
    const context = this.context;

    context.fillStyle = 'rgb(0, 0, 0)';
    context.font = "20px Arial";
    context.fillText(`FPS: ${fps}`, this.config.width - 150, 50);
  }
}
