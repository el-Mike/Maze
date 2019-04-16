import {
  CanvasRenderer
} from '@engine/Renderer';

import { RectangleObject } from './RectangleObject';

const DEFAULT_COLOR = 'rgb(0, 0, 0)';

export class RectangleCanvasRenderer {
  constructor(
    private rectangleObject: RectangleObject,
    private mainRenderer: CanvasRenderer,
  ) {}

  public render() {
    const context = this.mainRenderer.getContext();
    const rect = this.rectangleObject.geom;

    context.fillStyle = this.rectangleObject.color || DEFAULT_COLOR;
    context.fillRect(rect.x1, rect.y1, rect.width, rect.height);
  }
}
