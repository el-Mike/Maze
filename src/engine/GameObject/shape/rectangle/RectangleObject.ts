import { Rectangle } from '@engine/Geom';

import { CanvasRenderer } from '@engine/Renderer';

import { ShapeObject } from '../ShapeObject';

import { RectangleCanvasRenderer } from './RectangleCanvasRenderer';

export class RectangleObject extends ShapeObject<Rectangle> {
  public update() {}

  public canvasRender(mainRenderer: CanvasRenderer) {
    const renderer = new RectangleCanvasRenderer(this, mainRenderer);

    renderer.render();
  }
}
