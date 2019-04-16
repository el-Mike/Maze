import { CanvasRenderer } from '@engine/Renderer';

import { GameObject } from './GameObject';

export class Group extends GameObject {

  private _objects: GameObject[] = [];

  constructor(name: string) {
    super(name);
  }

  public add(...objects: GameObject[]) {
    this._objects.push(...objects);
  }

  public update() {
    this.objects.forEach(object => object.update());
  }

  public canvasRender(renderer: CanvasRenderer) {
    this.objects.forEach(object => object.canvasRender(renderer));
  }

  get objects() {
    return this._objects;
  }
}
