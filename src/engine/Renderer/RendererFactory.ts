import { IGameConfig } from '@engine/Config';
import { Viewport } from '@engine/Viewport';

import { WEBGQL_RENDERING_NOT_SUPPORTED } from './errors'
import { RenderType } from './RenderType';

import { CanvasRenderer } from './canvas';

export class RendererFactory {
  static getRenderer(viewport: Viewport, config: IGameConfig) {
    if (!config.renderType || config.renderType === RenderType.CANVAS) {
      return new CanvasRenderer(viewport, config);
    } else {
      /**
       * WebGL Rendering, not supported at the moment
       */

       throw new Error(WEBGQL_RENDERING_NOT_SUPPORTED);
    }
  }
}
