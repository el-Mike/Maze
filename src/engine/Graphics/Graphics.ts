import { CONTEXT_NOT_DEFINED } from '../errors';

import { Viewport } from '../Viewport';

import { Rectangle } from '../Geom';

const DEFAULT_COLOR = 'rgb(0, 0, 0)';

export class Graphics {
  private context: CanvasRenderingContext2D;
  private currentFillColor: string = DEFAULT_COLOR;

  constructor(viewport: Viewport) {
    const context = viewport.getContext();

    if (!context) {
      throw new Error(CONTEXT_NOT_DEFINED);
    }
    this.context = context;
  }

  public setFillColor(color: string) {
    this.currentFillColor = color || DEFAULT_COLOR;
  }

  public drawRect(rect: Rectangle) {
    this.context.fillStyle = this.currentFillColor;
    this.context.fillRect(rect.x1, rect.y1, rect.width, rect.height);
  }
}
