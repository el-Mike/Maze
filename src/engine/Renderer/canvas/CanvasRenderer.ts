import { Viewport } from '@engine/Viewport';
import { DisplayList } from '@engine/GameObject';

import { RENDERER_CONTEXT_NOT_DEFINED } from './errors';
import { IRendererConfig } from '../IRendererConfig';
import { Renderer } from '../Renderer';


export class CanvasRenderer extends Renderer {
  private context: CanvasRenderingContext2D;

  private displayList: DisplayList; 

  constructor(
    viewport: Viewport,
    config: IRendererConfig,
  ) {
    super(config);

    this.context = viewport.getContext();

    if (!this.context) {
      throw new Error(RENDERER_CONTEXT_NOT_DEFINED);
    }
  }

  public setDisplayList(list: DisplayList) {
    this.displayList = list;
  }

  public getContext() {
    return this.context;
  }

  public render(fps?: number) {
    const context = this.context;

    /**
     * cleaning the context
     */
    context.clearRect(0, 0, this.config.viewportWidth, this.config.viewportHeight);

    /**
     * Rendering background
     */
    context.fillStyle = this.config.backgroundColor;
    context.fillRect(0, 0, this.config.viewportWidth, this.config.viewportHeight);

    this.displayList.each(gameObject => {
      gameObject.canvasRender(this);
    });

    if (this.config.showFps) {
      context.fillStyle = 'rgb(0, 0, 0)';
      context.font = "20px Arial";
      context.fillText(`FPS: ${fps}`, this.config.viewportWidth - 150, 50);
    }
  }
}
