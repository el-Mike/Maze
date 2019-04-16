import { GameObject } from '@engine/GameObject';

import { Body } from './Body';
import { Collider } from './Collider';

export class World {
  private _bodies: Body<GameObject>[];
  private _colliders: Collider[];

  constructor() {
    this._bodies = [];
  }

  public addBodies(...bodies: Body<GameObject>[]) {
    this._bodies.push(...bodies);
  }

  public update() {
    this._bodies.forEach(body => body.update());
  }
}
