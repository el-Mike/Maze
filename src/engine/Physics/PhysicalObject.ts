import { GameObject } from '../GameObject';

import { Body } from './Body';

export class PhysicalObject extends GameObject {
  private _body: Body;

  constructor(name: string) {
    super(name);
  }

  public setBody(body: Body) {
    this._body = body;
  }

  public update() {
    this._body.update();
    this._body.updatePosition();
  }

  public render() {
    this._body.render();
  }
}
