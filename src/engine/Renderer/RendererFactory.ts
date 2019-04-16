import { Viewport } from '@engine/Viewport';

import { IRendererConfig } from './IRendererConfig';

import { CanvasRenderer } from './canvas';

export class RendererFactory {
  static getCanvasRenderer(viewport: Viewport, config: IRendererConfig) {
    return new CanvasRenderer(viewport, config);
  }
}
